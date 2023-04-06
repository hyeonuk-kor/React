/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitle(i);
                if (modal) setModal(false);
                else setModal(true);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                  copy = [...따봉];
                  copy.splice(i, 1);
                  따봉변경(copy);
                }}
              >
                삭제
              </button>
            </h4>

            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.push(입력값);
          글제목변경(copy);
          copy = [...따봉];
          copy.push(0);
          따봉변경(copy);
        }}
      >
        추가
      </button>
      {modal ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}
export default App;
