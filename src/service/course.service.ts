import { getAllCourseDB, getCourseIdDB, createCourseDB, upDataCourseDB, deleteCourseByIdDB } from '../repository/course.repository';
import { iCourse } from '../interfaces/index.Course';

async function getAllCourse(): Promise <iCourse[]> {
    const data = await getAllCourseDB();
    return data;
}

async function getCourseId(id: string): Promise <iCourse[]> {
    const data = await getCourseIdDB(id);
    return data;
}

async function createCourse(course: string): Promise <iCourse[]> {
    const data = await createCourseDB(course);
    return data;
}

async function upDataCourse(id: string, course: string): Promise <iCourse[]> {
    const data = await upDataCourseDB(id, course);
    return data;
}

async function deleteCourseById(id: string): Promise <iCourse[]> {
    const data = await deleteCourseByIdDB(id);
    return data;
}

export { getAllCourse, getCourseId, createCourse, upDataCourse, deleteCourseById };