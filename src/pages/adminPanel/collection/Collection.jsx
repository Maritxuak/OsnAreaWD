import classes from "./collection.module.css";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/header";
import background from "../../../image/backImage.jpg";
import exemple from "../../../image/site.png";
import Loader from "../../../components/Loader/Loader";

const Projects = () => {
  const imageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '2300px auto',
    backgroundPosition: '50% 250px',
    backgroundRepeat: 'no-repeat',
  };
  
  const imageExemple = {
    backgroundImage: `url(${exemple})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
  }

  const base_project = [
    {
      name: "Доделать frontend",
      discription: "Нужно сделать это - это и это самое то, что нужно для этого проектаfffffffffffffffffffffffffffffffffffffffff",
    },
    {
      name: "Проект магазина на react js",
      discription: "Нужно сделать это - это и это самое то, что нужно для этого проекта",
    },
    {
      name: "Bootstrap-5",
      discription: "Нужно сделать это - это и это самое то, что нужно для этого проекта",
    },
    {
      name: "Подключить RUST JS",
      discription: "Нужно сделать это - это и это самое то, что нужно для этого проекта",
    },
  ]

  
  let itemP = '';



    base_project.forEach(function (arr){
    
      itemP += `
              
      `;
    })
    
  return (
    <div style={imageStyle} className={` d-flex align-content-center justify-content-center flex-column ${classes.container}`}>
      <div className={classes.title}>
        Портфолио
      </div>
      <div className={classes.primary_wrapper}>
        <div className={`row ${classes.primary_inside}`}>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              <div style={imageExemple} className={classes.image_item}>
                <div className={classes.black}></div>
              </div>
              <div className={classes.button_item}>
                Смотреть
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
          <div className={`col-12 col-md-6 col-xl-3 ${classes.item}`}>
            <div className={` ${classes.item_wrapper}`}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
