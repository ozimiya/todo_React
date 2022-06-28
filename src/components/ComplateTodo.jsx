import React from "react";

export const ComplateTodo = (props) => {
  const { complateTodo, onClickReturn } = props;
  return (
    <div className="complate-area">
      <p className="title">完了のTODO</p>
      <ul className="list">
        {complateTodo.map((todo, index) => {
          return (
            <li className="item" key={todo}>
              <p>{todo}</p>
              <div>
                <button
                  onClick={() => {
                    onClickReturn(index);
                  }}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
