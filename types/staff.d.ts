export interface Staff {
  _id: string
  _type: 'staff'
  name: string
  designation: string
  department: string
  contactNumber: string
  email: string
  order?: number
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface StaffQueryResult {
  _id: string
  name: string
  designation: string
  department: string
  contactNumber: string
  email: string
  order?: number
}
