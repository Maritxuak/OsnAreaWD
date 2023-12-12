import classes from "./main.module.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import Header from "../../../components/Header/header";
import Back from "../../../components/Back/Back";
import Projects from "../projects/Projects";

const Main = () => {
  return (
    // <div className={classes.container}>
    //   <Header />
    //   <Routes>
    //     <Route path="/welcome/" element={<WelcomePage />}/>
    //     <Route path="/welcome/projects" element={<Projects />}/>
    //   {/* <Header />
    //   <WelcomePage /> */}
    //   </Routes>
    // </div>
    <div className={classes.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
