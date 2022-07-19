import FormMain from "./components/forms/main/FormMain";
import Manual from "./components/forms/manual/Manual";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <FormMain/>
      <Manual/>
      <Services/>
    </>
  );
}

export default App;
