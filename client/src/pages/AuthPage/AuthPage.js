import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from "./style.module.css";
import Inputs from "../../companents/Inputs/inputs";
import { useState } from "react";
import axios from 'axios';

function AuthPage() {
    const [input, setInput] = useState({});
    const array = ["email", "pwd"];

    async function authUser() {
        const result = await axios.post('http://localhost:3001/api/auth', input);
        console.log(result.data);
    }

    return (
        <div>
            <Header />

            <div className={style.authPage}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <Inputs array={array} setInp={setInput} input={input} />
                    <div className={style.btn} onClick={authUser}>Login</div>
                </div>
                <div className={style.authPageImg}></div>
            </div>

            <Footer />
        </div>
    )
}

export default AuthPage;