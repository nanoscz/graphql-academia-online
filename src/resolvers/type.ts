import { IResolvers } from 'graphql-tools';
import lodash from 'lodash';
import { database } from '../data/data.store';

const type: IResolvers = {
  Student: {
    courses: (parent) => {
      const courses: any[] = [];
      parent.courses.map((course: string) => {
        courses.push(lodash.filter(database.coursesJson, ['id', course])[0]);
      });
      return courses;
    },
  },
  Course: {
    studens: (parent) => {
      const students: any[] = [];
      const cursoId = parent.id;
      database.studentsJson.map((student: any) => {
        if (student.courses.filter((id: any) => id === cursoId) > 0) {
          students.push(student);
        }
      });
      return students;
    },
    path: parent => `http://wwww.udemy.com${parent.path}`,
  },
};

export default type;
