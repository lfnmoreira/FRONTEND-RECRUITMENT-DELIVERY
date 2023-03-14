import React, { memo } from "react";
import { Question as QuestionType, Choice as ChoiceType } from "../types";
import Choice from "./Choice";

function Question({ id, question, choices, image_url, thumb_url }: QuestionType): JSX.Element {
  return (
    <div className="question" key={id}>
      <div className="title">
        <img src={thumb_url} alt="" />
        <h3>{question}</h3>
      </div>
      <div className="details">
        <img src={image_url} alt="" />
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