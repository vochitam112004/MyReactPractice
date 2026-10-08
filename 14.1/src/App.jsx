import "./App.css";
import { useState } from "react";
import Header from "././Components/Header/Header";
import MainContent from "././Components/MainContent/MainContent";
import { myData, EXAMPLES } from "./Data";
import ButtonMenu from "./Components/ButtonMenu";
function App() {
  const [topic, setTopic] = useState("components");
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
        <div className="tab-content">
          <h3>{EXAMPLES[topic].title}</h3>
          <p>{EXAMPLES[topic].desc}</p>
          <pre>
            <code>{EXAMPLES[topic].code}</code>
          </pre>
        </div>
      </main>
    </>
  );
}

export default App;
