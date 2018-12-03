import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    /* text : todo 내용
     * checked : 체크박스 상태
     * id : todo 의 고유 아이디
     * onToggle: 체크박스를 키고 끄는 함수
     * onRemove : 아이템을 삭제 시키는 함수
     */
    console.log(id);
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        {/* 해당 컴포넌티의 최상위 DOM의 클릭 이벤트에는 onToggle을 넣어줌. */}
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            // e.stopPropagation() 작업을 하지 않으면 x키를 눌렀을때,
            //onRemove 함수만 실행되는 것이 아니라. 해당 DOM의 부모의 클릭
            //이벤트에 연결되어 있는 onToggle이 실행되는데,
            //onRemove -> onToggle 식으로 실행이 되면서
            //코드가 의도치 않게 작동하여 삭제가 제대로 진행되지 않음.
            // e.stopPropagtion()은 이벤트의 '확산'을 멈춰줌.
            /* onToggle과 onRemove 는 id 를 파라미터로 넣으면 
            해당 id 를 가진 데이터를 업데이트합니다. 
            파라미터를 넣어줘야 하기 때문에, 
            이 과정에서 우리는 onClick={() => onToggle(id)} 
            와 같은 형식으로 작성을 했는데요, onClick={onToggle{id}} 
            와 같은 형식으로 하고 싶다면.. 
            절대 안됩니다!! 리액트가 초심자가 한번 쯤 할 수 있는 실수입니다. 
            이렇게 하면 해당 함수가 렌더링 될 때 호출이 됩니다. 해
            당 함수가 호출되면 데이터가 변경 될 것이고, 데이터가 
            변경되면 또 리렌더링이 되겠죠? 그러면 또 
            이 함수가 호출되고.. 무한 반복입니다. */
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          {/* 템플릿 리터럴  "todo-text " + checked && 'checked' */}
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
