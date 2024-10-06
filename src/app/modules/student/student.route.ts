import express from 'express'
import { studentController } from './student.controller'

const router = express.Router()

router.post('/create-student', studentController.createStudetnt)
router.get('/', studentController.getStudentsFromDb)
router.get('/:id', studentController.getAStudent)

export const StudentRoutes = router
