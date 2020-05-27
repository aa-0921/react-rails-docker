import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

interface Props {
  error: string;
  apiResponse: string;
  url: string;
}

// export function TakeApi(props: Props) {

export const TakeApi = (props: Props) => {
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState('');

  // public static defaultProps: Props = {
  //   color: "blue",
  //   type: "button",
  // };

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then(
        (result) => {
          setApiResponse(result);
        },
        (error) => {
          setApiResponse(error);
        },
      );
    return () => {
      <React.Fragment>TakeApi: {apiResponse}</React.Fragment>;
    };
  });
};
