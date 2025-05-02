import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Editor } from '@tinymce/tinymce-react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useToast,
  VStack,
  Image,
  Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ContentFormProps {
  initialData?: any;
  mode?: 'create' | 'edit';
  onSubmit: (data: any) => Promise<void>;
}

export default function ContentForm({ initialData, mode = 'create', onSubmit }: ContentFormProps) {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm({
    defaultValues: initialData || {
      title: '',
      content: '',
      excerpt: '',
      status: 'draft',
      service_id: '',
      category_id: '',
      featured_image: '',
      seo_title: '',
      seo_description: '',
      tags: []
    }
  });

  const selectedService = watch('service_id');

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (selectedService) {
      fetchCategories(selectedService);
    }
  }, [selectedService]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('id, title')
        .eq('is_published', true);

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: 'Error fetching services',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const fetchCategories = async (serviceId: string) => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name')
        .eq('service_id', serviceId)
        .eq('is_active', true);

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast({
        title: 'Error fetching categories',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];
    setSelectedFile(file);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `content-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleFormSubmit = async (data: any) => {
    try {
      setLoading(true);

      // Upload image if selected
      if (selectedFile) {
        const imageUrl = await uploadImage(selectedFile);
        data.featured_image = imageUrl;
      }

      // Format tags if provided as string
      if (typeof data.tags === 'string') {
        data.tags = data.tags.split(',').map((tag: string) => tag.trim());
      }

      await onSubmit(data);

      toast({
        title: `Content ${mode === 'create' ? 'created' : 'updated'} successfully`,
        status: 'success',
        duration: 3000,
      });

      if (mode === 'create') {
        router.push('/admin/content');
      }
    } catch (error) {
      console.error('Error submitting content:', error);
      toast({
        title: 'Error submitting content',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack spacing={6} align="stretch">
        <FormControl isRequired isInvalid={!!errors.title}>
          <FormLabel>Title</FormLabel>
          <Input {...register('title', { required: 'Title is required' })} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Controller
            name="content"
            control={control}
            rules={{ required: 'Content is required' }}
            render={({ field }) => (
              <Editor
                apiKey="your-tinymce-api-key"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                    'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                    'fullscreen', 'insertdatetime', 'media', 'table', 'code',
                    'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help'
                }}
                onEditorChange={(content) => field.onChange(content)}
                value={field.value}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Excerpt</FormLabel>
          <Textarea {...register('excerpt')} />
        </FormControl>

        <Stack direction={['column', 'row']} spacing={4}>
          <FormControl isRequired>
            <FormLabel>Service</FormLabel>
            <Select {...register('service_id', { required: 'Service is required' })}>
              <option value="">Select Service</option>
              {services.map((service: any) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select {...register('category_id')} isDisabled={!selectedService}>
              <option value="">Select Category</option>
              {categories.map((category: any) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>Featured Image</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {(previewUrl || initialData?.featured_image) && (
            <Box mt={2}>
              <Image
                src={previewUrl || initialData?.featured_image}
                alt="Preview"
                maxH="200px"
                objectFit="cover"
              />
            </Box>
          )}
        </FormControl>

        <Stack direction={['column', 'row']} spacing={4}>
          <FormControl>
            <FormLabel>SEO Title</FormLabel>
            <Input {...register('seo_title')} />
          </FormControl>

          <FormControl>
            <FormLabel>SEO Description</FormLabel>
            <Input {...register('seo_description')} />
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>Tags (comma-separated)</FormLabel>
          <Input {...register('tags')} placeholder="tag1, tag2, tag3" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select {...register('status', { required: 'Status is required' })}>
            <option value="draft">Draft</option>
            <option value="review">Review</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </Select>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading}
          loadingText="Submitting"
        >
          {mode === 'create' ? 'Create Content' : 'Update Content'}
        </Button>
      </VStack>
    </form>
  );
}
