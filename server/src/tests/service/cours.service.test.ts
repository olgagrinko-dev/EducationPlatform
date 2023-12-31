import { getAllCourse, getCourseId, createCourse, upDataCourse, deleteCourseById } from '../../service/course.service';
import * as repository from '../../repository/course.repository';

describe('getAllCourse:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllCourseDB');
        repoFunction.mockResolvedValue([
            { id: '1', course: 'js' },
            { id: '2', course: 'ts' }
        ]); //предполагаемый возвращаемый результат
        const result = await getAllCourse();
        expect(repoFunction).toHaveBeenCalled(); //проверка что ф-я вызывалась 
        expect(result[0].id).toBe('1');
        expect(result[1].id).toBe('2');
        expect(result[0].course).toBe('js');
        expect(result[1].course).toBe('ts');
        expect(result).toEqual([{ id: '1', course: 'js' }, { id: '2', course: 'ts' }]);
        expect(result).toHaveLength(2);
        expect(result.length).toBe(2);
    })
    test(('2'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await getAllCourse();
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('БД не заполнена');
        }
    })
})

describe('getCourseId:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getCourseIdDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'js' }]);
        const result = await getCourseId('1');
        expect(repoFunction).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    })
    test(('2'), async () => {
        const repoFunction = jest.spyOn(repository, 'getCourseIdDB');
        repoFunction.mockResolvedValue([]);
        try {
            await getCourseId('20');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('Такого id нет');
        }
    })
})

describe('createCourse:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'createCourseDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'js' }]);
        const result = await createCourse('js');
        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('js');
        expect(result).toHaveLength(1);
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    })
    test(('2'), async () => {
        const repoFunction = jest.spyOn(repository, 'createCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await createCourse('php');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('Данные не сохранены');
        }
    })
})

describe('upDataCourse:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'upDataCourseDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'js' }]);
        const result = await upDataCourse('1', 'js');
        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    })
    test(('2'), async () => {
        const repoFunction = jest.spyOn(repository, 'upDataCourseDB');
        repoFunction.mockResolvedValue([]);
        try {
            await upDataCourse('123', '345');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('Такого id нет');
        }
    })
})

describe('deleteCourseById:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
        repoFunction.mockResolvedValue([{ id: '1', course: 'js' }]);
        const result = await deleteCourseById('1');
        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    })
    test(('2'), async () => {
        const repoFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
        repoFunction.mockResolvedValue([]);
        try {
            await deleteCourseById('10');
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled();
            expect(error.message).toBe('Такого id нет');
        }
    })
})