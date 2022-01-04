import Header from "../components/Header";
import LandingPage from "../components/LandingPage.jsx";
import Sidebar from "../subcomponents/Sidebar.jsx";
import Explore from "../components/Explore.jsx";
import Footer from "../components/Footer.jsx";

const Home=()=>{
    return<>
        <Header/>   
        <LandingPage/> 
        <Sidebar/>
        <Explore/>
        <Footer/>
    </>
}
export default Home;