import { useState, useEffect } from 'react';
import { API_URL } from '../../../config'

const useImageLoader = (path) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (path) {
      fetch(`${API_URL}${path}`)
        .then(response => response.blob())
        .then(imageBlob => {
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImageSrc(imageObjectURL);
        })
        .catch(error => console.error('Error fetching the image:', error));
    }
  }, [path]);

  return imageSrc;
};

export default useImageLoader;
