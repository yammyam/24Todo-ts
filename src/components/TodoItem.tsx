import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
import { Todo } from "../types";

interface TodoItemProps extends Todo {}
const TodoItem: React.FC<TodoItemProps> = ({ id, isDone, content, date }) => {
  const context = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error(
      "TodoDispatchContext must be used within a TodoDispatchProvider"
    );
  }

  const { onUpdate, onDelete } = context;
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//고차컴포넌트 (HOC)
//커스터마이징 가능
// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//   //True => Props 바뀌지않음 -> 리렌더링 x
//   //False => Props 바뀜 -> 리렌더링 o
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   return true;
// });

export default memo(TodoItem);
