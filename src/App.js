import { CardContainer } from "./components/CardContainer";
import { FooterComponent } from "./components/FooterComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { SubscribeUs } from "./components/SubscribeUs";
import './App.css';
import { LandingPage } from "./components/LandingPage";
import { CardNavbar } from "./components/CardNavbar";
import { BigCard } from "./components/BigCard";
import { RegisterCard } from "./components/RegisterCard";


function App() {
  return (
    <div>
      <NavbarComponent/>
      <LandingPage />
      <CardNavbar />
      <CardContainer/>
      <SubscribeUs/>
      <RegisterCard />
      <FooterComponent />
    </div>
  );
}

export default App;
