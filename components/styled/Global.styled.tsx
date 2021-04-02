import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Window = styled(motion.div)`
  width: 80%;
  height: 450px;
`

export const ProgramContainer = styled.div`
  background-color: #1D1F21;
  width: 100%;
  height: calc(100% - 24px);
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`