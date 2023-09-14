import React from "react";
import "./App.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <buton>追加</buton>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div></div>
    </>
  );
};
