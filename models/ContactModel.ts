import mongoose, { Document, Schema } from 'mongoose'

export interface IContact extends Document {
  name: string,
  work: string,
  email: string,
  number: string,
  seen: boolean,
}

const ContactSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: false,
  },
  seen: {
    type: Boolean,
    required: true,
  }
})

export default mongoose.models.ContactModel || mongoose.model<IContact>('ContactModel', ContactSchema)