import express from 'express';
import { getAllCourse, getCourseId, createCourse, upDataCourse, deleteCourseById } from '../service/course.service';

const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllCourse();
    res.send(data);
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getCourseId(id);
    res.send(data);
})

route.post('/', async (req, res) => {
    const { course } = req.body;
    const data = await createCourse(course);
    res.send(data);
})

route.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { course } = req.body;
    const data = await upDataCourse(id, course);
    res.send(data);
})

route.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await deleteCourseById(id);
    res.send(data);
})

export default route;