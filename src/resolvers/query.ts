import { IResolvers} from "graphql-tools"
import { storage } from "../data/data.store"

const query: IResolvers = {
  Query: {
    getStudents(): any {
      return storage.students
    }
  }
}

export default query