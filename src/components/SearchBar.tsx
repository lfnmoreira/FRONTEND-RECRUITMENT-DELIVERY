import React, { memo } from "react";

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

function SearchBar({ onChange }: Props) {
  return (
    <div className="search-bar">
      <input type="text" onChange={onChange} />
    </div>
  )
}

export default memo(SearchBar);