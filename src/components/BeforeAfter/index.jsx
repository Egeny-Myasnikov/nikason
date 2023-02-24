import { useEffect, useRef, useState } from 'react'
import s from './BeforeAfter.module.scss'
const BeforeAfter = ({ size, imgBefore, imgBeforeAlt, imgAfter, imgAfterAlt }) => {
    const sliderRef = useRef()
    const imgBeforeRef = useRef()
    const beforeRef = useRef()
    const changeRef = useRef()
    const [isActive, setIsActive] = useState(false)

    const pauseEvents = (e) => {
        e.stopPropagation()
        e.preventDefault()
        return false;
    };

    const active = (e, touch) => {
        setIsActive(true)
        if (!(touch === 'touch')) {
            pauseEvents(e)
        }
    }

    const noActive = (e, touch) => {
        setIsActive(false)
        if (!(touch === 'touch')) {
            pauseEvents(e)
        }
    }

    const beforeAfterSlider = (x) => {
        let shift = Math.max(0, Math.min(x, sliderRef.current.offsetWidth));
        beforeRef.current.style.width = `${shift}px`;
        changeRef.current.style.left = `${shift}px`;
    };

    const sliderMouseMove = (e) => {
        if (!isActive) {
            return;
        }
        let x = e.pageX;
        x -= sliderRef.current.getBoundingClientRect().left;
        beforeAfterSlider(x);
        pauseEvents(e);
    }
    const sliderTouchMove = (e) => {
        if (!isActive) {
            return;
        }
        let x
        for (let i = 0; i < e.changedTouches.length; i++) {
            x = e.changedTouches[i].pageX;
        }

        x -= sliderRef.current.getBoundingClientRect().left;
        beforeAfterSlider(x);
    }

    useEffect(() => {
        let width = sliderRef.current.offsetWidth
        imgBeforeRef.current.style.width = `${width}px`
        return () => {

        };
    }, []);


    return (
        <div style={{ '--size': size }} className={`${s.container}`}>
            <div
                ref={sliderRef}
                onMouseDown={active}
                onMouseUp={noActive}
                onMouseLeave={() => setIsActive(false)}
                onMouseMove={sliderMouseMove}
                onTouchStart={(e) => active(e, 'touch')}
                onTouchEnd={(e) => noActive(e, 'touch')}
                onTouchCancel={() => setIsActive(false)}
                onTouchMove={sliderTouchMove}
                className={`${s.slider}`}
            >
                <div ref={beforeRef} className={`${s.before}`}>
                    <img ref={imgBeforeRef} src={imgBefore} alt={imgBeforeAlt} />
                </div>
                <div className={`${s.after}`}>
                    <img src={imgAfter} alt={imgAfterAlt} />
                </div>
                <div ref={changeRef} className={`${s.change}`}>
                    <span
                        className={`${s.circle}`}
                    ></span>
                </div>

            </div>
        </div>
    );
};

export default BeforeAfter;