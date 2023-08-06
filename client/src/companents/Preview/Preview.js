import style from "./style.module.css";

function Preview() {
    return (
        <div className={style.preview}>
            <div className={style.previewInfo}>
                <p>E-COURSE PLATFORM</p>
                <h1>Learning and
                    teaching online,
                    made easy.</h1>

            </div>
            <div className={style.previewImg}></div>
        </div>
    )
}

export default Preview;