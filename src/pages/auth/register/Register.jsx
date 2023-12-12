import BackFonLoginRegister from "../../../components/backFonLoginRegister/BackFonLoginRegister";
import classes from "./register.module.css";
import ds from "./discord.svg";
import RegisterMobile from "../registerMobile/RegisterMobile";
const Register = () => {
    return (
        <div className={classes.register}>
            <BackFonLoginRegister />
            <div className="container">
                <div className={classes.block1}>
                    <div className={`${classes.container_form}`}>
                        <div className={classes.image}>
                            <div className={classes.form_box}>
                                <div className={classes.form}>
                                    <h2 className={classes.form_h2}>Регистрация</h2>
                                    <div className={classes.input_box}>
                                        <input type="text" required />
                                        <label for="">Почта</label>
                                    </div>
                                    <div className={`${classes.input_box} ${classes.input_down}`}>
                                        <input type="text" required />
                                        <label for="">Пароль</label>
                                    </div>
                                    <div className={`${classes.input_box} ${classes.input_down}`}>
                                        <input type="text" required />
                                        <label for="">Повтор пароля</label>
                                    </div>
                                    <div className={classes.form_button}>
                                        <a href="#">Зарегестрироваться</a>
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
                            Есть аккаунт? Нажми <a href="/login" className={classes.button_right_text}>здеcь...</a>
                        </div>
                    </div>
                </div>

            </div>
            <RegisterMobile />
        </div>
        
    )
}

export default Register;