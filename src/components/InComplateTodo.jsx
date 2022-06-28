import React from "react";

export const InComplateTodo = (props) => {
  const { incomplateTodo, onClickAddComplate, onClickDelete } = props;
  return (
    <div className="incomplate-area">
      <p className="title">未完了のTODO</p>
      <ul className="list">
        {incomplateTodo.map((todo, index) => {
          return (
            //mapなど使ってレンダリングするときはkeyを忘れずに
            <li key={todo} className="item">
              <p>{todo}</p>
              <div>
                <button onClick={() => onClickAddComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
