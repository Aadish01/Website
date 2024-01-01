import React from "react";
import classes from './add.module.css'

const delay = 6000;

const Add = ({adds}) => {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === adds.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index,adds.length]);

    return(
        <div className={classes.container}>
        <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {adds.map((link, index) => (
          <div
            className={classes.slide}
            key={index}
          >
            <img src={'/adds/'+link} alt='img' width="100% " height="100%"></img>
          </div>
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {adds.map((_, idx) => (
          <div
            key={idx}
            className={index === idx ? classes.slideshowDotactive : classes.slideshowDot}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
        </div>
        </div>
    )
}
export default Add;