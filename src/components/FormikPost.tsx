import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';

export const FormikPost = () => {
  const [postImage, setPostImage] = useState('');

  // type bodyProps = {
  //   picture: string;
  //   content: string;
  // };

  // const values = {
  //   picture: picpostImage,
  //   content: '',
  // };
  const createPicpost = async (body: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('body:', body);
    }
    // values.user_id = 1;
    const method = 'POST';
    // const body = JSON.stringify(values);
    // const [picpost, setPicpost] = useState('');
    const headers = { 'content-type': 'multipart/form-data' };
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS!;
    if (process.env.NODE_ENV !== 'production') {
      console.log('postUrl:', postUrl);
    }
    await axios.post(postUrl, body, { headers });
  };
  const setImage = (e: any, setFieldValue: any) => {
    let canvas: any = document.getElementById('canvas');
    console.log('canvas:', canvas);

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
      setPostImage(resizeData);
      console.log('postImage:', postImage);

      setFieldValue('post_image', resizeData);
      console.log('resizeData:', resizeData);
    };
    console.log('img:', img);

    img.src = URL.createObjectURL(e.target.files[0]);
    console.log('img.src :', img.src);
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

        console.log('values: ', values);
        console.log('values.picture: ', values.picture);
        const submitData = new FormData();

        submitData.append('picture', values.picture);
        submitData.append('content', values.content);
        submitData.append('user_id', '1');
        const body = submitData;

        createPicpost(body);
      }}
      render={({ values, handleSubmit, handleChange, setFieldValue, isSubmitting }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div>
              <img
                src="http://localhost:8000/d8ccdf6e-f571-4761-852c-79752ed7b71c"

                // src={props.post.picture}
                // className="rounded-lg"
                // onClick={() => props.modalOpenHandler(props.post)}
              />
              <label>投稿画像</label>
              <React.Fragment>
                <Field
                  type="file"
                  // name="picture"
                  id="file"
                  name="file"
                  // value={values.picture}
                  // onChange={(e: any) => setImage(e, setFieldValue)}
                  // onChange={(event: any) => {
                  //   setFieldValue(
                  //     'file',
                  //     event.currentTarget.files !== null ? event.currentTarget.files[0] : null,
                  //   );
                  // }}
                  onChange={(e: any) => {
                    setImage(e, setFieldValue);

                    var file = e.target.files[0];
                    var reader = new FileReader();

                    reader.onload = function (item) {
                      setFieldValue('picture', item.target !== null ? item.target.result : null);
                    };

                    reader.readAsDataURL(file);
                  }}
                />
                <Field type="hidden" name="post_image" />
              </React.Fragment>
              {
                // onChange={(event: any) => {
                //   handleChange;
                //   setFieldValue('file', event.currentTarget.files[0]);
                // }}
                // onChange={handleChange}
                // id="select_posts_image"
              }
            </div>
            <canvas
              id="canvas"
              style={{
                display: 'none',
              }}
              width="64"
              height="64"
            />
            <label>コメント</label>
            <Field className="input" type="text" name="name" />
            <button className="submit-button" type="submit" disabled={isSubmitting}>
              送信
            </button>
            {/* </Field> */}
          </Form>
        );
      }}
    />
  );
};
