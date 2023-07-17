import { getAllCourseDB, getCourseIdDB, createCourseDB } from '../repository/course.repository';

async function getAllCourse() {
    const data = await getAllCourseDB();
    return data;
}

async function getCourseId(id) {
    const data = await getCourseIdDB(id);
    return data;
}

async function createCourse(course) {
    const data = await createCourseDB (course);
    return data;
}


export { getAllCourse, getCourseId, createCourse };