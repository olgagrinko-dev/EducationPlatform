import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from "./style.module.css";
import Inputs from "../../companents/Inputs/inputs";

function AuthPage() {
    const array = ["e-mail", "pwd"];

    return (
        <div>
            <Header />

            <div className={style.authPage}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <Inputs array={array} />
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.authPageImg}></div>
            </div>

            <Footer />
        </div>
    )
}

export default AuthPage;