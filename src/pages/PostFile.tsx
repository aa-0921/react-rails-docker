// require('dotenv').config();

// import * as React from 'react';
// import { useState } from 'react';

// import { Grid, Row, Note, Button } from '@zeit-ui/react';

// // import { FileUploadState } from './module';
// // import { ActionDispatcher } from './Container';

// interface Props {
//   // value: FileUploadState;
//   // actions: ActionDispatcher;
// }

// export const FileUploadSample = (props: Props) => {
//   // const handleChangeFile = (e: any) => {
//   //   const target: HTMLInputElement = e.target as HTMLInputElement;
//   //   if (target.files == null) {
//   //     props.actions.updateFile(null);
//   //   } else {
//   //     const _file = target.files.item(0);
//   //     props.actions.updateFile(_file);
//   //   }
//   // };

//   // if (process.env.NODE_ENV !== 'production') {
//   //   console.log('facebookUrl:', facebookUrl);
//   // }
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDescription(e.target.value);
//   };

//   const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     const submitData = new FormData();

//     submitData.append('formData', JSON.stringify(description));
//     submitData.append('image', fileInput.current.files[0]);

//     const method = 'POST';
//     const body = submitData;
//     const headers = {
//       'Content-Type': 'application/json',
//     };
//     const loginUrl: string = process.env.REACT_APP_API_URL + '/sign_in';

//     // if (process.env.NODE_ENV !== 'production') {
//     //   console.log('loginUrl:', loginUrl);
//     // }

//     await fetch(loginUrl, { method, headers, body })
//       .then((response) => {
//         if (response.status == 200) {
//           if (process.env.NODE_ENV !== 'production') {
//             console.log('投稿成功');
//           }
//         } else {
//           if (process.env.NODE_ENV !== 'production') {
//             console.log('投稿失敗');
//           }
//           throw new Error();
//         }
//       })
//       .catch((error) => {
//         if (process.env.NODE_ENV !== 'production') {
//           console.log('投稿失敗');
//         }
//       });
//   };
//   const [description, setDescription] = useState('');
//   const fileInput: RefObject<HTMLInputElement> = React.createRef();

//   // const file = props.value.file;
//   // const button = file ? <button onClick={() => props.actions.upload(file)}>upload</button> : null;
//   return (
//     <Grid.Container gap={-10} justify="center">
//       <Row className="justify-content-md-center">
//         <form>
//           <input type="text" name="description" value={description} onChange={handleChange} />
//           <input type="file" name="image" ref={fileInput} accept="image/*" />
//           <Button type="success" ghost onClick={handleSubmit}>
//             Signup
//           </Button>
//         </form>
//       </Row>
//     </Grid.Container>
//   );
// };
