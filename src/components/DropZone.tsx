// import { useDropzone } from 'react-dropzone';
import React from 'react';

import Dropzone, { IDropzoneProps, ILayoutProps, defaultClassNames } from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles },
}: ILayoutProps) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

      {files.length > 0 && submitButton}
    </div>
  );
};
const postUrl: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;

export const DropZone = () => {
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({
    url: postUrl,
  });

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent="Drop Files"
    />
  );
};

// import React from 'react';
// import './App.css';
// import { useDropzone } from 'react-dropzone';

// type file = {
//   path: string;
// };

// export const DropZone = () => {
//   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
//   const files = acceptedFiles.map((file) => <li>{file.path}</li>);
//   return (
//     <div className="container">
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <ul>{files}</ul>
//     </div>
//   );
// };
