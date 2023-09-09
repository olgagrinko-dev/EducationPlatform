import Header from "../../companents/Header/Header";
import Footer from "../../companents/Footer/Footer";
import style from "./style.module.css";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

function StudentPage() {
    const array = [{ img: 'img_1', header: 'JavaScript', text: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.' },
    { img: 'img_2', header: 'C#', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'Java', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'PHP', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'TypeScript', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'C++', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'R', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'C', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScripts key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_3', header: 'Python', text: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.' }];

    const result = array.map((elem) => <div className={style.wrapper}>
        <div className={style[elem.img]}></div>
        <div className={style.info}>
            <h1 className={style.item}>{elem.header}</h1>
            <p className={style.text}>{elem.text}</p>
        </div>
    </div>)

    const [list, setlist] = useState(1); //стейт где хранится вся наша информация
    const [countPage] = useState(3); //количество элементов которые будут показываться на каждой страничке

    const lastIndex = list * countPage; // индекс последней страницы
    const firstIndex = lastIndex - countPage; // индекс первой страницы
    const currentIndex = result.slice(firstIndex, lastIndex); // индекс текущей страницы

    return (
        <div>
            <Header />
            <div className={style.header}>
                <div className={style.img}></div>
                <h1>Courses</h1>
            </div>
            <div className={style.main}>
                {currentIndex}
            </div>
            <Pagination count={array.length / countPage} list={list} onChange={(_, num) => setlist(num)} className={style.pagination} />
            <Footer />
        </div>
    )
}

export default StudentPage;