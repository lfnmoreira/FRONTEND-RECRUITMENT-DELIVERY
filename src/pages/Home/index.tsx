import React, { useEffect, useRef, useState } from "react";
import { HEALTH } from "../../api";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes/paths";
import { STATUS } from "../../types";
import axios from 'axios';

function Home(): JSX.Element {
  const navigate = useNavigate();
  const hasFetched = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  function getHealth() {
    setIsLoading(true)
    axios.get(HEALTH).then((res) => {
      if (res.data?.status === STATUS.OK) {
        navigate(`${RoutePath.QUESTIONS}?filter=FILTER`);
      } else {
        setIsLoading(false)
      }
    })
  }

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      getHealth()
    }
  }, [])

  function renderFeedback() {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <button onClick={getHealth}>Retry Action</button>;
  }

  return <div className="Home">{renderFeedback()}</div>;
}

export default React.memo(Home);
