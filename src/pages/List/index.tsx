import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { QUESTIONS } from "../../api";
import Question from "../../components/question";
import useFetch from "../../hooks/useFetch";
import { Question as QuestionType } from "../../types";


function List(): JSX.Element {
  const { data } = useFetch<QuestionType[]>(QUESTIONS);
  // const [] = useSearchParams({ filter: });

  return (
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
          />
        ))
      }
    </div >
  );
}

export default memo(List);
