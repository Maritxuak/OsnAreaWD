import React, { useEffect, useState } from 'react';
import classes from './oneBlockText.module.css';

const OneBlockText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const targetText = '${реальность}';

    let index = 0;
    const intervalId = setInterval(() => {
      setText(targetText.slice(0, index));
      index++;

      if (index > targetText.length) {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (  
    <div className="container">
        <div className={classes.oneBlockText}>
            <span className={classes.OneBlockTextInner}>
                Давай воплотим твои планы в    
            </span>
            <span className={classes.OneBlockTextInnerOne}>
                &#123;
            </span>
            <span className={classes.OneBlockTextInnerTwo}>
                &#96;
            </span>
            <span className={classes.oneBlockTextOsn}>
                {text}
            </span>
            <span className={classes.cursor}>
               
            </span>
            <span className={classes.OneBlockTextInnerTwo}>
                &#96;
            </span>
            <span className={classes.OneBlockTextInnerOne}>
                &#125;
            </span>
        </div>
    </div>
    );
};

export default OneBlockText;