export interface AcademicProgram {
  _id: string
  _type: 'academics'
  name: string
  description: string
  years: number
  attachments?: Array<{
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
    title?: string
  }>
  order?: number
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface AcademicProgramQueryResult {
  _id: string
  name: string
  description: string
  years: number
  attachments?: Array<{
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
    title?: string
  }>
  order?: number
}
