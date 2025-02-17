import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="flex h-screen flex-col items-center">
      <div className="mx-4 flex flex-col items-center md:mx-8 xl:mx-[8.44rem] xl:max-w-[73.125rem]">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
