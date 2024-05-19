import HomeComponent from "./componentes/HomeView/HomeComponent";
import NavBar from "./componentes/navigation/NavBar";


export default function DomViw() {
    return (
    <>
    <div className="wrapper">
    <NavBar />
    <HomeComponent/>
    </div>
    
    </>
    )
}