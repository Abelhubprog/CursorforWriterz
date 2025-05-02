import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Text,
  IconButton
} from '@chakra-ui/react';
import { FiMoreVertical, FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/router';

const statusColors = {
  draft: 'gray',
  review: 'yellow',
  published: 'green',
  archived: 'red'
};

interface Content {
  id: string;
  title: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  service_id: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  service?: {
    title: string;
  };
}

export default function ContentList() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const toast = useToast();
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('content')
        .select(`
          *,
          service:services(title)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: 'Error fetching content',
        status: 'error',
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    router.push('/admin/content/new');
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/content/edit/${id}`);
  };

  const handleView = (id: string) => {
    router.push(`/content/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Content deleted successfully',
        status: 'success',
        duration: 3000,
      });

      fetchContent();
    } catch (error) {
      console.error('Error deleting content:', error);
      toast({
        title: 'Error deleting content',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('content')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: `Status updated to ${newStatus}`,
        status: 'success',
        duration: 3000,
      });

      fetchContent();
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Error updating status',
        status: 'error',
        duration: 3000,
      });
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg">Content Management</Heading>
        <Button
          leftIcon={<FiPlus />}
          colorScheme="blue"
          onClick={handleCreateNew}
        >
          Create New
        </Button>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Service</Th>
              <Th>Status</Th>
              <Th>Created</Th>
              <Th>Updated</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {content.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td>{item.service?.title || 'N/A'}</Td>
                <Td>
                  <Badge colorScheme={statusColors[item.status]}>
                    {item.status}
                  </Badge>
                </Td>
                <Td>{new Date(item.created_at).toLocaleDateString()}</Td>
                <Td>{new Date(item.updated_at).toLocaleDateString()}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<FiMoreVertical />}
                      variant="ghost"
                      size="sm"
                    />
                    <MenuList>
                      <MenuItem onClick={() => handleView(item.id)}>
                        View
                      </MenuItem>
                      <MenuItem onClick={() => handleEdit(item.id)}>
                        Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleUpdateStatus(item.id, 'published')}
                        isDisabled={item.status === 'published'}
                      >
                        Publish
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleUpdateStatus(item.id, 'archived')}
                        isDisabled={item.status === 'archived'}
                      >
                        Archive
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleDelete(item.id)}
                        color="red.500"
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}
