import React from "react";

export const InputTodo = (props) => {
  const { todoText, onchange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onchange}
      ></input>
      <button onClick={onClick}>追加</button>
    </div>
  );
};
