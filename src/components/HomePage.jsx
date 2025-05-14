import Inicio from "./Inicio";
import ParaTi from "./ParaTi";
import Testimonios from "./Testimonios";
import ComoFunciona from "./ComoFunciona";
import CTA from "./CTA";
import Footer from "./Footer";
import NavBar from "./Navbar";


const HomePage = () => {
    return (
    <>
        <NavBar/>
        <Inicio/>
        <ParaTi/>
        <Testimonios/>
        <ComoFunciona/> 
        <CTA/> 
        <Footer/>
    </>
    );
};

export default HomePage