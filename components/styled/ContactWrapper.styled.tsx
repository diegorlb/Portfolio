import styled from 'styled-components'

import { Window, ProgramContainer } from './Global.styled'
import { theme } from 'styled-tools'

export const ContactWindow = styled(Window)`
  max-width: 650px;
`

export const ContactContainer = styled(ProgramContainer)`
  padding: 8px;
`

export const TitleContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border-left: 2px solid #535353;
  padding-left: 4px;

  @media (min-width: 640px) {
    margin-bottom: 35px;
  }
`

export const TitleText = styled.p`
  margin: 0;
  color: #e9e9e9;
  font-size: 34px;
  font-family: ${theme('fonts.type.Grotesk')};
  font-weight: ${theme('fonts.weight.bold')};

  @media (min-width: 640px) {
    font-size: 40px;
  }
`

export const ExtraText = styled.p`
  display: none;
  margin: 0;
  color: #e9e9e9;
  font-size: 18px;
  font-family: ${theme('fonts.type.Grotesk')};
  font-weight: ${theme('fonts.weight.regular')};

  @media (min-width: 640px) {
    display: block;
  }
`

export const FormWrapper = styled.form`
  width: 100%;
  height: auto;
  display: inline-block;
`

export const InputsContainer = styled.div`
  border-left: 2px solid #535353;
  padding-left: 4px;
`

export const Text = styled.p`
  color: #e9e9e9;
  display: inline;
  height: 33px;
  line-height: 33px;
  margin: 0;
  font-size: 20px;
  font-family: ${theme('fonts.type.SourcePro')};
  font-weight: ${theme('fonts.weight.bold')};
`

export const FieldContainer = styled.input`
  margin: 0;
  padding: 0 4px;
  color: #e9e9e9;
  text-transform: uppercase;
  font-size: 15px;
  font-family: ${theme('fonts.type.SourcePro')};
  font-weight: ${theme('fonts.weight.bold')};
  border: none;
  border-bottom: 1px solid #535353;
  background-color: transparent;

  &::placeholder {
    color: #7e7e7e;
  }

  &:focus {
    background-color: #383838;
    border-bottom: 1px solid transparent;
    outline: none;

    &::placeholder {
      color: #e9e9e9;
    }
  }
`

export const SubmitButton = styled.button`
  background-color: transparent;
  display: block;
  margin: 0;
  margin-top: 28px;
  border: none;
  color: #e9e9e9;
  font-family: ${theme('fonts.type.Grotesk')};
  font-weight: ${theme('fonts.weight.bold')};
  outline: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:before {
    content: '―';
    margin-right: 8px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`