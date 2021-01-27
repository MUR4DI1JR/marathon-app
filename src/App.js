import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg1 from './assets/bg1.jpg';
import bg3 from './assets/bg3.jpg';

function App() {
  return (
    <div className="App">
      <Header title={'This is title'} descr={'This is Description!'}/>
      <Layout urlBg={bg1} title={'layout 1'} descr={'This is layout 1!'}/>
      <Layout colorBg="#87AF7C" title={'layout 2'} descr={'This is layout 2!'}/>
      <Layout urlBg={bg3} title={'layout 3'} descr={'This is layout 3!'}/>
      <Footer/>
    </div>
  );
}

export default App;
