import './Main.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from './../Nav/Nav';
import Lorem from './Lorem/Lorem';
import Ipsum from './Ipsum/Ipsum';

const Main = () => {
    return (
        <BrowserRouter>
            <main className="main">
                <Nav />
                <Routes>
                    <Route path="/lorem" element={ <Lorem /> }/>
                    <Route path="/ipsum" element={ <Ipsum/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Main;