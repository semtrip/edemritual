import Footer from "./components/footer/Footer";
import Help from "./components/forms/help/Help";
import FormMain from "./components/forms/main/FormMain";
import Manual from "./components/forms/manual/Manual";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Services from "./components/services/Services";
import ServicesList from "./components/servicesList/ServicesList";
import AboutUs from "./components/aboutUs/AboutUs";
import NumberList from "./components/numberList/NumberList";
import Advantages from "./components/advantages/Advantages";
import Team from "./components/team/Team";
import Photo from "./components/photo/Photo";
import Reviews from "./components/reviews/Reviews";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <FormMain/>
      <Manual/>
      <Services/>
      <Help title={'Оперативная помощь в трудную минуту'}/>
      <ServicesList/>
      <AboutUs/>
      <Photo type={1}/>
      <NumberList/>
      <Help title={'Бесплатная круглосуточная консультация'} title2={'Бесплатный вывоз тела в морг'}/>
      <Advantages/>
      <Team/>
      <Reviews/>
      <Photo type={2} title='Фотографии'/>
      <Footer/>
    </>
  );
}

export default App;
