import "./App.css";

import Footer from "./Components/Footer";

import Motor from "./Components/ankesh_work/Motor";
import Navbar from "./Components/Navbar";

import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* <LoginDrawer />
      <SignupDrawer /> */}
      {/* <HomeSection/> */}
      {/* <Login/> */}

      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
