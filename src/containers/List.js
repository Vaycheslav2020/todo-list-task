import React from "react";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";

const todo = [
  { name: "задача: 1", checked: false, id: 0 },
  { name: "задача: 2", checked: false, id: 1 },
  { name: "задача: 3", checked: true, id: 2 },
  { name: "задача: 4", checked: false, id: 3 },
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      history: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ elements: todo });
  }

  handleCheck = ({ checked, id }) => {
    const time = new Date();
    const historyItem = [
      `Вы изменили задачу ${id + 1} на ${
        checked ? "не выполнено" : "выполнено"
      } в ${time.toLocaleTimeString()}`,
    ];

    const elems = this.state.elements.map((item) =>
      item.id === id ? { ...item, checked: !checked } : item
    );

    this.setState({
      elements: elems,
      history: this.state.history.concat([...historyItem]),
    });
  };

  handleClick() {
    let count = 0;
    this.state.elements.forEach((item) => item.checked && count++);
    alert(`выполненных задач из списка: ${count}`);
  }

  render() {
    const { elements, history } = this.state;
    return (
      <>
        <div className="df">
          {history.length > 0 ? (
            <div className="history-list">
              {history.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          ) : null}

          <div className="todo-list">
            {elements.map((item) => (
              <TodoItem key={item.id} handleCheck={this.handleCheck}>
                {item}
              </TodoItem>
            ))}
          </div>
        </div>
        <Button handleClick={this.handleClick} />
      </>
    );
  }
}
export default List;
