import "./App.css";
import SimpleForm from "./SimpleForm";
import { useEffect } from "react";
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="App">
      <SimpleForm></SimpleForm>
    </div>
  );
}

export default App;
