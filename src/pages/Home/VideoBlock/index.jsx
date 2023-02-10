import { useState } from 'react'
// import ReactPlayer from 'react-player'
import s from './VideoBlock.module.scss'
const VideoBlock = () => {
    const [state, setState] = useState(false)

    const log = () => {
        state ? setState(false) : setState(true)

    }
    return (
        <div className="container">
            <h2 className="title">Посмотрите видео о&nbsp;нас</h2>
            <div onClick={log} className={s.videoBlock}>
                <div className={s.video}>

                    {/* <ReactPlayer
                        url='https://www.youtube.com/embed/LXyTZIEQAsI'
                        width="100%"
                        height="100%"
                        config={{
                            youtube: {
                                playerVars: { showinfo: 0 }
                            }
                        }}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default VideoBlock;