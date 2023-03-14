import React, { memo } from "react";
import { generatePath, useNavigate } from "react-router";
import { RoutePath } from "../routes/paths";
import { Question as QuestionType } from "../types";
import Choice from "./Choice";

function Question({ id, question, choices, image_url, thumb_url }: QuestionType): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    const pathId = id.toString();
    const path = generatePath(RoutePath.DETAILS, { id: pathId })
    navigate(path);
  }

  return (
    <div className="question" key={id} onClick={handleClick}>
      <div className="title">
        <img src={thumb_url} alt={`${question} thumb`} />
        <h3>{question}</h3>
      </div>
      <div className="details">
        <img src={image_url} alt={`${question} image`} />
      </div>
      <div className="choices">
        {choices.map(({ choice, votes }) => (
          <Choice choice={choice} votes={votes} key={choice} />
        ))}
      </div>
    </div>
  )
}

export default memo(Question);