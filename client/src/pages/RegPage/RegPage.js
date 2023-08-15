import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from "./style1.module.css";

function RegPage() {
    return (
        <div>
            <Header />

            <div className={style.regPage}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <div><input type="text" placeholder="name"/></div>
                    <div><input type="text" placeholder="surname" /></div>
                    <div><input type="text" placeholder="e-mail" /></div>
                    <div><input type="text" placeholder="pwd" /></div>
                    <div className={style.btn}>Sign Up</div>
                </div>
                <div className={style.regPageImg}></div>
            </div>

            <Footer />
        </div>
    )
}

export default RegPage;