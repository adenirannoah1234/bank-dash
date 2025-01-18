
import { format, parseISO } from 'date-fns';

export const useFormatDate = () => {
  const formatDateForInput = (dateString: string) => {
    try {
      // Handle empty or invalid dates
      if (!dateString) return '';
      
      // Parse the date string and format it as YYYY-MM-DD
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) return '';
      
      return format(date, 'yyyy-MM-dd');
    } catch {
      return '';
    }
  };

  const formatDateForDisplay = (dateString: string, formatString: string = 'MMM dd, yyyy') => {
    try {
      if (!dateString) return '';
      
      const date = new Date(dateString);
      
      if (isNaN(date.getTime())) return '';
      
      return format(date, formatString);
    } catch {
      return '';
    }
  };

  return {
    formatDateForInput,
    formatDateForDisplay
  };
};

export const useFormatImage = () => {
    const formatProfileImage = (imageString: string | null | undefined) => {
      if (!imageString) return null;
  
      try {
        // If it's already a URL, return as is
        if (imageString.startsWith('http://') || imageString.startsWith('https://')) {
          return imageString;
        }
  
        // Clean up the base64 string
        let cleanBase64 = imageString
          .replace('dataimage/jpegbase64', '')
          .replace(/^data:image\/[a-z]+;base64,/, '');
  
        // Convert base64 to Blob
        const byteCharacters = atob(cleanBase64);
        const byteNumbers = new Array(byteCharacters.length);
        
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' });
        
        // Create a URL from the Blob
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      } catch (error) {
        console.error('Error formatting image:', error);
        return null;
      }
    };
  
    // Add cleanup function to prevent memory leaks
    const cleanupImageUrl = (url: string) => {
      if (url && url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    };
  
    return {
      formatProfileImage,
      cleanupImageUrl
    };
  };