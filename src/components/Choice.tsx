import { memo } from 'react';
import { Choice as ChoiceType } from '../types';

function Choice({ choice, votes }: ChoiceType): JSX.Element {
  return (
    <div className="choice">
      <p>{choice}</p>
      <p>{votes}</p>
    </div>
  )
}

export default memo(Choice)