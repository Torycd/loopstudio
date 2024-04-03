import Creation from "./Components/Creation";
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
    </div>
  );
}

export default App;
