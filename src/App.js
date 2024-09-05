import "./App.css";
import ClientHistoryView from "./component/Pages/ClientHistoryview";
import CardBody from "./component/Pages/CardBody";
import Header from "./component/Pages/Header";
// import TableData from './component/Pages/TableData';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<CardBody />} />

        <Route
          exact
          path="/ClientHistoryView"
          element={<ClientHistoryView />}
        />
      </Routes>
    </div>
  );
}

export default App;
