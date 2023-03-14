import React from "react";
import { useParams } from "react-router";
import { QUESTIONS } from "../../api";
import Question from "../../components/Question";
import useFetch from "../../hooks/useFetch";
import { Question as QuestionType } from "../../types";

function Details(): JSX.Element {
  const { id } = useParams();
  const { data } = useFetch<QuestionType>(`${QUESTIONS}/id`);

  return (
    <div className="details">
      {
        data &&
        <Question
          choices={data.choices}
          id={data.id}
          image_url={data.image_url}
          published_at={data.published_at}
          question={data.question}
          thumb_url={data.thumb_url}
        />
      }
    </div>
  );
}

export default React.memo(Details);
