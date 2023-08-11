import style from './style.module.css';

function Footer() {
    return (
        <div className={style.wrapper}>
            
            <div className={style.navigation}>                
                <div className={style.content}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.name}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>

            <div className={style.line}></div>

            <div className={style.navigLink}>                
                <div className={style.linkImg}>
                    <div className={style.imgGit}></div>
                    <div className={style.imgGT}></div>
                    <div className={style.imgYouTube}></div>
                </div>
                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </div>
    )
}

export default Footer;