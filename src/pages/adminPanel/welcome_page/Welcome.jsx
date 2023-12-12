import classes from "./welcome.module.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import Header from "../../../components/Header/header";
import Back from "../../../components/Back/Back";
import Projects from "../projects/Projects"
const WelcomePage = () =>{

  const svgT1 = `<svg width="242" height="244" viewBox="0 0 242 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M129.013 227.676C95.0727 258.627 40.3625 241.52 30.1003 196.747L2.07144 74.4608C-8.27607 29.316 34.2565 -10.0322 78.4613 3.79019L199.19 41.541C243.395 55.3634 255.935 111.932 221.713 143.14L129.013 227.676Z" fill="#0A2640" fill-opacity="0.49"/>
  </svg>`;

  const svgT2 = `<svg width="317" height="326" viewBox="0 0 317 326" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M236.83 3.53742C279.84 -11.732 323.474 24.7052 316.119 69.7489L282.51 275.578C275.023 321.434 220.5 341.745 184.837 311.964L21.9082 175.908C-13.7555 146.127 -3.4931 88.8566 40.2925 73.3118L236.83 3.53742Z" fill="#0A2640" fill-opacity="0.33"/>
  </svg>`;

  const svgT3 = `<svg width="336" height="358" viewBox="0 0 336 358" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M308.106 143.667C350.603 175.682 343.259 241.529 294.753 263.394L99.4341 351.437C49.9969 373.722 -4.91149 333.755 1.0993 279.862L25.2966 62.9059C31.3074 9.01233 93.672 -17.8744 136.985 14.7547L308.106 143.667Z" fill="#0A2640" fill-opacity="0.16"/>
  </svg>
  `;

  const svgT4 = `<svg width="421" height="392" viewBox="0 0 421 392" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M341.953 4.14478C402.399 4.96849 440.127 69.9586 410.869 122.858L285.062 350.313C254.98 404.702 177.075 405.51 145.87 351.757L11.7717 120.76C-19.4331 67.0067 19.9002 -0.243896 82.0487 0.603012L341.953 4.14478Z" fill="#0A2640" fill-opacity="0.06"/>
  </svg>
  `;

  const svgL1 = `<svg width="160" height="161" viewBox="0 0 160 161" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M114.392 1.71547C140.467 -6.41335 165.39 17.1254 158.763 43.622L136.144 134.053C129.651 160.012 97.6122 169.379 78.1582 151.005L11.7843 88.3178C-7.66972 69.9442 -0.146857 37.4226 25.3996 29.4585L114.392 1.71547Z" fill="#0A2640"/>
  </svg>`

  const svgL2 = `<svg width="180" height="190" viewBox="0 0 180 190" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.8" d="M109.896 6.90686C134.704 -10.0015 168.513 6.28635 170.752 36.225L179.062 147.338C181.301 177.277 150.291 198.412 123.244 185.382L22.8624 137.022C-4.18472 123.991 -6.98346 86.5683 17.8246 69.6599L109.896 6.90686Z" fill="#0A2640"/>
  </svg>`

  const svgL3 = `<svg width="170" height="156" viewBox="0 0 170 156" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.7" d="M57.2276 16.0889C69.5444 -5.24446 100.336 -5.24446 112.653 16.0889L165.481 107.589C177.798 128.922 162.402 155.589 137.768 155.589H32.1129C7.47928 155.589 -7.91674 128.922 4.40007 107.589L57.2276 16.0889Z" fill="#0A2640"/>
  </svg>`

  const users = [
    { id: 1, name: "User 1", rank: "Rank 1", state: true },
    { id: 2, name: "User 2", rank: "Rank 2", state: false },
    { id: 3, name: "User 3", rank: "Rank 3", state: true },
    { id: 4, name: "User 4", rank: "Rank 4", state: false },
    { id: 5, name: "User 5", rank: "Rank 5", state: false },
  ];
  
  let string = ``;
  let stringOnline = ``;

  const two = {
      padding: "0 0 0 20px",
      color: "#01FF1A",
  }

  users.forEach(function(arr){
     stringOnline += `
              <div style="margin: 30px 0;" className=${classes.online_member}>
                <div className=${classes.more_m}>[${arr.name},${arr.rank}]</div>
                <div style="padding-left: 30px; color: #01FF1A;" className=${classes.onl_m}>${arr.state ? '[Онлайн]' : ''}</div>
              </div>
     `
     string += `
              <div style="margin: 30px 0;" className=${classes.online_member}>
                <div className=${classes.more_m}>[${arr.name},${arr.rank}]</div>
              </div>
     `
  });
  return(
    <div className={classes.container}>
      <div className={classes.top_wrapper}>
          <div className={classes.userProf}>
            <div className={classes.welcome_name}>
              Добро пожаловать, [Имя]!
            </div>
            <div className={`d-flex align-items-center ${classes.buttons}`}>
              <div className={classes.take_project}>
                <Link to="/welcome/projects" alt="">
                  Взять проект
                </Link>
              </div>
              <div className={classes.see_plan}>
                Смотреть план
              </div>
            </div>
          </div>
          <div className={classes.logo_main}>
            <div className={classes.containers}>
              {/* <div className="circle_1"></div>
              <div className="circle_2"></div>
              <div className="circle_3"></div> */}
              <div className={classes.logo_animate}>
                <div className={classes.main}><div className={classes.triangle_0} dangerouslySetInnerHTML={{__html: svgT1}}></div>
                  <div className={classes.triangle_1} dangerouslySetInnerHTML={{__html: svgT1}}></div>
                  <div className={classes.triangle_2} dangerouslySetInnerHTML={{__html: svgT2}}></div>
                  <div className={classes.triangle_3} dangerouslySetInnerHTML={{__html: svgT3}}></div>
                  <div className={classes.triangle_4} dangerouslySetInnerHTML={{__html: svgT4}}></div>
                  <div className={classes.triangle_L1} dangerouslySetInnerHTML={{__html: svgL1}}></div>
                  <div className={classes.triangle_L2} dangerouslySetInnerHTML={{__html: svgL2}}></div>
                  <div className={classes.triangle_L3} dangerouslySetInnerHTML={{__html: svgL3}}></div>
                  <div className={classes.text}>
                    <span className={classes.title}>WD</span>
                    <span className={classes.subtitle}>World of Developers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.down_wrapper}>
          <div className={`row ${classes.border}`}>
            <div className={`col-12 col-md-6 col-xl-3 ${classes.online_now}`}>
              <div className={classes.thirst_title}>
                Сейчас в сети:
              </div>
              <div className={classes.online_wrapper} dangerouslySetInnerHTML={{ __html: stringOnline }}>

              </div>
            </div>
            <div className={`col-12 col-md-6 col-xl-3 ${classes.members}`}>
              <div className={classes.second_title}>
                Сотрудники:
              </div>
              <div className={classes.member_wrapper} dangerouslySetInnerHTML={{ __html: string }}>
                
              </div>
            </div>
            <div className={`col-12 col-md-6 col-xl-3 ${classes.results}`}>
              <div className={classes.earned}>
                Заработано за неделю: 
              </div>
              <div className={classes.spent}>
                Потрачено за неделю:
              </div>
              <div className={classes.profit}>
                Прибыль за неделю:
              </div>
            </div>
            <div className={`col-12 col-md-6 col-xl-3 ${classes.empty}`}>
              
            </div>
          </div>
          <div className={classes.circle_11}></div>
          <div className={classes.circle_22}></div>
          <div className={classes.circle_33}></div>
        </div>
    </div>
  );
}


export default WelcomePage;
