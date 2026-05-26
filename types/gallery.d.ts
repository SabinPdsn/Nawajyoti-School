export interface GalleryItem {
  _id: string
  _type: 'gallery'
  name: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  description?: string
  order?: number
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface GalleryQueryResult {
  _id: string
  name: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  description?: string
  order?: number
}
