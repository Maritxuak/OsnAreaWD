import classes from './PanelONasOneBlock.module.css'
import reactImg from '../../../image/react_original_logo_icon_146374 1.svg'
import laravelImg from '../../../image/Laravel.svg'
import pythonImg from '../../../image/Python.svg'
import NodeImg from '../../../image/Node.svg'
const PanelONasOneBlock = () =>{
    return(
        <div className={classes.PanelONasOneBlock}>
            <div className="container">
                <div className={classes.buttonOneBlockInner}>
                    <div className={classes.btn}>
                        <div className={classes.btn_img}>
                            <img src={reactImg} alt="" />
                        </div>
                        <div className={classes.btn_text}>
                            <div className={classes.btn_text_h1_react}>
                                React:
                            </div>
                            <div className={classes.btn_text_opis}>
                                JavaScript
                            </div>
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <div className={classes.btn_img}>
                            <img src={laravelImg} alt="" />
                        </div>
                        <div className={classes.btn_text}>
                            <div className={classes.btn_text_h1_laravel}>
                                Laravel:
                            </div>
                            <div className={classes.btn_text_opis}>
                                PHP
                            </div>
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <div className={classes.btn_img}>
                            <img src={pythonImg} alt="" />
                        </div>
                        <div className={classes.btn_text}>
                            <div className={classes.btn_text_h1_Bots}>
                                Bots:
                            </div>
                            <div className={classes.btn_text_opis_Python}>
                                Python
                            </div>
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <div className={classes.btn_img}>
                            <img src={NodeImg} alt="" />
                        </div>
                        <div className={classes.btn_text}>
                            <div className={classes.btn_text_h1_Node}>
                                any:
                            </div>
                            <div className={classes.btn_text_opis_Node}>
                                Node.js
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default PanelONasOneBlock;