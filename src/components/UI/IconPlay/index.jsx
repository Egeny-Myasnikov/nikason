import { useState } from 'react';
import s from './IconPlay.module.scss';
const IconPlay = () => {
    const [state, setState] = useState('');

    const togglePlayPause = () => {
        state !== '' ? setState('') : setState(s.pause)
    }
    return (
        <div onClick={togglePlayPause} className={s.iconPlay + ' ' + state}>
            <span className={s.play}></span>
            <span className={s.play}></span>
            <span className={s.play}></span>
        </div>
    );
};

export default IconPlay;