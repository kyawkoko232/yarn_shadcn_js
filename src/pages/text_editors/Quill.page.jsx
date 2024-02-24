import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = () => {
  const [editorValue, setEditorValue] = useState('');

  const handleChange = (value) => {
    setEditorValue(value);
  };

  const handleImageUpload = (file) => {
    // Here you can handle the image upload logic
    console.log('Uploading image:', file);
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  return (
    <div className='h-screen pt-20'>
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        theme="snow"
      />
    </div>
  );
};

export default QuillEditor;
