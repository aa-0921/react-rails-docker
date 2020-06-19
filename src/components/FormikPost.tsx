import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';

export const FormikPost = () => {
  const [picpostImage, setPicpostImage] = useState('');

  // type bodyProps = {
  //   picture: string;
  //   content: string;
  // };

  // const values = {
  //   picture: picpostImage,
  //   content: '',
  // };
  const createPicpost = async (values: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('values:', values);
    }
    // values.user_id = 1;
    const method = 'POST';
    // const body = JSON.stringify(values);
    const headers = {
      'Content-Type': 'application/json',
    };
    // const [picpost, setPicpost] = useState('');

    const postUrl: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;
    if (process.env.NODE_ENV !== 'production') {
      console.log('postUrl:', postUrl);
    }
    await axios
      .post(postUrl, values)
      // .post(postUrl, body)

      .then(({ data }) => {
        if (data) {
          // setPicpost(data);
        } else {
          // throw new Error(message);
        }
      })
      .catch((e) => alert(e.message));
    // fetch(postUrl, { method, headers, body })
    //   .then(function (response) {
    //     if (response.data) {
    //       setPicpost(data);
    //     } else {
    //       throw new Error(response.message);
    //     }
    //   })
    //   .catch((e) => alert(e.message));
  };
  const setImage = (e: any, setFieldValue: any) => {
    let canvas: any = document.getElementById('canvas');
    let ctx = canvas!.getContext('2d');
    let maxW = 250;
    let maxH = 250;

    let img = new Image();
    img.onload = () => {
      let iw = img.width;
      let ih = img.height;
      let scale = Math.min(maxW / iw, maxH / ih);
      let iwScaled = iw * scale;
      let ihScaled = ih * scale;
      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
      const resizeData = canvas.toDataURL('image/jpeg', 0.5);
      setPicpostImage(resizeData);
      setFieldValue('picpost_image', resizeData);
    };
    img.src = URL.createObjectURL(e.target.files[0]);
  };
  // interface FormValues {
  //   picpost_image: string;
  //   name: string;
  // }
  // 初期値は必要なさそうなので、後々消す。
  // const initialValues: any = {
  //   picpost_image: '',
  //   constent: '',
  // };
  return (
    <Formik
      initialValues={{ picture: '', content: '', user_id: 0 }}
      onSubmit={(values) => {
        values.user_id = 1;

        // console.log(values);
        createPicpost(values);
      }}
      render={({ values, handleSubmit, handleChange, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <Field>
              <div>
                <label>投稿画像</label>
                <input
                  name="picture"
                  value={values.picture}
                  onChange={(event) => {
                    setFieldValue(
                      'file',
                      event.currentTarget.files !== null ? event.currentTarget.files[0] : null,
                    );
                    // setFieldValue('file', event.currentTarget.files[0]);
                  }}
                  // onChange={props.handleChange}
                  id="select_posts_image"
                  type="file"
                />
              </div>
              <canvas
                id="canvas"
                style={{
                  display: 'none',
                }}
                width="64"
                height="64"
              />
              <div>
                <label>comment</label>
                <input type="text" name="content" value={values.content} onChange={handleChange} />
              </div>
              <button type="submit">送信</button>
            </Field>
          </Form>
        );
      }}
    />
  );
  // return (
  // <Formik initialValues={initialValues} onSubmit={createPicpost}>
  //   {({ setFieldValue, isSubmitting }) => {
  //     return (
  //       <Form>
  //         <label>投稿画像</label>
  //         <img src={!picpostImage ? '' : picpostImage} />
  //         <React.Fragment>
  //           {/* ※※ */}
  //           <Field
  //             id="select_posts_image"
  //             type="file"
  //             name="picture"
  //             onChange={(e: any) => setImage(e, setFieldValue)}
  //           />
  //           <Field type="hidden" name="post_image" />
  //         </React.Fragment>

  //         <canvas
  //           id="canvas"
  //           style={{
  //             display: 'none',
  //           }}
  //           width="64"
  //           height="64"
  //         />
  //         <label>コメント</label>
  //         <Field className="input" type="text" name="content" />
  //         <button className="submit-button" type="submit" disabled={isSubmitting}>
  //           送信
  //         </button>
  //       </Form>
  //     );
  //   }}
  // </Formik>
  // );
};
