import { TStudent } from './student.interface'
import { Student } from './student.model'

const createStudentIntoDb = async (studentData: TStudent) => {
  if (await Student.isUserExist(studentData.id)) {
    throw new Error('User Already exists!')
  }
  const result = await Student.create(studentData)

  return result
}

const getStudentsFromDb = async () => {
  const result = await Student.find()
  return result
}
const getAStudent = async (id: string) => {
  // const result = await Student.findOne({ id })
  const result = await Student.aggregate([{ $match: { id: id } }])
  return result
}
const deleteAStudent = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true })
  return result
}

export const studentServices = {
  createStudentIntoDb,
  getStudentsFromDb,
  getAStudent,
  deleteAStudent,
}
