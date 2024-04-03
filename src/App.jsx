import Creation from "./Components/Creation";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Leader from "./Components/Leader";


function App() {
  return (
    <div className="w-dvh cursor-pointer font-Alata">
      <Header />
      <Leader/>
      <Creation/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
