import axios from "axios";
import { memo, useRef, useEffect, useState, FormEventHandler } from "react";
import { useSearchParams } from "react-router-dom";
import { QUESTIONS } from "../../api";
import Question from "../../components/Question";
import SearchBar from "../../components/SearchBar";
import useIsOnViewportObserver from "../../hooks/useIsOnViewportObserver";
import { Question as QuestionType } from "../../types";


function Questions(): JSX.Element {
  const [list, setList] = useState<QuestionType[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const viewMoreRef = useRef(null);
  const isOnViewport = useIsOnViewportObserver(viewMoreRef);
  const filter = searchParams.get('filter');
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  const getQuestions = () => {
    const params = {
      filter: filter ? filter : undefined,
      limit: limit ? limit : undefined,
      offset: offset ? offset : undefined
    }
    axios.get(QUESTIONS, { params })
      .then((res) => setList(res.data))
  }

  const getMoreQuestions = () => {
    if (offset && limit) {
      const sum = Number(offset) + Number(limit);
      setSearchParams({
        offset: sum.toString(), limit, filter: filter ? filter : '',
      })
    } else {
      setSearchParams({ offset: '10', limit: '10', filter: filter ? filter : '' })
    }
  }

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const params = {
      filter: e.currentTarget.value,
      limit: limit ? limit : '',
      offset: offset ? offset : ''
    }
    setSearchParams(params)
  }

  useEffect(() => {
    getQuestions()
  }, [searchParams])

  useEffect(() => {
    if (isOnViewport) {
      getMoreQuestions()
    }
  }, [isOnViewport])

  return (
    <div className="questions">
      <SearchBar onChange={handleSearch} />
      <div className="list">
        {
          list?.map((each) => (
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
      {
        list.length ?
          <div ref={viewMoreRef} style={{ backgroundColor: 'red', height: 100 }} />
          : null
      }
    </div>

  );
}

export default memo(Questions);
