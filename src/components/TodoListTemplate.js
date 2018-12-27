import React from "react";
import "./TodoListTemplate.css";
const TodoListTemplate = ({ form, children, palette }) => {
  //비 구조 할당 (props) => {...}, ({form, children} => {...})
  console.log("TodoListTemplate.js palette : " + palette);
  //console.log(form);
  return (
    <main className="todo-list-template">
      <div className="title">Todo List</div>
      <section className="palette-wrapper">{palette}</section>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>

      {/* 2. TodoListTemplate 에서 Palette 가 들어갈 자리를 만드세요  */}
    </main>
  );
};

export default TodoListTemplate;
