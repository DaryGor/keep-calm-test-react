import "./Main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./../Nav/Nav";
import Lorem from "./Lorem/Lorem";
import Ipsum from "./Ipsum/Ipsum";

const Main = (props) => {
  return (
    <BrowserRouter>
      <main className='main'>
        <Nav />
        <Routes>
          <Route path='/lorem' element={<Lorem state={props.state.loremPage} />} />
          <Route path='/ipsum' element={<Ipsum state={props.state.ipsumPage} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Main;
