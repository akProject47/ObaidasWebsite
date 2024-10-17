import { useState, useEffect } from 'react';

const useImageLoader = (path) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (path) {
      fetch(`http://localhost:5000${path}`)
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
