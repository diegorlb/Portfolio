import axios from 'axios'

export type InfoType = {
  name: string,
  work: string,
  email: string,
  number: string,
}

export const useAPI = () => {
  return {
    sendInfoData: async (info: InfoType) => {
      await axios.post('/api/contact', info)
    }
  }
}