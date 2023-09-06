import Options from '../Options/Options';
import style from './style.module.css';

function Footer() {
    const array1 = ['Home', 'Textbook', 'Statistics', 'Sprint'];
    const array2 = ['Alex', 'Gabriel', 'Marcus'];    

    return (
        <div className={style.wrapper}>
            <div className={style.navigation}>
                <div className={style.content}>
                    <Options array = {array1} />
                </div>
                <div className={style.name}>
                    <Options array = {array2} />
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