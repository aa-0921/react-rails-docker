// import { useDropzone } from 'react-dropzone';
import React from 'react';

import Dropzone, { IDropzoneProps, ILayoutProps, defaultClassNames } from 'react-dropzone-uploader';
// import * as Dropzone from 'react-dropzone';
import 'react-dropzone-uploader/dist/styles.css';

// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
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

export const DropZone = () => {
  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({
    url: 'https://httpbin.org/post',
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
