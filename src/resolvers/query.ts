import { IResolvers } from 'graphql-tools';
import { storage } from '../data/data.store';
import error from '../handlers/error';

const query: IResolvers = {
  Query: {
    getStudents(): any {
      return storage.studentsJson;
    },
    getStudent(__: void, { id }): any {
      const student = storage.studentsJson.filter(item => item.id === id)[0];
      if (student === undefined) {
        error(`Student with ID ${id} not found`);
      }
      return student;
    },
    getCourses(): any {
      return storage.coursesJson;
    },
    getCourse(__: void, { id }): any {
      const course = storage.coursesJson.filter(item => item.id === id)[0];
      if (course === undefined) {
        error(`Course with ID ${id} not found`);
      }
      return course;
    },
  },
};

export default query;
