import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PublishIcon from '@mui/icons-material/Publish'; // Ensure you import the icon from MUI

function DragAndDropUpload({ onFileAccepted }) {
  const onDrop = useCallback(acceptedFiles => {
    // Handle file processing or pass the file up to the parent component
    onFileAccepted(acceptedFiles[0]);
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border-2 rounded p-20 text-center cursor-pointer ${isDragActive ? 'border-amber-600' : 'border-gray-400'}`}
      style={{
        transition: 'border-color 0.2s ease-in-out',  // Smooth transition for border color change
      }}
    >
      <input {...getInputProps()} />
      <div>
        <PublishIcon style={{ fontSize: '48px' }} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag & drop to upload</p>}
      </div>
    </div>
  );
}

export default DragAndDropUpload;
