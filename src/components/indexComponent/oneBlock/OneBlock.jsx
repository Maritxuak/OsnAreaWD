import classes from "./oneBlock.module.css";


const OneBlock = () => {
    return (
        <div className={classes.oneblock}>
            <div className={classes.oneblock_left}>
                <div className={classes.oneblock_left_zag}>

                </div>
                <div className={classes.oneblock_left_opis}>

                </div>
                <div className={classes.oneblock_left_button}>
                    <div className={classes.oneblock_left_button_left}>

                    </div>
                    <div className={classes.oneblock_left_button_right}>

                    </div>
                </div>
            </div>
            <div className={classes.oneblock_right}>

            </div>
        </div>
    )
}

export default OneBlock;