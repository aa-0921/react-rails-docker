import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';

export const FormikPost = () => {
  const [picpostImage, setPicpostImage] = useState('');

  type bodyProps = {
    firstName: string;
    lastName: string;
  };

  const obj = {
    firstName: 'Fred',
    lastName: 'Flintstone',
  };
  const createPicpost = (obj: bodyProps) => {
    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
      'Content-Type': 'application/json',
    };
    const [picpost, setPicpost] = useState('');

    const postUrl: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;
    axios
      .post(postUrl, body)

      .then(({ data }) => {
        if (data) {
          setPicpost(data);
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
  const initialValues: any = {
    picpost_image: '',
    name: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={createPicpost}>
      {({ setFieldValue: setFieldValue, isSubmitting }) => {
        return (
          <Form>
            <label>投稿画像</label>
            <img src={!picpostImage ? '' : picpostImage} />
            <React.Fragment>
              {/* ※※ */}
              <Field
                id="select_posts_image"
                type="file"
                name="post_image"
                onChange={(e: any) => setImage(e, setFieldValue)}
              />
              <Field type="hidden" name="profile_image" />
            </React.Fragment>

            <canvas
              id="canvas"
              style={{
                display: 'none',
              }}
              width="64"
              height="64"
            />
            <label>コメント</label>
            <Field className="input" type="text" name="comment" />
            <button className="submit-button" type="submit" disabled={isSubmitting}>
              送信
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
