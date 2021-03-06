import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader, Dimmer } from "semantic-ui-react";

const ConfirmAcct = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  let { hash } = useParams();
  console.log(hash);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/confirm`, { hash })
      .then((res) => {
        alert(res.data.message);
        props.history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : null}
    </div>
  );
};

export default ConfirmAcct;
