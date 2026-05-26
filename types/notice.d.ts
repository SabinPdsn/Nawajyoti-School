export type NoticeCategory = 
  | 'general'
  | 'academic'
  | 'examination'
  | 'event'
  | 'holiday'
  | 'sports'
  | 'library'
  | 'transport'
  | 'fee'
  | 'emergency'

export interface NoticeAttachment {
  asset: {
    _ref: string
    _type: string
  }
  description?: string
}

export interface Notice {
  _id: string
  _type: 'notice'
  title: string
  description: string
  attachment?: NoticeAttachment
  pinned: boolean
  datePosted: string
  category: NoticeCategory
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface NoticeQueryResult {
  _id: string
  title: string
  description: string
  attachment?: NoticeAttachment
  pinned: boolean
  datePosted: string
  category: NoticeCategory
}
