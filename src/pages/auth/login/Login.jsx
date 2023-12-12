import BackFonLoginRegister from "../../../components/backFonLoginRegister/BackFonLoginRegister";
import classes from "./login.module.css";
import ds from "./discord.svg";
import LoginMobile from "../loginMobile/LoginMobile";
const Login = () => {
    return (
        <div className={classes.login}>
            <BackFonLoginRegister />
            <div className="container">
                <div className={classes.block1}>
                    <div className={`${classes.container_form}`}>
                        <div className={classes.image}>
                            <div className={classes.form_box}>
                                <div className={classes.form}>
                                    <h2 className={classes.form_h2}>Вход</h2>
                                    <div className={classes.input_box}>
                                        <input type="text" required />
                                        <label for="">Почта</label>
                                    </div>
                                    <div className={`${classes.input_box} ${classes.input_down}`}>
                                        <input type="text" required />
                                        <label for="">Пароль</label>
                                    </div>
                                    <div className={classes.form_vost}><a href="#">Забыли пароль?</a></div>
                                    <div className={classes.form_button}>
                                        <a href="#">Вход</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={classes.button}>
                        <div className={classes.button_left}>
                        Вход через <span className={classes.button_left_text}>Discord</span>
                        <img src={ds} alt="" className={classes.button_left_img} />
                        </div>
                        <div className={classes.button_right}>
                        Нет аккаунта? Нажми <a href="/register" className={classes.button_right_text}>здеcь...</a>
                        </div>
                    </div>
                </div>

            </div>
            <LoginMobile />
        </div>

    )
}

export default Login;