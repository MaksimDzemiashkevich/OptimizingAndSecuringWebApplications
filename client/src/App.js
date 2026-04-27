import './css/App.css';
import Content from './Layout/Content/Content';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import "./css/utilites.css";

function App() {
  return (
    <div className="App flex flex-col">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
