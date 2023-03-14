import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { QUESTIONS } from "../../api";
import Question from "../../components/Question";
import useFetch from "../../hooks/useFetch";
import { Question as QuestionType } from "../../types";


function Questions(): JSX.Element {
  const { data } = useFetch<QuestionType[]>(QUESTIONS);

  return (
    <div className="questions">
      <div className="list">
        {
          data?.map((each) => (
            <Question
              choices={each.choices}
              id={each.id}
              image_url={each.image_url}
              published_at={each.published_at}
              question={each.question}
              thumb_url={each.thumb_url}
              key={each.id}
            />
          ))
        }
      </div >
    </div>

  );
}

export default memo(Questions);
