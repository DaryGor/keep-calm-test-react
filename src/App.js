import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './App.scss';

const App = (props) => {
  return (
    <div className="App">
        <Header />
        <Main state={props.state}/>
        <Footer />
    </div>
  );
}

export default App;
