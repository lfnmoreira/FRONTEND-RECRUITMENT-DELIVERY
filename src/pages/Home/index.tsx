import React, { useEffect } from "react";
import { HEALTH } from "../../api";
import useFetch from "../../hooks/useFetch";
import { redirect, useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes/paths";

enum STATUS {
  OK = "OK",
}

interface Health {
  status: STATUS | string;
}

function Home(): JSX.Element {
  const { data, error } = useFetch<Health>(HEALTH);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.status === STATUS.OK) {
      navigate(RoutePath.QUESTIONS_LIST);
    }
  }, [data]);

  function renderFeedback() {
    if (error || data?.status !== STATUS.OK) {
      return <p>Retry Action</p>;
    }
    return <p>Loading...</p>;
  }

  return <div className="Home">{renderFeedback()}</div>;
}

export default React.memo(Home);
