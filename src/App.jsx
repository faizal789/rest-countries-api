import Home from "./Home";
import Detail from "./component/Detail";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <main className=" bg-light-mode-bg h-full dark:bg-dark-mode-bg">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/detail/:countryId" element={<Detail></Detail>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
