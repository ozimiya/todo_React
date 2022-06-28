import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodo, setInComplateTodo] = useState(["未完了のTODO"]);
  const [complateTodo, setComplateTodo] = useState(["完了したTODO"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickInputText = () => {
    if (todoText) {
      const newTodo = [...incomplateTodo, todoText];
      setInComplateTodo(newTodo);
      setTodoText("");
    }
  };
  const deleteTodo = (i, args) => {
    const newTodo =
      args.trigger === "inComplate" ? [...incomplateTodo] : [...complateTodo];

    newTodo.splice(i, 1);

    args.trigger === "inComplate"
      ? setInComplateTodo(newTodo)
      : setComplateTodo(newTodo);
  };
  const onClickDelete = (i) => {
    deleteTodo(i, { trigger: "inComplate" });
  };
  const onClickAddComplate = (i) => {
    deleteTodo(i, { trigger: "inComplate" });
    const newComplateTodo = [...complateTodo, incomplateTodo[i]];
    setComplateTodo(newComplateTodo);
  };
  const onClickReturn = (i) => {
    deleteTodo(i, { trigger: "complate" });
    const newInComplateTodo = [...incomplateTodo, complateTodo[i]];
    setInComplateTodo(newInComplateTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickInputText}>追加</button>
      </div>
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul className="list">
          {incomplateTodo.map((todo, index) => {
            return (
              //mapなど使ってレンダリングするときはkeyを忘れずに
              <li key={todo} className="item">
                <p>{todo}</p>
                <div>
                  <button onClick={() => onClickAddComplate(index)}>
                    完了
                  </button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
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
    </>
  );
};
