import "./Header.css";
import { memo } from "react";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <h3>오늘의 할 일🐿️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
