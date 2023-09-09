import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from "./style1.module.css";
import Inputs from "../../companents/Inputs/inputs";
import { useState } from "react";
import axios from 'axios';

function RegPage() {
    const [input, setInput] = useState({});
    const array = ["name", "surname", "email", "pwd"];

    async function isShow() {
        const result = await axios.post('http://localhost:3001/api/reg', input);
        console.log(result.data);
    }

    return (
        <div>
            <Header />

            <div className={style.regPage}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <Inputs array={array} setInp={setInput} input={input} />
                    <div className={style.btn} onClick={isShow}>Sign Up</div>
                </div>
                <div className={style.regPageImg}></div>
            </div>

            <Footer />
        </div>
    )
}

export default RegPage;