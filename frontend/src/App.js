
import "./App.css";
import Footer from "./Components/Footer";
import HomeSection from "./Components/HomeSection";
import Login from "./Components/Login";
import { LoginDrawer } from "./Components/LoginDrawer";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { SignupDrawer } from "./Components/SignupDrawer";
import MainRoutes from "./Routes/MainRoutes";


function App() {
  return (
    <div className="App">
<LoginDrawer/>
<SignupDrawer/>
{/* <HomeSection/> */}
{/* <Login/> */}

      {/* <Navbar /> */}
      {/* <MainRoutes /> */}
      {/* <Footer />  */}
      

    </div>
  );
}

export default App;
