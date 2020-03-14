import { IResolvers} from "graphql-tools"
import { storage } from "../data/data.store"
import errorHandler from "../handlers/error"

const query: IResolvers = {
  Query: {
    getStudents(): any {
      return storage.students
    },
    getStudent(__:void, { id }): any{
      const student = storage.students.filter(student =>  student.id === id)[0]
      if(student === undefined) {
        errorHandler(`Student with ID ${id} not found`)
      }
      return student
    },
    getCourses(): any {
      return storage.courses
    },
    getCourse(__:void, { id }): any{
      const course = storage.courses.filter(course =>  course.id === id)[0]
      if(course === undefined) {
        errorHandler(`Course with ID ${id} not found`)
      }
      return course
    }
  }
}

export default query