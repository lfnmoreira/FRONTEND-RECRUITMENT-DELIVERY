import { memo, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { QUESTIONS } from "../../api";
import Question from "../../components/Question";
import { Question as QuestionType } from "../../types";
import axios from 'axios';

function Details(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const hasFetched = useRef(false);

  const [data, setData] = useState<QuestionType | undefined>(undefined)

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      axios.get(`${QUESTIONS}/${id}`).then((res) => setData(res.data))
    }
  }, [])

  return (
    <div className="details">
      <button onClick={() => navigate(-1)}>BACK</button>
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

export default memo(Details);
