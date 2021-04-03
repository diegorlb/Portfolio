import { NextApiRequest, NextApiResponse } from 'next'

import ConnectDB from '../../utils/ConnectDB'
import ContactModel, { IContact } from '../../models/ContactModel'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') return res.status(404).send({
    error: 'This endpoint is only available through POST requests.'
  })

  if (!req.body) return res.status(500).send({
    error: 'Empty request body'
  })

  const { name, work, email, number } = req.body

  if (!name || !work || !email) return res.status(500).send({
    error: 'Invalid request body.'
  })

  await ConnectDB()

  try {
    const newContact: IContact = await ContactModel.create({
      name,
      work,
      email,
      number,
      seen: false,
    })

    return res.status(200).json({
      status: 'Successfully added onto the database.',
      data: newContact
    })
  } catch (e) {
    return res.status(500).json({
      error: 'Unexpected error.'
    })
  }
}