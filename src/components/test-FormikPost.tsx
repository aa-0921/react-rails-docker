// import * as React from 'react';
// import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';
// import { useFormikContext, useField } from 'formik';
// import axios from 'axios';

// export const FormikPost = () => {
//   const createPicpost = async (body: any) => {
//     if (process.env.NODE_ENV !== 'production') {
//       console.log('body:', body);
//     }
//     const method = 'POST';
//     const headers = { 'content-type': 'multipart/form-data' };
//     const postUrl: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;
//     if (process.env.NODE_ENV !== 'production') {
//       console.log('postUrl:', postUrl);
//     }
//     await axios.post(postUrl, body, { headers });
//   };
//   const setImage = (e: any, setFieldValue: any) => {
//     let canvas: any = document.getElementById('canvas');
//     let ctx = canvas!.getContext('2d');
//     let maxW = 250;
//     let maxH = 250;

//     let img = new Image();
//     img.onload = () => {
//       let iw = img.width;
//       let ih = img.height;
//       let scale = Math.min(maxW / iw, maxH / ih);
//       let iwScaled = iw * scale;
//       let ihScaled = ih * scale;
//       canvas.width = iwScaled;
//       canvas.height = ihScaled;
//       ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
//       const resizeData = canvas.toDataURL('image/jpeg', 0.5);
//     };
//     img.src = URL.createObjectURL(e.target.files[0]);
//   };
//   return (
//     <Formik
//       initialValues={{ picture: '', content: '', user_id: 0 }}
//       onSubmit={(values) => {
//         values.user_id = 1;

//         const submitData = new FormData();
//         submitData.append('picture', values.picture);
//         submitData.append('content', values.content);
//         submitData.append('user_id', '1');
//         const body = submitData;

//         createPicpost(body);
//       }}
//       render={({ values, handleSubmit, handleChange, setFieldValue }) => {
//         return (
//           <Form onSubmit={handleSubmit}>
//             <div>
//               <label>投稿画像</label>
//               <Field
//                 type="file"
//                 // name="picture"
//                 id="file"
//                 name="file"
//                 onChange={(e: any) => {
//                   var file = e.target.files[0];
//                   var reader = new FileReader();
//                   reader.onload = function (item) {
//                     setFieldValue('picture', item.target !== null ? item.target.result : null);
//                   };

//                   reader.readAsDataURL(file);
//                 }}
//                 // onChange={(event: any) => {
//                 //   handleChange;
//                 //   setFieldValue('file', event.currentTarget.files[0]);
//                 // }}
//                 // onChange={handleChange}
//                 // id="select_posts_image"
//               />
//             </div>
//             <canvas
//               id="canvas"
//               style={{
//                 display: 'none',
//               }}
//               width="64"
//               height="64"
//             />
//             <div>
//               <label>comment</label>
//               <Field type="text" name="content" value={values.content} onChange={handleChange} />
//             </div>
//             <button type="submit">送信</button>
//           </Form>
//         );
//       }}
//     />
//   );
// };
