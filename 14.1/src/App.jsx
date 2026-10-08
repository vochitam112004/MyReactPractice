import "./App.css";
import { useState } from "react";
import Header from "././Components/Header/Header";
import MainContent from "././Components/MainContent/MainContent";
import { myData, EXAMPLES } from "./Data";
import ButtonMenu from "./Components/ButtonMenu";
function App() {
  const [topic, setTopic] = useState("Click vao button");
  function Alert(selectopic) {
    setTopic(selectopic);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Các Khái niệm chính</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>
        <menu id="menu">
          <h2>Examples</h2>

          <ButtonMenu onSelect={() => Alert("jsx")}>JSX</ButtonMenu>
          <ButtonMenu onSelect={() => Alert("components")}>
            Components
          </ButtonMenu>
          <ButtonMenu onSelect={() => Alert("props")}>Props</ButtonMenu>
          <ButtonMenu onSelect={() => Alert("state")}>State</ButtonMenu>
        </menu>
        <p>{topic}</p>
      </main>
    </>
  );
}

export default App;
