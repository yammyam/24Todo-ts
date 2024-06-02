import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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
