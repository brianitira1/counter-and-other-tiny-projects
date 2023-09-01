import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  // Define state variables using the useState hook
  const [selectedImages, setSelectedImages] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);

  // Event handler to handle changes when users select images
  const handleImageChange = (e) => {
    // Convert the selected files into an array
    const selectedImagesArray = Array.from(e.target.files);
    // Update the state with the selected images array
    setSelectedImages(selectedImagesArray);
  };

  // Event handler to upload the selected images to ImgBB
  const handleUpload = () => {
    const apiKey = 'e5f3b3c259422e4c7f47431645b1ac44'; // Replace with your ImgBB API key
    const formData = new FormData();

    // Append each selected image to the FormData object
    selectedImages.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    // Append the ImgBB API key to the FormData
    formData.append('key', apiKey);

    // Make a POST request to the ImgBB API using Axios
    axios
      .post('https://api.imgbb.com/1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Update the state with the API response data
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* Input element for selecting multiple images */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
      />
      {/* Button to trigger image upload */}
      <button onClick={handleUpload}>Upload Images</button>
      {/* Display API response if available */}
      {apiResponse && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
