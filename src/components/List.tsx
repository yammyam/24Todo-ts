import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext, ChangeEvent } from "react";
import { TodoStateContext } from "../App";
import { Todo } from "../types";

const List = () => {
  const todos = useContext(TodoStateContext);
  // 원래 객체로 todos를 뭉쳐서 가져와서 구조분해 할당을 했지만 props로 todos 자체를 보내고있어서 todos는 배열임
  // console.log(Array.isArray(todos));  ==> true

  if (!todos) {
    throw new Error("TodoStateContext must be used within a TodoStateProvider");
  }
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = (): Todo[] => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredDate();
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;

    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>To Do List🍄</h4>
      <div>전체 : {totalCount}</div>
      <div>완료 : {doneCount}</div>
      <div>미완료 : {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
