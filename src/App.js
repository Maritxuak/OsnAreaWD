import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import classes from "./styles/global.module.scss";
import Loader from "./components/Loader/Loader";
import Login from './pages/auth/login/Login';
import Wrong from './pages/wrong_search/Wrong_page';
import Main from './pages/adminPanel/main/Main';
import Register from './pages/auth/register/Register';
import Projects from './pages/adminPanel/projects/Projects';
import WelcomePage from './pages/adminPanel/welcome_page/Welcome'
import Collection from './pages/adminPanel/collection/Collection';
import HeaderIndex from './components/Index/Header/Header';
import WebBlock from './components/Index/WebBlock/WebBlock';
import OneBlockText from './components/Index/OneBlockText/OneBlockText';
import ButtonOneBlock from './components/Index/ButtonOneBlock/ButtinOneBlock';
import PanelONasOneBlock from './components/Index/PanelONasOneBlock/PanelONasOneBlock';
// import Root, { loader as rootLoader } from "./routes/root";

const Layout = () => {
  return(
  <div className={classes.main}>
    <HeaderIndex />
    <WebBlock />
    <OneBlockText />
    <ButtonOneBlock />
    <PanelONasOneBlock />
    
  </div>
  );
}
console.log(classes)

function App() {
    const router = createBrowserRouter ([
      
    {
      path: "/",
      element: <Layout />,
      
      children:[
      ]
    },
    {
      path: "/*",
      element: <Wrong />,
      
    },
    {
      path: "/loader",
      element: <Loader />,
      
    },
    {
      path: "/login",
      element: <Login />,
      
    },
    {
      path: "/register",
      element: <Register />,
      
    },
    {
      path: "/welcome",
      element: <Main />,
      children:[
        {
          path:"/welcome/",
          element:<WelcomePage />
        },
        {
        path:"/welcome/projects",
        element:<Projects />
        },
        {
          path:"/welcome/colletion",
          element:<Collection />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App

