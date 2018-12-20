import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import PaletteList from "./components/PaletteList";
/* import Palette from "./components/Palette"; */

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: "빨래하기", checked: false },
      { id: 1, text: "공부하기", checked: true },
      { id: 2, text: "보컬가기", checked: false }
    ],
    // 4.App 의 state 에 color 값을 추가하세요
    colors: [
      { id: 0, color: "#343a40" },
      { id: 1, color: "#f03e3e" },
      { id: 2, color: "#12b886" },
      { id: 3, color: "#228ae6" }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번재 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { input, todos, colors } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate
        palette={<PaletteList colors={colors} />}
        //palette={}
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        {/* <PaletteList colors={colors} /> */}
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />

        {/* <Palette color={color} /> */}
      </TodoListTemplate>
    );
  }
}

export default App;
