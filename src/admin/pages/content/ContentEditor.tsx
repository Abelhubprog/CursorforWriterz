import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  FiArrowLeft,
  FiEye,
  FiSave,
  FiCheckSquare,
  FiCalendar,
  FiClock,
  FiImage,
  FiPlus,
  FiTrash2,
  FiArrowUp,
  FiArrowDown,
  FiEdit,
} from 'react-icons/fi';
import { useToast } from '@/components/ui/toast/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

// Keep the existing interfaces unchanged...

const ContentEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showBlockForm, setShowBlockForm] = useState(false);
  const [editorMode, setEditorMode] = useState<'markdown' | 'blocks'>('markdown');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [services, setServices] = useState<{id: string; name: string; slug: string}[]>([]);
  const [categories, setCategories] = useState<{id: string; name: string}[]>([]);
  const [post, setPost] = useState<Post>({
    title: '',
    slug: '',
    status: 'draft'
  });

  // Load post data if we're editing an existing post
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Load services
        const { data: servicesData } = await supabase
          .from('services')
          .select('id, title, slug')
          .eq('is_active', true);
          
        if (servicesData) {
          setServices(servicesData.map(s => ({
            id: s.id,
            name: s.title,
            slug: s.slug
          })));
        }
        
        // If we have an ID, fetch the post
        if (id && id !== 'new') {
          const { data: postData, error } = await supabase
            .from('content')
            .select(`
              *,
              services (id, title, slug)
            `)
            .eq('id', id)
            .single();
          
          if (error || !postData) {
            throw new Error('Failed to load post');
          }
          
          setPost({
            id: postData.id,
            title: postData.title,
            slug: postData.slug,
            content: postData.content,
            contentBlocks: postData.content_blocks,
            status: postData.status,
            service: postData.services?.slug,
            category: postData.categories?.[0],
            scheduledFor: postData.metadata?.scheduled_for,
            featuredImage: postData.featured_image
          });
          
          // If post has scheduledFor, parse it for the date/time pickers
          if (postData.metadata?.scheduled_for) {
            const date = new Date(postData.metadata.scheduled_for);
            setScheduledDate(date.toISOString().split('T')[0]);
            setScheduledTime(date.toTimeString().split(' ')[0].substring(0, 5));
            setShowSchedule(true);
          }
          
          // Load categories for this service
          if (postData.services?.id) {
            const { data: categoriesData } = await supabase
              .from('categories')
              .select('id, name')
              .eq('service_id', postData.services.id);
              
            if (categoriesData) {
              setCategories(categoriesData);
            }
          }
        }
      } catch (error) {
        console.error('Error loading post:', error);
        toast({
          title: 'Error',
          description: 'Failed to load content. Please try again.',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id, navigate, toast]);

  // When service changes, load categories for that service
  useEffect(() => {
    const loadCategories = async () => {
      if (post.service) {
        // Get service ID
        const { data: serviceData } = await supabase
          .from('services')
          .select('id')
          .eq('slug', post.service)
          .single();
          
        if (serviceData) {
          const { data: categoriesData } = await supabase
            .from('categories')
            .select('id, name')
            .eq('service_id', serviceData.id);
            
          if (categoriesData) {
            setCategories(categoriesData);
          }
        }
      } else {
        setCategories([]);
      }
    };
    
    loadCategories();
  }, [post.service]);

  // Handlers for form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
    
    // Clear any errors for this field
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Generate slug from title
  const generateSlug = () => {
    if (post.title) {
      const slug = post.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      setPost(prev => ({ ...prev, slug }));
    }
  };

  // Validate the form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!post.title) newErrors.title = 'Title is required';
    if (!post.slug) newErrors.slug = 'Slug is required';
    if (!post.service) newErrors.service = 'Service is required';
    
    // Add more validation as needed
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save post
  const savePost = async (status?: Post['status']) => {
    if (!validateForm()) return;
    
    try {
      setSaving(true);
      
      const postToSave = {
        ...post,
        status: status || post.status
      };
      
      if (id && id !== 'new') {
        // Update existing post
        const { error } = await supabase
          .from('content')
          .update({
            title: postToSave.title,
            slug: postToSave.slug,
            content: postToSave.content,
            content_blocks: postToSave.contentBlocks,
            status: postToSave.status,
            featured_image: postToSave.featuredImage,
            metadata: {
              scheduled_for: postToSave.scheduledFor
            }
          })
          .eq('id', id);
          
        if (error) {
          throw error;
        }
        
        toast({
          title: 'Content saved',
          description: 'Your content has been saved successfully.'
        });
      } else {
        // Create new post
        // First get service ID
        const { data: serviceData, error: serviceError } = await supabase
          .from('services')
          .select('id')
          .eq('slug', postToSave.service)
          .single();
          
        if (serviceError || !serviceData) {
          throw new Error('Invalid service');
        }
        
        const { data, error } = await supabase
          .from('content')
          .insert({
            title: postToSave.title,
            slug: postToSave.slug,
            content: postToSave.content,
            content_blocks: postToSave.contentBlocks,
            status: postToSave.status,
            service_id: serviceData.id,
            categories: postToSave.category ? [postToSave.category] : [],
            author_id: user?.id,
            featured_image: postToSave.featuredImage,
            metadata: {
              scheduled_for: postToSave.scheduledFor
            }
          })
          .select('id')
          .single();
          
        if (error) {
          throw error;
        }
        
        toast({
          title: 'Content created',
          description: 'Your content has been created successfully.'
        });
        
        // Navigate to edit view with the new ID
        navigate(`/admin/content/${data.id}`);
      }
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: 'Save failed',
        description: 'Failed to save content. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    try {
      setUploading(true);
      const file = files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `content/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);
        
      if (uploadError) {
        throw uploadError;
      }
      
      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);
        
      setPost(prev => ({ ...prev, featuredImage: data.publicUrl }));
      
      toast({
        title: 'Image uploaded',
        description: 'Featured image has been uploaded successfully.'
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Upload failed',
        description: 'Failed to upload image. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <FiArrowLeft className="mr-2" /> Back to Content
        </button>
        
        <h1 className="text-3xl font-bold mt-4">
          {id && id !== 'new' ? 'Edit Content' : 'Create New Content'}
        </h1>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-blue-600"></div>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main content editor */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={post.title || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                  )}
                </div>
                
                <div className="flex items-end space-x-4">
                  <div className="flex-1">
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                      Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={post.slug || ''}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                    {errors.slug && (
                      <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={generateSlug}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Generate from Title
                  </button>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content (Markdown)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="content"
                      name="content"
                      rows={12}
                      value={post.content || ''}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-mono"
                    />
                  </div>
                  {errors.content && (
                    <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                  )}
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={togglePreview}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FiEye className="mr-2 -ml-1" /> 
                    {previewMode ? 'Edit' : 'Preview'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => savePost('draft')}
                    disabled={saving}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FiSave className="mr-2 -ml-1" /> Save Draft
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => savePost('published')}
                    disabled={saving}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FiCheckSquare className="mr-2 -ml-1" /> Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Settings panel */}
            <div className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Settings</h3>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={post.service || ''}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.slug}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={post.category || ''}
                      onChange={handleInputChange}
                      disabled={!post.service}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={post.status}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>
                  
                  {/* Featured image uploader */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Featured Image
                    </label>
                    <div className="mt-1 flex items-center">
                      {post.featuredImage ? (
                        <div className="relative">
                          <img
                            src={post.featuredImage}
                            alt="Featured"
                            className="h-32 w-auto object-cover rounded"
                          />
                          <button
                            onClick={() => setPost(prev => ({ ...prev, featuredImage: undefined }))}
                            className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer block w-full">
                          <div className="border-2 border-gray-300 border-dashed rounded-md p-4 text-center hover:border-gray-400">
                            <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                            <span className="mt-2 block text-sm text-gray-500">
                              {uploading ? 'Uploading...' : 'Click to upload image'}
                            </span>
                          </div>
                          <input
                            type="file"
                            onChange={handleImageUpload}
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentEditor;