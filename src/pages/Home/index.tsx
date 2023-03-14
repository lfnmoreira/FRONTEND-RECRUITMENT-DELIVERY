import React, { useEffect, useRef } from "react";
import { HEALTH } from "../../api";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes/paths";
import { Health, STATUS } from "../../types";



function Home(): JSX.Element {
  const { data, error } = useFetch<Health>(HEALTH);
  const navigate = useNavigate();
  const hasCheckedHealth = useRef(false);

  useEffect(() => {
    if (data?.status === STATUS.OK && !hasCheckedHealth.current) {
      hasCheckedHealth.current = true;
      navigate(RoutePath.QUESTIONS_LIST);
    }
  }, [data]);

  function renderFeedback() {
    if (error || (data && data.status !== STATUS.OK)) {
      return <p>Retry Action</p>;
    }
    return <p>Loading...</p>;
  }

  return <div className="Home">{renderFeedback()}</div>;
}

export default React.memo(Home);
