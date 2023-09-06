import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from "./style1.module.css";
import Inputs from "../../companents/Inputs/inputs";

function RegPage() {
    const array = ["name", "surname", "e-mail", "pwd"];    

    return (
        <div>
            <Header />

            <div className={style.regPage}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <Inputs array = {array} />
                    <div className={style.btn}>Sign Up</div>
                </div>
                <div className={style.regPageImg}></div>
            </div>

            <Footer />
        </div>
    )
}

export default RegPage;