export type DownloadCategory = 
  | 'syllabus'
  | 'forms'
  | 'reports'
  | 'workshops'
  | 'books'
  | 'journals'
  | 'guidelines'
  | 'policies'

export interface DownloadItem {
  _id: string
  _type: 'downloads'
  name: string
  description: string
  category: DownloadCategory
  date: string
  file: {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
    title?: string
  }
  order?: number
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface DownloadItemQueryResult {
  _id: string
  name: string
  description: string
  category: DownloadCategory
  date: string
  file: {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
    title?: string
  }
  order?: number
}
