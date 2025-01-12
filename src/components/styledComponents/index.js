import {styled} from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `

  export const FormContainer = styled.form`
  padding: 20px;
   border: solid 1px;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 300px;
   margin-top: 50px;
   `

   export const FormHeading = styled.h1`
font-family: "Roboto";
font-size: 25px;
font-weight: bold;
color: #000000;
`

export const FormLabelText = styled.label`
font-family: "Roboto";
font-size: 15px;
font-weight: 500;
color: #27064e;
margin-bottom: 5px;
`

export const FormInputBox = styled.input`
width: 100%;
height: 30px;
border: solid 1px #27064e;
border-radius: 3px;
outline: none;
padding-left: 5px;
`
export const FormSubmitButton = styled.button`
width: 80px;
height: 30px;
border: solid 1px #364ad0;
border-radius: 2px;
font-family: "Roboto";
font-size: 15px;
font-weight: 500;
margin-top: auto;
color: #364ad0;
`