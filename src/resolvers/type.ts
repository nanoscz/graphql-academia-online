import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { storage } from '../data/data.store';

const type: IResolvers = {
  Student: {
    courses: parent => {
      const courses: Array<any> = [];
      parent.courses.map((course: string) => {
        courses.push(_.filter(storage.courses, ['id', course])[0]);
      });
      return courses;
    }
  },
  Course: {
    studens: parent => {
      const students: Array<any> = [];
      const cursoId = parent.id;
      storage.students.map((student: any) => {
        if (student.courses.filter((id: any) => id === cursoId) > 0) {
          students.push(student);
        }
      });
      return students;
    },
    path: parent => `http://wwww.udemy.com${parent.path}`
  }
};

export default type;
