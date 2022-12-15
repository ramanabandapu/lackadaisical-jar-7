


import "./App.css";


import MainRoutes from "./Routes/MainRoutes";
// import Footer from "./Components/Footer";
import HomeSection from "./Components/HomeSection";
import Login from "./Components/Login";
// import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
// import { SignupDrawer } from "./Components/SignupDrawer";



function App() {
  return (
    <div className="App">



      <MainRoutes/>
      

      {/* <Navbar />
      <Footer/> */}
      <Signup/>
    
      <Login/>
      {/* <HomeSection/> */}



    </div>
  );
}

export default App;
