import { Request, Response } from 'express'
import { studentServices } from './student.service'
import studentValidationSchema from './student.validation'

const createStudetnt = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    const zodparseData = studentValidationSchema.parse(studentData)
    const result = await studentServices.createStudentIntoDb(zodparseData)
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    })
  }
}
const getStudentsFromDb = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromDb()
    res.status(200).json({
      success: true,
      message: 'Student retrive successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

const getAStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await studentServices.getAStudent(id)
    res.status(200).json({
      success: true,
      message: 'Single student retrive successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

const deleteAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await studentServices.deleteAStudent(id)
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

export const studentController = {
  createStudetnt,
  getStudentsFromDb,
  getAStudent,
  deleteAStudent,
}
