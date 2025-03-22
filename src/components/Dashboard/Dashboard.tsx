import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import { supabase } from '@/lib/supabaseClient';
import {
  Phone,
  MessageSquare,
  FileText,
  User,
  Bell,
  Settings,
  LogOut,
  Camera,
  Trash,
  Archive,
  Download,
  ExternalLink,
  Inbox,
  FileCheck,
  Clock,
  AlertCircle,
  ChevronLeft,
  Calculator,
  PoundSterling,
  Wallet,
  CreditCard,
  Send,
  Clock4,
  Upload,
  X
} from 'lucide-react';
import fileUploadService from '@/services/fileUploadService';
import { toast } from 'react-hot-toast';
import { documentSubmissionService } from '@/services/documentSubmissionService';

// Simple AdminDocuments component
const AdminDocuments = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">User Documents</h2>
      <p className="text-gray-600">This section displays documents submitted by users.</p>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
        <p>No documents to display</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useUser();
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [wordCount, setWordCount] = useState<number>(0);
  const [studyLevel, setStudyLevel] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const [module, setModule] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; url: string; path: string }>>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [showEmailOption, setShowEmailOption] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showTurnitinModal, setShowTurnitinModal] = useState(false);
  const [turnitinFile, setTurnitinFile] = useState<File | null>(null);
  const [turnitinResult, setTurnitinResult] = useState<any>(null);
  const [isCheckingTurnitin, setIsCheckingTurnitin] = useState(false);
  const [processingMessage, setProcessingMessage] = useState('');
  const turnitinFileInputRef = useRef<HTMLInputElement>(null);

  const supportAreas = [
    { id: 'adult', title: 'Adult Health Nursing', icon: '👨‍⚕️' },
    { id: 'mental', title: 'Mental Health Nursing', icon: '🧠' },
    { id: 'child', title: 'Child Nursing', icon: '👶' },
    { id: 'disability', title: 'Disability Nursing', icon: '♿' },
    { id: 'social', title: 'Social Work', icon: '🤝' },
    { id: 'special', title: 'Special Education Needs', icon: '📚' }
  ];

  const services = [
    { id: 'dissertation', title: 'Dissertation', icon: '📑', desc: 'Expert dissertation writing support' },
    { id: 'essays', title: 'Essays', icon: '✍️', desc: 'Professional essay writing' },
    { id: 'reflection', title: 'Placement Reflections', icon: '📝', desc: 'Clinical reflection writing' },
    { id: 'reports', title: 'Reports', icon: '📊', desc: 'Detailed academic reports' },
    { id: 'portfolio', title: 'E-Portfolio', icon: '💼', desc: 'Portfolio development' }
  ];

  const mockOrders = [
    {
      id: '1',
      title: 'Adult Health Essay',
      status: 'in-progress',
      dueDate: '2024-03-15',
      wordCount: 2750,
      price: 150.00,
      service: 'essays',
      area: 'adult'
    },
    {
      id: '2',
      title: 'Mental Health Dissertation',
      status: 'completed',
      dueDate: '2024-02-28',
      wordCount: 12000,
      price: 785.45,
      service: 'dissertation',
      area: 'mental'
    }
  ];

  const calculatePrice = (words: number, service: string, level: string, date: string) => {
    if (words < 100 || words > 100000) {
      return null;
    }

    const daysUntilDue = Math.ceil(
      (new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );

    const useHigherRate = 
      service === 'dissertation' || 
      level === 'Level 7' || 
      daysUntilDue < 2;

    const baseRate = useHigherRate ? 18 : 15;
    return (words / 275) * baseRate;
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/sign-in');
    }
  }, [isLoaded, isSignedIn, navigate]);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;
      
      const { data: userRole } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', user.id)
        .single();

      setIsAdmin(userRole?.role === 'admin');
    };

    checkAdminStatus();
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (wordCount && studyLevel && dueDate && selectedService) {
      const price = calculatePrice(wordCount, selectedService.id, studyLevel, dueDate);
      setCalculatedPrice(price);
    }
  }, [wordCount, studyLevel, dueDate, selectedService]);

  const handleQuickCall = () => {
    window.open('https://join.skype.com/invite/IZLQkPuieqX2');
  };

  const handleQuickMessage = () => {
    window.open('https://wa.me/254711264993?text=Hi,%20I%20need%20help%20with%20my%20assignment');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (files.length === 0) {
      toast.error('Please upload at least one file before proceeding to payment');
      return;
    }
    
    // If files are already uploaded, proceed to payment
    if (uploadedFiles.length > 0) {
      setShowPaymentOptions(true);
      return;
    }
    
    // Otherwise, upload files first
    handleUploadSubmit();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;
    
    const fileList = Array.from(selectedFiles);
    
    // Simple file validation
    const maxSize = 50 * 1024 * 1024; // 50MB
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];
    
    fileList.forEach(file => {
      if (file.size > maxSize) {
        invalidFiles.push(`${file.name} (exceeds 50MB size limit)`);
      } else {
        validFiles.push(file);
      }
    });
    
    if (invalidFiles.length > 0) {
      toast.error(`Some files were rejected due to size limits: ${invalidFiles.join(', ')}`);
    }
    
    if (validFiles.length > 0) {
      setFiles(validFiles);
      toast.success(`${validFiles.length} file(s) selected successfully`);
    }
  };

  const handleUploadSubmit = async () => {
    if (files.length === 0) {
      toast.error('Please select files to upload');
      return;
    }
    
    setUploading(true);
    setUploadProgress(0);
    
    try {
      // Generate a simpler folder path based on timestamp to avoid permission issues
      const timestamp = new Date().getTime();
      const folderPath = `uploads/${timestamp}`;
      
      // Check if the 'assignments' bucket exists, if not we'll use the 'default' bucket or fallback to local storage
      let bucket = 'assignments';
      
      try {
        // Attempt to get bucket details to check if it exists
        const { error: bucketError } = await supabase.storage.getBucket(bucket);
        
        if (bucketError) {
          // If bucket doesn't exist, try the default bucket
          bucket = 'default';
          const { error: defaultBucketError } = await supabase.storage.getBucket(bucket);
          
          if (defaultBucketError) {
            // No valid bucket found, we'll just store file references locally
            console.warn('No valid storage bucket found, using local file references only');
            
            // Create local file references
            const localUploads = files.map(file => ({
              name: file.name,
              url: URL.createObjectURL(file), // Create temporary URL
              path: `local/${file.name}`,
              size: file.size
            }));
            
            setUploadedFiles(localUploads);
            toast.success('Files processed locally (storage unavailable)');
            
            // Still create a record without actual file uploads
            const orderData = {
              user_id: user?.id || 'anonymous',
              service_type: selectedService?.id,
              subject_area: selectedArea,
              word_count: wordCount,
              study_level: studyLevel,
              due_date: dueDate,
              module: module,
              instructions: instructions,
              price: calculatedPrice,
              status: 'draft',
              files: localUploads.map(file => ({
                name: file.name,
                size: formatBytes(file.size)
              })),
              created_at: new Date().toISOString()
            };
            
            try {
              const { error: orderError } = await supabase
                .from('orders')
                .insert(orderData);
              
              if (orderError) {
                console.warn('Could not save order to database:', orderError);
              }
            } catch (err) {
              console.warn('Error saving order:', err);
            }
            
            setShowPaymentOptions(true);
            return;
          }
        }
      } catch (bucketCheckError) {
        console.warn('Error checking bucket:', bucketCheckError);
        // Continue with attempt to upload, it might still work
      }
      
      // Upload the files one by one
      const uploadedFiles = [];
      let totalProgress = 0;
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `file_${timestamp}_${i}.${fileExt}`;
        const filePath = `${folderPath}/${fileName}`;
        
        try {
          // Update progress for this file
          setUploadProgress(Math.round((i / files.length) * 50)); // First 50% for starting uploads
          
          const { data, error } = await supabase.storage
            .from(bucket)
            .upload(filePath, file, {
              cacheControl: '3600',
              upsert: false
            });
          
          if (error) throw error;
          
          // Get the public URL
          const { data: urlData } = supabase.storage
            .from(bucket)
            .getPublicUrl(filePath);
          
          uploadedFiles.push({
            name: file.name,
            url: urlData.publicUrl,
            path: filePath,
            size: file.size
          });
          
          // Update progress
          totalProgress = Math.round(((i + 1) / files.length) * 100);
          setUploadProgress(totalProgress);
        } catch (fileError) {
          console.error(`Error uploading file ${file.name}:`, fileError);
          toast.error(`Failed to upload ${file.name}`);
          
          // Continue with other files
          continue;
        }
      }
      
      setUploadedFiles(uploadedFiles);
      
      if (uploadedFiles.length === 0) {
        throw new Error('No files were uploaded successfully');
      }
      
      // Save the order metadata to the database
      const orderData = {
        user_id: user?.id || 'anonymous',
        service_type: selectedService?.id,
        subject_area: selectedArea,
        word_count: wordCount,
        study_level: studyLevel,
        due_date: dueDate,
        module: module,
        instructions: instructions,
        price: calculatedPrice,
        status: 'draft',
        files: uploadedFiles,
        created_at: new Date().toISOString()
      };
      
      try {
        const { error: orderError } = await supabase
        .from('orders')
          .insert(orderData);
        
        if (orderError) {
          console.warn('Could not save order to database:', orderError);
          // Continue anyway as we have the files
        }
      } catch (dbError) {
        console.warn('Error saving to database:', dbError);
        // Continue anyway as we have the files
      }
      
      const successMsg = uploadedFiles.length === files.length
        ? 'All files uploaded successfully!'
        : `${uploadedFiles.length} of ${files.length} files uploaded.`;
      
      toast.success(`${successMsg} Proceed to payment.`);
      
      // Now we can show payment options
      setShowPaymentOptions(true);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  // Helper function to format bytes
  const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleEmailDocuments = async () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    try {
      // Check if files are available either from uploaded files or newly selected files
      if (uploadedFiles.length === 0 && files.length === 0) {
        toast.error('No files available to send');
        return;
      }
      
      setUploading(true);
      
      // Get the subject from the form
      const subjectField = document.getElementById('emailSubject') as HTMLInputElement;
      const subject = subjectField ? subjectField.value : 'Document Submission';
      
      // First handle any new files that need to be uploaded
      let allFiles = [...uploadedFiles];
      
      if (files.length > 0) {
        toast.loading('Uploading new files...');
        // Upload new files first
        const newUploadedFiles = await Promise.all(
          files.map(async (file) => {
            try {
              const result = await fileUploadService.uploadFile(file);
              if (result) {
                return { 
                  name: file.name, 
                  url: result.url, 
                  path: result.path,
                  size: file.size,
                  type: file.type
                };
              }
              throw new Error(`Failed to upload ${file.name}`);
            } catch (err) {
              console.error(`Upload error for ${file.name}:`, err);
              return null;
            }
          })
        );
        
        // Filter out failed uploads
        const successfulUploads = newUploadedFiles.filter(f => f !== null) as typeof uploadedFiles;
        allFiles = [...allFiles, ...successfulUploads];
        
        if (successfulUploads.length > 0) {
          setUploadedFiles(prev => [...prev, ...successfulUploads]);
        }
        
        toast.dismiss();
      }
      
      if (allFiles.length === 0) {
        throw new Error('No files available after upload attempts');
      }
      
      // Convert all files to File objects for submission
      const filesToSubmit = await Promise.all(allFiles.map(async (file) => {
        if (file instanceof File) return file;
        
        try {
          // Fetch file from URL and convert to File object
          const response = await fetch(file.url);
          const blob = await response.blob();
          return new File([blob], file.name, { type: blob.type || 'application/octet-stream' });
        } catch (error) {
          console.error(`Error fetching file ${file.name}:`, error);
          return null;
        }
      }));
      
      // Filter out any null values from failed fetches
      const validFiles = filesToSubmit.filter(file => file !== null) as File[];
      
      if (validFiles.length === 0) {
        throw new Error('Failed to prepare files for submission');
      }
      
      // Create comprehensive metadata for the document submission
      const metadata = {
        orderId: `email-${Date.now()}`,
        serviceType: selectedService?.id || 'email-submission',
        subjectArea: selectedArea || 'general',
        wordCount: wordCount || 0,
        studyLevel: studyLevel || 'not-specified',
        dueDate: dueDate || new Date().toISOString().split('T')[0],
        module: module || 'general',
        instructions: emailMessage || 'Email submission',
        emailSubject: subject,
        submissionType: 'email',
        clientEmail: userEmail || '',
        clientName: userName || ''
      };
      
      // Use documentSubmissionService directly
      const result = await documentSubmissionService.submitDocumentsToAdmin(
        user?.id || 'anonymous',
        validFiles,
        metadata,
        {
          notifyAdminEmail: true,
          adminEmail: emailAddress, // Send to the specified email
          notifyTelegram: true,
          notifyInApp: true
        }
      );
      
      if (result.success) {
        toast.success('Documents sent successfully!');
        setShowEmailOption(false);
        setFiles([]);
        setEmailMessage('');
      } else {
        throw new Error(result.message || 'Failed to send documents');
      }
    } catch (error: any) {
      console.error('Email error:', error);
      toast.error(error.message || 'Failed to send documents. Please try again.');
      
      // Create a record of the failed attempt for admin follow-up
      if (user) {
        try {
          await supabase.from('messages').insert({
            user_id: user.id,
            content: `Failed attempt to send documents to ${emailAddress}. Error: ${error.message || 'Unknown error'}`,
            sender_type: 'system',
            is_read: false
          });
          toast.info('Our team has been notified and will assist you.');
        } catch (err) {
          console.error('Failed to create message record:', err);
        }
      }
    } finally {
      setUploading(false);
    }
  };

  // Function to send documents to admin
  const handleSendToAdmin = async () => {
    if (!user) {
      toast.error('You must be signed in to send documents to admin');
      return;
    }

    if (uploadedFiles.length === 0) {
      toast.error('Please upload files before sending to admin');
      return;
    }

    try {
      setUploading(true);
      
      // Convert uploadedFiles to File objects if they're not already
      const filesToSend = await Promise.all(uploadedFiles.map(async (file) => {
        if (file instanceof File) return file;
        
        try {
          // Fetch file from URL and convert to File object
          const response = await fetch(file.url);
          const blob = await response.blob();
          return new File([blob], file.name, { type: blob.type });
        } catch (error) {
          console.error(`Error fetching file ${file.name}:`, error);
          // Return null for failed files
          return null;
        }
      }));
      
      // Filter out any null values from failed fetches
      const validFiles = filesToSend.filter(file => file !== null) as File[];
      
      if (validFiles.length === 0) {
        throw new Error('Failed to prepare files for submission');
      }
      
      // Prepare metadata for the document submission service
      const metadata = {
        orderId: 'manual-submission',
        serviceType: selectedService?.id,
        subjectArea: selectedArea || '',  // Fix: Provide empty string instead of null
        wordCount: wordCount,
        studyLevel: studyLevel,
        dueDate: dueDate,
        module: module,
        instructions: instructions,
        price: calculatedPrice
      };
      
      // Use the document submission service directly
      const result = await documentSubmissionService.submitDocumentsToAdmin(
        user.id,
        validFiles,
        metadata,
        {
          notifyAdminEmail: true, 
          notifyTelegram: true,
          notifyInApp: true
        }
      );
      
      if (result.success) {
        toast.success('Documents sent to admin successfully!');
        // Hide email option after successful submission
        setShowEmailOption(false);
      } else {
        throw new Error(result.message || 'Failed to send documents');
      }
    } catch (error: any) {
      console.error('Error sending to admin:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send documents to admin. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleCryptoPayment = async () => {
    try {
      if (!calculatedPrice) {
        alert('Please complete the order form first');
        return;
      }

      const response = await fetch('/api/create-charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: calculatedPrice,
          currency: 'USD',
          email: user?.primaryEmailAddress?.emailAddress
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create payment');
      }

      const { hosted_url, id } = await response.json();
      
      // Store the charge ID for later verification
      localStorage.setItem('currentChargeId', id);
      
      // Open Coinbase Commerce checkout in a new window
      const checkoutWindow = window.open(hosted_url, '_blank');
      
      // Listen for payment status changes
      const checkPaymentStatus = async () => {
        try {
          const statusResponse = await fetch(`/api/check-charge/${id}`);
          const { status } = await statusResponse.json();
          
          if (status === 'COMPLETED') {
            setShowPaymentOptions(false);
            alert('Payment successful!');
            checkoutWindow?.close();
            // Clear the stored charge ID
            localStorage.removeItem('currentChargeId');
          }
        } catch (error) {
          console.error('Error checking payment status:', error);
        }
      };

      // Check payment status every 5 seconds
      const statusInterval = setInterval(checkPaymentStatus, 5000);

      // Clear interval when window closes
      const handleWindowClose = () => {
        clearInterval(statusInterval);
        localStorage.removeItem('currentChargeId');
      };

      window.addEventListener('unload', handleWindowClose);
      return () => {
        window.removeEventListener('unload', handleWindowClose);
        clearInterval(statusInterval);
      };
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Failed to initialize payment. Please try again.');
    }
  };

  const handlePayPalPayment = () => {
    window.open('https://www.paypal.com/ncp/payment/QGYH6P5XKGFPE', '_blank');
    setShowPaymentOptions(false);
  };

  const handleRemittancePayment = () => {
    window.open('https://wa.me/254711264993?text=I want to pay with Taptapsend, World Remit, or Skrill', '_blank');
    setShowPaymentOptions(false);
  };

  const handlePayLater = () => {
    // Update order status to 'pending_payment'
    if (user) {
      // First notify the admin about the new order
      notifyAdminOfOrder();
    }
    setShowPaymentOptions(false);
    toast.success('Order saved. You can pay later through your dashboard.');
  };

  // Function to notify admin when an order is placed
  const notifyAdminOfOrder = async () => {
    if (!user) return;
    
    try {
      // Get order details for the notification
      const orderDetails = `
Service: ${selectedService?.title || 'Not specified'}
Subject: ${selectedArea || 'Not specified'}
Words: ${wordCount || 'Not specified'}
Level: ${studyLevel || 'Not specified'}
Module: ${module || 'Not specified'}
Due Date: ${dueDate || 'Not specified'}
Price: £${calculatedPrice?.toFixed(2) || 'Not calculated'}
Files: ${uploadedFiles.length} uploaded
`;

      const messageContent = `New order placed by user ${user.fullName || user.username || user.id}:\n\n${orderDetails}\n\nPayment status: Pending`;
      
      // Create message in messages table
      const { error: messageError } = await supabase
        .from('messages')
        .insert({
          user_id: user.id,
          content: messageContent,
          sender_type: 'user',
          is_read: false
        });
      
      if (messageError) {
        console.warn('Could not send order notification to admin:', messageError);
        
        // Attempt to send via email instead
        try {
          const adminEmail = 'admin@handywriterz.com';
          
          await supabase.functions.invoke('send-email', {
            body: {
              to: adminEmail,
              subject: `New order from ${user.fullName || user.username || user.id}`,
              message: messageContent
            }
          });
        } catch (emailError) {
          console.warn('Could not send order notification email:', emailError);
        }
      }
    } catch (error) {
      console.error('Error notifying admin of order:', error);
    }
  };

  const handleTurnitinFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, DOC, DOCX, or TXT file');
      return;
    }

    setTurnitinFile(file);
    setTurnitinResult(null);
  };

  const handleTurnitinCheck = async () => {
    if (!turnitinFile) {
      alert('Please select a file first');
      return;
    }

    setIsCheckingTurnitin(true);
    let checkoutWindow: Window | null = null;
    let statusInterval: NodeJS.Timeout;

    try {
      // First, create a payment intent
      const paymentResponse = await fetch('/api/create-turnitin-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 5, // £5 fixed price
          currency: 'GBP',
        }),
      });

      if (!paymentResponse.ok) {
        const error = await paymentResponse.json();
        throw new Error(error.message || 'Failed to create payment');
      }

      const { hosted_url, id: chargeId } = await paymentResponse.json();
      
      // Open Coinbase Commerce checkout
      checkoutWindow = window.open(hosted_url, '_blank');
      
      // Start payment timer
      const startTime = Date.now();
      const PAYMENT_TIMEOUT = 15 * 60 * 1000; // 15 minutes
      
      // Poll for payment status
      const checkPaymentStatus = async () => {
        try {
          // Check if payment window is closed
          if (checkoutWindow?.closed) {
            clearInterval(statusInterval);
            setIsCheckingTurnitin(false);
            return;
          }

          // Check if payment has timed out
          if (Date.now() - startTime > PAYMENT_TIMEOUT) {
            clearInterval(statusInterval);
            checkoutWindow?.close();
            setIsCheckingTurnitin(false);
            alert('Payment timeout. Please try again.');
            return;
          }

          const statusResponse = await fetch(`/api/check-charge/${chargeId}`);
          if (!statusResponse.ok) {
            const error = await statusResponse.json();
            throw new Error(error.message || 'Failed to check payment status');
          }

          const { status, charge } = await statusResponse.json();
          
          if (status === 'COMPLETED') {
            clearInterval(statusInterval);
            
            // Show processing message
            setProcessingMessage('Processing document...');
            
            // Payment successful, now send document for Turnitin check
            const formData = new FormData();
            formData.append('file', turnitinFile);
            formData.append('chargeId', chargeId);

            const response = await fetch('/api/check-turnitin', {
              method: 'POST',
              body: formData,
            });

            if (!response.ok) {
              const error = await response.json();
              throw new Error(error.message || 'Failed to check Turnitin');
            }

            const result = await response.json();
            setTurnitinResult(result);
            checkoutWindow?.close();
            setProcessingMessage('');
            
            // Show success message
            alert(`Document processed successfully!\nSimilarity score: ${result.similarity}%`);
          } else if (status === 'FAILED') {
            clearInterval(statusInterval);
            checkoutWindow?.close();
            throw new Error('Payment failed. Please try again.');
          }
        } catch (error) {
          clearInterval(statusInterval);
          checkoutWindow?.close();
          console.error('Error checking payment status:', error);
          alert(error instanceof Error ? error.message : 'Failed to process payment');
          setIsCheckingTurnitin(false);
          setProcessingMessage('');
        }
      };

      // Check payment status every 5 seconds
      statusInterval = setInterval(checkPaymentStatus, 5000);

      // Clean up on unmount
      return () => {
        clearInterval(statusInterval);
        checkoutWindow?.close();
      };
    } catch (error) {
      console.error('Turnitin check error:', error);
      alert(error instanceof Error ? error.message : 'Failed to process Turnitin check');
      checkoutWindow?.close();
    } finally {
      setIsCheckingTurnitin(false);
      setProcessingMessage('');
    }
  };

  const handleLogout = async () => {
    if (!user || isLoggingOut) return;

    try {
      setIsLoggingOut(true);
      // logout();
      // Dynamic SDK will handle the redirect through onLogout callback
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to logout. Please try again.');
      setIsLoggingOut(false);
    }
  };

  const userEmail = user?.primaryEmailAddress?.emailAddress || 'No email available';
  const userName = user?.fullName || user?.username || 'User';

  // Add these new state variables for real data
  const [activeOrders, setActiveOrders] = useState<any[]>([]);
  const [completedOrders, setCompletedOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+44');
  const [savingProfile, setSavingProfile] = useState(false);

  // Add useEffect to fetch orders from Supabase
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      
      setLoadingOrders(true);
      try {
        const { data: orderData, error } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        if (orderData) {
          const active = orderData.filter((order: any) => order.status !== 'completed');
          const completed = orderData.filter((order: any) => order.status === 'completed');
          
          setActiveOrders(active);
          setCompletedOrders(completed);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to load your orders');
      } finally {
        setLoadingOrders(false);
      }
    };
    
    if (activeTab === 'orders' || activeTab === 'completed') {
      fetchOrders();
    }
  }, [user, activeTab]);

  // Add useEffect to fetch messages from Supabase
  useEffect(() => {
    const fetchMessages = async () => {
      if (!user || activeTab !== 'messages') return;
      
      setLoadingMessages(true);
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        setMessages(data || []);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error('Failed to load your messages');
      } finally {
        setLoadingMessages(false);
      }
    };
    
    if (activeTab === 'messages') {
      fetchMessages();
      
      // Subscribe to real-time message updates
      const subscription = supabase
        .channel('messages-channel')
        .on('postgres_changes', { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'messages',
          filter: `user_id=eq.${user?.id}` 
        }, (payload: any) => {
          // Add new message to state
          setMessages(prev => [payload.new, ...prev]);
        })
        .subscribe();
      
      return () => {
        supabase.removeChannel(subscription);
      };
    }
  }, [user, activeTab]);

  // Add function to send messages
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !user) return;
    
    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          user_id: user.id,
          content: newMessage.trim(),
          sender_type: 'user'
        });
      
      if (error) throw error;
      
      setNewMessage('');
      toast.success('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  // Add function to save profile information
  const handleSaveProfile = async () => {
    if (!user) return;
    
    setSavingProfile(true);
    try {
      // Here we would typically update the user's profile in Clerk
      // For demo purposes, we'll just show a success message
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setSavingProfile(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                H
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                HandyWriterz
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="font-medium hidden sm:inline">
                  {userName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  isLoggingOut 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'text-red-600 hover:bg-red-50'
                }`}
              >
                <LogOut className="h-4 w-4" />
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 bg-white w-64 border-r z-30">
        <div className="h-16 border-b flex items-center justify-center">
          <span className="font-medium">Dashboard</span>
        </div>
        
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 p-2 rounded-lg ${
              activeTab === 'orders' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-5 w-5" />
            <span>Active Orders</span>
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`w-full flex items-center gap-3 p-2 rounded-lg ${
              activeTab === 'completed' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileCheck className="h-5 w-5" />
            <span>Completed Orders</span>
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center gap-3 p-2 rounded-lg ${
              activeTab === 'messages' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Messages</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 p-2 rounded-lg ${
              activeTab === 'settings' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`w-full flex items-center gap-3 p-2 rounded-lg mt-4 ${
              isLoggingOut 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <LogOut className="h-5 w-5" />
            <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="pt-16 lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">
              Welcome back{user ? `, ${userName}` : ''}! 👋
            </h1>
            <p className="text-gray-600">
              Get expert help with your academic work. Choose a subject area to get started.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button
              onClick={handleQuickCall}
              className="p-6 bg-green-600 text-white rounded-xl hover:opacity-90 transition-all"
            >
              <Phone className="h-6 w-6 mb-2" />
              <h3 className="font-semibold mb-1">Quick Call</h3>
              <p className="text-sm opacity-90">Get instant help via Skype</p>
            </button>

            <button
              onClick={handleQuickMessage}
              className="p-6 bg-[#25D366] text-white rounded-xl hover:opacity-90 transition-all"
            >
              <MessageSquare className="h-6 w-6 mb-2" />
              <h3 className="font-semibold mb-1">Quick Message</h3>
              <p className="text-sm opacity-90">Chat with us on WhatsApp</p>
            </button>
          </div>

          {/* Active Orders Tab */}
          {activeTab === 'orders' && !selectedArea && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Active Orders</h2>
                <button 
                  onClick={() => setSelectedArea('adult')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  New Order
                </button>
              </div>
              
              {loadingOrders ? (
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-blue-500 rounded-full mx-auto"></div>
                  <p className="mt-2 text-gray-500">Loading orders...</p>
                </div>
              ) : activeOrders.length > 0 ? (
                activeOrders.map(order => (
                  <div key={order.id} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{`${order.service_type || 'Assignment'} - ${order.subject_area || 'General'}`}</h3>
                        <p className="text-gray-600">
                          {order.word_count?.toLocaleString()} words • Due {new Date(order.due_date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'completed' ? 'bg-green-100 text-green-600' : 
                        order.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        £{typeof order.price === 'number' ? order.price.toFixed(2) : '0.00'}
                      </span>
                      <button 
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        onClick={() => {
                          // In a real app, this would navigate to order details
                          toast.success(`Viewing details for order ${order.id}`);
                        }}
                      >
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">No active orders</h3>
                  <p className="text-gray-500 mb-4">You don't have any active orders yet.</p>
                  <button 
                    onClick={() => setSelectedArea('adult')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Create Your First Order
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Support Areas Selection */}
          {activeTab === 'orders' && !selectedService && selectedArea && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <button 
                  onClick={() => setSelectedArea(null)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Back
                </button>
                <h2 className="text-xl font-bold">Select Service Type</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="p-6 rounded-xl border hover:border-blue-600 hover:shadow-md transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Order Form */}
          {activeTab === 'orders' && selectedService && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Back
                </button>
                <h2 className="text-xl font-bold">Order Details</h2>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Word Count</label>
                  <input
                    type="number"
                    value={wordCount}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setWordCount(value);
                      if (value < 100 || value > 100000) {
                        e.target.setCustomValidity('Word count must be between 100 and 100,000');
                      } else {
                        e.target.setCustomValidity('');
                      }
                    }}
                    className="w-full p-3 border rounded-lg pr-24"
                    placeholder="Enter word count"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                    className="absolute right-2 top-2 p-1 text-blue-600 hover:text-blue-700"
                    title="Show price calculation"
                  >
                    <Calculator className="h-5 w-5" />
                  </button>
                </div>
                {calculatedPrice !== null && (
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Estimated Price: </span>
                    <span className="text-blue-600">£{calculatedPrice.toFixed(2)}</span>
                  </div>
                )}
                {showPriceBreakdown && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm">
                    <h4 className="font-medium mb-2">Price Calculation</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• £18/275 words for dissertations</li>
                      <li>• £18/275 words for Level 7 work</li>
                      <li>• £18/275 words for urgent orders (&lt; 2 days)</li>
                      <li>• £15/275 words for all other cases</li>
                    </ul>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">Module</label>
                  <input
                    type="text"
                    value={module}
                    onChange={(e) => setModule(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter module name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Study Level</label>
                  <select
                    value={studyLevel}
                    onChange={(e) => setStudyLevel(e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg"
                    title="Choose your study level"
                  >
                    <option value="">Select level</option>
                    <option value="Level 4">Level 4 (Year 1)</option>
                    <option value="Level 5">Level 5 (Year 2)</option>
                    <option value="Level 6">Level 6 (Year 3)</option>
                    <option value="Level 7">Level 7 (Masters)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Due Date</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full p-3 border rounded-lg"
                    title="Select your assignment due date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Instructions</label>
                  <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    rows={4}
                    className="w-full p-3 border rounded-lg resize-none"
                    placeholder="Enter your specific requirements..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Files</label>
                  <div className="mt-1 flex items-center gap-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      className="hidden"
                      multiple
                      title="Upload assignment files"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"
                      disabled={uploading}
                      title="Click to select files"
                    >
                      <Upload className="h-5 w-5" />
                      {uploading ? 'Uploading...' : 'Select Files'}
                    </button>
                    
                    {files.length > 0 && !uploading && uploadedFiles.length === 0 && (
                      <button
                        type="button"
                        onClick={handleUploadSubmit}
                        className="flex items-center gap-2 rounded-md bg-green-50 text-green-600 border border-green-200 px-4 py-2 hover:bg-green-100"
                      >
                        <Upload className="h-5 w-5" />
                        Upload {files.length} file(s)
                      </button>
                    )}
                  </div>
                  
                  {uploading && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Uploading: {uploadProgress}%</p>
                    </div>
                  )}
                  
                  {files.length > 0 && !uploading && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium">Selected Files:</p>
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <span className="text-sm truncate">{file.name} ({formatBytes(file.size)})</span>
                          {uploadedFiles.length === 0 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="text-red-500 hover:text-red-600"
                              title="Remove file"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-600 flex items-center gap-2">
                        <FileCheck className="h-5 w-5" />
                        <span>Files uploaded successfully! You can now proceed to payment.</span>
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setShowEmailOption(!showEmailOption)}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {showEmailOption ? 'Hide email option' : 'Send files via email'}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleSendToAdmin}
                      className="text-green-600 hover:text-green-700 text-sm flex items-center mt-2"
                      disabled={!uploadedFiles.length}
                    >
                      <User className="h-4 w-4 mr-1" />
                      Send to admin
                    </button>
                  </div>
                  
                  {showEmailOption && (
                    <div className="mt-4 p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Send Files via Email</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium mb-1">Email Address</label>
                          <input
                            type="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            placeholder="recipient@example.com"
                            title="Recipient email address"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Message (Optional)</label>
                          <textarea
                            value={emailMessage}
                            onChange={(e) => setEmailMessage(e.target.value)}
                            className="w-full p-2 border rounded-md resize-none"
                            rows={3}
                            placeholder="Add a message to include with the files"
                            title="Optional message"
                          ></textarea>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={handleEmailDocuments}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            disabled={!uploadedFiles.length || !emailAddress}
                          >
                            Send Files
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
                      uploadedFiles.length > 0 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : files.length > 0 
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-400 text-white cursor-not-allowed'
                    }`}
                    disabled={files.length === 0}
                  >
                    {uploadedFiles.length > 0 ? (
                      <>
                        <PoundSterling className="h-4 w-4" />
                        Proceed to Payment
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        {files.length > 0 ? 'Upload Files & Continue' : 'Please Select Files'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Payment Options Modal */}
          {showPaymentOptions && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl max-w-md w-full p-6">
                <h2 className="text-xl font-bold mb-6">Choose Payment Method</h2>
                
                <div className="space-y-4">
                  <button
                    onClick={handleCryptoPayment}
                    className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Wallet className="h-5 w-5 text-blue-600" />
                    <div className="flex-1 text-left">
                      <span className="font-medium">Pay with Crypto</span>
                      <p className="text-sm text-gray-600">Bitcoin, Ethereum, USDC accepted</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={handlePayPalPayment}
                    className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
                  >
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div className="flex-1 text-left">
                      <span className="font-medium">Pay with PayPal</span>
                      <p className="text-sm text-gray-600">Credit/Debit Cards accepted</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={handleRemittancePayment}
                    className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Send className="h-5 w-5 text-blue-600" />
                    <div className="flex-1 text-left">
                      <span className="font-medium">Pay with Money Transfer</span>
                      <p className="text-sm text-gray-600">Taptapsend, World Remit, Skrill</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={handlePayLater}
                    className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Clock4 className="h-5 w-5 text-blue-600" />
                    <div className="flex-1 text-left">
                      <span className="font-medium">Pay Later</span>
                      <p className="text-sm text-gray-600">Save order and pay when ready</p>
                    </div>
                  </button>
                </div>
                
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className="mt-4 w-full p-3 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Completed Orders Tab */}
          {activeTab === 'completed' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6">Completed Orders</h2>
              
              {loadingOrders ? (
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-blue-500 rounded-full mx-auto"></div>
                  <p className="mt-2 text-gray-500">Loading completed orders...</p>
                </div>
              ) : completedOrders.length > 0 ? (
                completedOrders.map(order => (
                  <div key={order.id} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{`${order.service_type || 'Assignment'} - ${order.subject_area || 'General'}`}</h3>
                        <p className="text-gray-600">
                          {order.word_count?.toLocaleString()} words • Completed {new Date(order.due_date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                        Completed
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        £{typeof order.price === 'number' ? order.price.toFixed(2) : '0.00'}
                      </span>
                      <div className="flex gap-2">
                        <button 
                          className="px-4 py-2 text-blue-600 hover:text-blue-700 flex items-center gap-1"
                          onClick={() => {
                            // In a real app, this would download the files
                            if (order.files && order.files.length > 0) {
                              const firstFile = order.files[0];
                              if (firstFile.url) {
                                window.open(firstFile.url, '_blank');
                              } else {
                                toast.error('Download link not available');
                              }
                            } else {
                              toast.error('No files available for download');
                            }
                          }}
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button 
                          className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                          onClick={() => {
                            // In a real app, this would navigate to order details
                            toast.success(`Viewing details for order ${order.id}`);
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <FileCheck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">No completed orders</h3>
                  <p className="text-gray-500">You don't have any completed orders yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-xl font-bold">Messages</h2>
              </div>
              
              {loadingMessages ? (
                <div className="p-6 text-center">
                  <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-blue-500 rounded-full mx-auto"></div>
                  <p className="mt-2 text-gray-500">Loading messages...</p>
                </div>
              ) : messages.length > 0 ? (
                <div className="p-6">
                  <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                    {messages.map((message) => (
                      <div 
                        key={message.id}
                        className={`p-3 rounded-lg ${
                          message.sender_type === 'user' 
                            ? 'bg-blue-100 ml-12' 
                            : 'bg-gray-100 mr-12'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(message.created_at).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 p-3 border rounded-lg"
                      placeholder="Type your message here..."
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Send
                    </button>
                  </form>
                </div>
              ) : (
              <div className="p-6 text-center text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="mb-4">No messages yet</p>
                  
                  <form onSubmit={handleSendMessage} className="flex gap-2 max-w-md mx-auto">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 p-3 border rounded-lg"
                      placeholder="Send us a message..."
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Send
                    </button>
                  </form>
                  
                  <div className="mt-8 border-t pt-4">
                    <p className="text-sm text-gray-600 mb-3">Need to send documents or have urgent matters?</p>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => window.open('mailto:admin@handywriterz.com', '_blank')}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Email Admin</span>
                      </button>
                      <button
                        onClick={handleQuickMessage}
                        className="flex items-center gap-1 text-green-600 hover:text-green-700"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>WhatsApp Support</span>
                      </button>
                    </div>
                    
                    {/* Email Admin Button with Modal */}
                    <div className="mt-6">
                      <button
                        onClick={() => setShowEmailOption(true)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mx-auto flex items-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>Send Detailed Email</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Email Admin Modal */}
          {showEmailOption && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Contact Admin</h2>
                  <button
                    onClick={() => setShowEmailOption(false)}
                    className="text-gray-500 hover:text-gray-700"
                    title="Close modal"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEmailDocuments();
                  }}
                  aria-label="Contact admin form"
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="userName" className="block text-sm font-medium mb-1">Your Name</label>
                      <input
                        type="text"
                        id="userName"
                        className="w-full p-2 border rounded-md"
                        value={userName}
                        readOnly
                        aria-label="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="emailAddress" className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        id="emailAddress"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="admin@handywriterz.com"
                        defaultValue="admin@handywriterz.com"
                        required
                        aria-label="Admin email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="emailSubject" className="block text-sm font-medium mb-1">Subject</label>
                      <input
                        type="text"
                        id="emailSubject"
                        name="emailSubject"
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter subject"
                        required
                        aria-label="Email subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="emailMessage" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="emailMessage"
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                        className="w-full p-2 border rounded-md resize-none"
                        rows={5}
                        placeholder="Your message to the admin..."
                        required
                        aria-label="Email message content"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="fileUpload" className="block text-sm font-medium mb-1">Attach Files</label>
                      <input
                        type="file"
                        id="fileUpload"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        className="hidden"
                        multiple
                        title="Select files to attach"
                        aria-label="Select files to attach"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 w-full"
                        aria-label="Select files"
                      >
                        <Upload className="h-5 w-5" />
                        Select Files
                      </button>
                      
                      {(files.length > 0 || uploadedFiles.length > 0) && (
                        <div className="mt-2 text-sm">
                          <p className="text-gray-600">
                            {files.length > 0 && `${files.length} new file(s) selected`}
                            {files.length > 0 && uploadedFiles.length > 0 && ' • '}
                            {uploadedFiles.length > 0 && `${uploadedFiles.length} file(s) already uploaded`}
                          </p>
                          
                          {/* Show uploaded files with option to remove */}
                          {uploadedFiles.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {uploadedFiles.map((file, index) => (
                                <div key={index} className="flex items-center justify-between text-xs bg-gray-50 p-2 rounded">
                                  <span className="truncate max-w-[200px]">{file.name}</span>
                                  <button 
                                    type="button"
                                    onClick={() => {
                                      setUploadedFiles(prev => prev.filter((_, i) => i !== index));
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                    aria-label={`Remove ${file.name}`}
                                  >
                                    <X size={14} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-6">
                      <button
                        type="button"
                        onClick={() => setShowEmailOption(false)}
                        className="px-4 py-2 border rounded-md hover:bg-gray-50"
                        aria-label="Cancel"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                        disabled={uploading}
                        aria-label="Send email"
                      >
                        {uploading ? 'Sending...' : 'Send Documents'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      {user?.imageUrl ? (
                        <img src={user.imageUrl} alt={`${userName}'s profile`} className="h-full w-full object-cover" />
                      ) : (
                      <User className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                    <button 
                      className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white"
                      title="Upload profile picture"
                      onClick={() => {
                        // This would open Clerk's profile image editor in a real implementation
                        toast.success('Profile picture uploads would be handled by Clerk in production');
                      }}
                    >
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <div>
                    <h3 className="font-medium">Profile Picture</h3>
                    <p className="text-sm text-gray-500">Upload a new photo or choose an avatar</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg bg-gray-50"
                    placeholder="your@email.com"
                    value={userEmail}
                    readOnly
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">To change your email, please use your account settings</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Your full name"
                    value={userName}
                    onChange={(e) => {
                      // In a real implementation, this would update a state variable
                      toast.success('Name changes would be handled by Clerk in production');
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                  <div className="flex gap-2">
                    <select 
                      className="w-24 p-3 border rounded-lg" 
                      title="Select country code"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      className="flex-1 p-3 border rounded-lg"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t">
                  <button 
                    onClick={() => {
                      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                        // In a real implementation, this would delete the account
                        toast.error('Account deletion is disabled in demo mode');
                      }
                    }}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700"
                  >
                    <Trash className="h-4 w-4" />
                    <span>Delete Account</span>
                  </button>
                  <button 
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
                    onClick={() => toast.success('Account archiving would be implemented in production')}
                  >
                    <Archive className="h-4 w-4" />
                    <span>Archive Profile</span>
                  </button>
                </div>

                <div className="flex justify-end gap-3">
                  <button 
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => {
                      // Reset form
                      setPhoneNumber('');
                      setCountryCode('+44');
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                    onClick={handleSaveProfile}
                    disabled={savingProfile}
                  >
                    {savingProfile ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <span>Save Changes</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Admin Documents Tab */}
          {isAdmin && activeTab === 'admin' && <AdminDocuments />}

          {/* Add Admin Tab for Admins */}
          {isAdmin && (
            <button 
              onClick={() => setActiveTab('admin')}
              className={`w-full flex items-center gap-3 p-2 rounded-lg ${
                activeTab === 'admin' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              title="View user documents"
            >
              <FileText className="h-5 w-5" />
              <span>User Documents</span>
            </button>
          )}

          {/* Modals */}
          {showTurnitinModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Check Turnitin</h2>
                  <button
                    onClick={() => {
                      setTurnitinFile(null);
                      setTurnitinResult(null);
                      setShowTurnitinModal(false);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                    title="Close Turnitin check"
                  >
                    <X size={20} />
                  </button>
                </div>

                {!turnitinResult ? (
                  <>
                    <p className="text-gray-600 mb-4">
                      Upload your document to check for plagiarism.
                      <br />
                      Supported formats: PDF, DOC, DOCX, TXT
                    </p>
                    
                    <div className="space-y-4">
                      <input
                        type="file"
                        ref={turnitinFileInputRef}
                        onChange={handleTurnitinFileSelect}
                        accept=".pdf,.doc,.docx,.txt"
                        className="hidden"
                        id="turnitinFileInput"
                        title="Upload document for Turnitin check"
                      />
                      
                      <div 
                        onClick={() => turnitinFileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                        role="button"
                        tabIndex={0}
                        title="Select file for Turnitin check"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            turnitinFileInputRef.current?.click();
                          }
                        }}
                      >
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          Click to select a file
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Maximum file size: 10MB
                        </p>
                      </div>

                      {turnitinFile && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {turnitinFile.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Size: {(turnitinFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <button
                              onClick={() => setTurnitinFile(null)}
                              className="text-gray-400 hover:text-gray-500"
                              title="Remove file"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      )}

                      {processingMessage && (
                        <div className="mt-4 text-center p-4 bg-blue-50 rounded-lg">
                          <div className="inline-flex items-center">
                            <div className="animate-spin h-5 w-5 mr-2 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
                            <p className="text-sm text-blue-600">{processingMessage}</p>
                          </div>
                        </div>
                      )}

                      <div className="mt-6 flex justify-end space-x-2">
                        <button
                          onClick={() => {
                            setTurnitinFile(null);
                            setShowTurnitinModal(false);
                          }}
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleTurnitinCheck}
                          disabled={!turnitinFile || isCheckingTurnitin}
                          className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                            !turnitinFile || isCheckingTurnitin
                              ? 'bg-blue-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                        >
                          {isCheckingTurnitin ? (
                            <div className="inline-flex items-center">
                              <div className="animate-spin h-4 w-4 mr-2 border-t-2 border-b-2 border-white rounded-full"></div>
                              Processing...
                            </div>
                          ) : (
                            'Check Turnitin (£5)'
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <p className={`text-${turnitinResult.similarity > 20 ? 'red' : 'green'}-600 font-medium`}>
                      Similarity Score: {turnitinResult.similarity}%
                    </p>
                    {turnitinResult.matches.map((match: any, index: number) => (
                      <div key={index} className="mt-2">
                        <p className="text-sm font-medium">
                          Source: {match.source}
                        </p>
                        <p className="text-sm text-gray-500">
                          Match: {match.percentage}%
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

