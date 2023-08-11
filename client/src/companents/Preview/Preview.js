import style from "./style.module.css";

function Preview() {
    return (
        <div>
            <div className={style.preview}>
                <div className={style.previewInfo}>
                    <p className={style.previewAbout}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textInfo}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.previewBtn}>About platform</div>
                    <div className={style.previewStudentsNumber}>
                        <div className={style.logImg}></div>
                        <div className={style.numberPlus}></div>
                    </div>
                    <div className={style.previewStudents}>Students</div>
                </div>
                <div className={style.previewImg}></div>
            </div>

            <div className={style.bcg}>
                <div className={style.learn}>
                    <div className={style.img}></div>
                    <div className={style.info}>
                        <h1>Learn a language in a playful way</h1>
                        <p>Make learning programming languages more fun with mini-games</p>
                        <div className={style.icons}>
                            <div className={style.icons1}></div>
                            <div className={style.icons2}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={style.knowledge}>
                <div className={style.info}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div className={style.btnKnow}>Textbook →</div>
                </div>
                <div className={style.img}></div>
            </div>

            <div className={style.bcg}>
                <div className={style.progress}>
                    <div className={style.img}></div>
                    <div className={style.info}>
                        <h1>Watch your progress every day</h1>
                        <p>Save statistics on your achievements and mistakes</p>
                        <div className={style.btnProg}>Statistics →</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Preview;