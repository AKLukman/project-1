export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Guardian = {
  fatherName: string
  fatherContactNo: string
  fatherOccupation: string
  MotherName: string
  motherContactNo: string
  motherOccupation: string
}

export type LocalGuardian = {
  name: string
  occopation: string
  contactNo: string
  address: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: string

  email: string
  contacNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGurdian: LocalGuardian
  profileImage?: string
  isActive: 'active' | 'blocked'
}
