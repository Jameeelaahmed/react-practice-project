// ! HEADER
import Header from "./components/header/header.jsx";
// ! HEADER
// * CORECONCEPTS
import CoreConcepts from "./components/CoreConcepts.jsx";
// *CORECONCEPTS

// !EXAMPLES
import Examples from "./components/Examples/Examples.jsx";
// !EXAMPLES


// !CSS
import "./index.css";
// !CSS

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}
export default App;
