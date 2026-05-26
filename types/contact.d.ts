export interface ContactNumber {
  label: string
  number: string
}

export interface Contact {
  _id: string
  _type: 'contact'
  email: string
  contactNumbers: ContactNumber[]
  googleMapsLink: string
  address?: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface ContactQueryResult {
  _id: string
  email: string
  contactNumbers: ContactNumber[]
  googleMapsLink: string
  address?: string
}
