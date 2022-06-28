import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { InComplateTodo } from "./components/InComplateTodo";
import { ComplateTodo } from "./components/ComplateTodo";
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
      <InputTodo
        todoText={todoText}
        onchange={onChangeTodoText}
        onClick={onClickInputText}
        disabled={incomplateTodo.length >= 5}
      />
      {incomplateTodo.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるタスクは５個です。消化しましょう( ¨̮ )
        </p>
      )}
      <InComplateTodo
        incomplateTodo={incomplateTodo}
        onClickAddComplate={onClickAddComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodo complateTodo={complateTodo} onClickReturn={onClickReturn} />
    </>
  );
};
