import classes from "./loginMobile.module.css";
const LoginMobile = () => {
    return (
        <div className={`${classes.mobileloginMobile}`}>
            <div className={classes.mobileblock1}>
            <h2 className={classes.mobileform_h2}>AreaWD</h2>
                <div className={`${classes.mobilecontainer_form}`}>
                    <div className={classes.mobileimage}>
                        <div className={classes.mobileform_box}>
                            <div className={classes.mobileform}>
                                
                                <div className={classes.mobileinput_box}>
                                    <input type="text" required />
                                    <label for="">Почта</label>
                                </div>
                                <div className={`${classes.mobileinput_box} ${classes.mobileinput_down}`}>
                                    <input type="text" required />
                                    <label for="">Пароль</label>
                                </div>
                                <div className={classes.mobileform_button}>
                                    <a href="#">Вход</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={classes.mobilebutton}>
                    <div className={classes.mobilebutton_left}>
                    Регистрация

                    </div>
                    <div className={classes.mobilebutton_right}>
                    Забыли пароль?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMobile;