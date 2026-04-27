import './css/App.css';
import Content from './Layout/Content/Content';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import "./css/utilites.css";

function App() {
  return (
    <div className="App flex column">
      <Header></Header>
      <Content></Content>
      <div className="bg-red-500 text-white p-4">
        TEST
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
