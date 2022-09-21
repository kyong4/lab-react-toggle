import React from "react";
import { useState } from "react"; //

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}


function BoardSwitcher(props) {
  let boards = [];
//start
  const [selected, setSelected] = useState(0);

const incrementClick = () => {
  setSelected((prevSelected)=> {
    let nextSelected = prevSelected+1;
    if (nextSelected>4) {
      nextSelected=0;
    }
    return nextSelected;
  });
};
//end


  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={incrementClick}> Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
