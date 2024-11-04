import { Contact, UserDocument } from './repository/user.schema'


export class UserResponse {
  readonly id: string
  readonly mail: string
  readonly name: string

  constructor(user: UserDocument) {
    this.id = user.id
    this.mail = user.mail
    this.name = user.name
  }
}

class ContactResponse {
  readonly mail: string
  readonly phone: string
  readonly social: string

  constructor(contact: Contact) {
    this.mail = contact.mail
    this.phone = contact.phone
    this.social = contact.social
  }
}

