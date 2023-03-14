import React from "react";

function List(): JSX.Element {
  return (
    <div className="list">
      <p>List</p>
    </div>
  );
}

export default React.memo(List);
