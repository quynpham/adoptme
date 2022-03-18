import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import Pet from "./pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
