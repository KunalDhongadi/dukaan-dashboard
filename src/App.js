import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MenuNavbar from "./components/MenuNavbar";
import Overview from "./components/Overview";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <div className="bg-[#FAFAFA] flex">
        <div className="hidden lg:block">
          <MenuNavbar />
        </div>
        <div className="lg:ms-[224px] grow">
          <Header />
          <div className="flex flex-col px-8 max-w-6xl mx-auto">
            <Overview />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
