import "./Editor.css";
import {
  useState,
  useRef,
  useContext,
  ChangeEvent,
  KeyboardEvent,
  RefObject,
} from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error(
      "TodoDispatchContext must be used within a TodoDispatchProvider"
    );
  }
  const { onCreate } = context;
  const [content, setContent] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      ref.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="Editor">
      <input
        value={content}
        ref={ref}
        onChange={onChangeContent}
        placeholder="새로운 할 일 ..."
        onKeyDown={onKeydown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
