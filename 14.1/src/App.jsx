import "./App.css";

import Header from "././Components/Header/Header";
import MainContent from "././Components/MainContent/MainContent";
import { myData } from "./Data";
import ButtonMenu from "./Components/ButtonMenu";
function App() {
  function Alert() {
    alert("nut duoc bam ");
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

          <ButtonMenu onSelect={Alert}>JSX</ButtonMenu>
          <ButtonMenu onSelect={Alert}>Components</ButtonMenu>
          <ButtonMenu onSelect={Alert}>Props</ButtonMenu>
          <ButtonMenu onSelect={Alert}>State</ButtonMenu>
        </menu>
      </main>
    </>
  );
}

export default App;
