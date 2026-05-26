export interface About {
  _id: string
  _type: 'about'
  title: string
  introduction: any[] // Sanity rich text array
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface AboutQueryResult {
  _id: string
  title: string
  introduction: any[] // Sanity rich text array
}
