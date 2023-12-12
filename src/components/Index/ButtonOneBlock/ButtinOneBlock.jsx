import classes from './button.module.css'

const ButtonOneBlock = () =>{
    return(
        <div className={classes.buttonOneBlock}>
            <div className="container">
                <div className={classes.buttonOneBlockInner}>
                    <div className={classes.btn}>
                        Услуги
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default ButtonOneBlock;