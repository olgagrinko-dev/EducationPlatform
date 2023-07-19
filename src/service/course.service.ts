import { getAllCourseDB, getCourseIdDB, createCourseDB, upDataCourseDB, deleteCourseByIdDB } from '../repository/course.repository';
import { iCourse } from '../interfaces/index.Course';

async function getAllCourse(): Promise<iCourse[]> {
    const data = await getAllCourseDB();
    if (data.length == 0) throw new Error('БД не заполнена');
    return data;
}

async function getCourseId(id: string): Promise<iCourse[]> {
    const data = await getCourseIdDB(id);
    if (data.length == 0) throw new Error('Такого id нет');
    return data;
}

async function createCourse(course: string): Promise<iCourse[]> {
    const data = await createCourseDB(course);
    if (data.length == 0) throw new Error('Данные не сохранены');
    return data;
}

async function upDataCourse(id: string, course: string): Promise<iCourse[]> {
    const data = await upDataCourseDB(id, course);
    if (data.length == 0) throw new Error('Такого id нет');
    return data;
}

async function deleteCourseById(id: string): Promise<iCourse[]> {
    const data = await deleteCourseByIdDB(id);
    if (data.length == 0) throw new Error('Такого id нет');
    return data;
}

export { getAllCourse, getCourseId, createCourse, upDataCourse, deleteCourseById };