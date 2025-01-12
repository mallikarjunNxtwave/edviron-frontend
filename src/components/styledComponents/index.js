import styled from 'styled-components'

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

export const HomeContainer = styled.div`
width: 100%;
padding: 30px;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`

export const Heading = styled.h1`
font-family: "Roboto";
font-size: 30px;
font-weight: bold;
color: #000000;
`

export const FilteringContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const SearchBox = styled.div`
width: 300px;
height: 30px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border: solid 1px #000000;
`
export const SearchButton = styled.button`
width: 50px;
height: 25px;
background-color: transparent;
border: none;

`

export const InputBox = styled.input`
margin-left: 5px;
padding-left: 5px;
width: 100%;
border: solid 1px;
outline: none;
`

export const FilterContainer = styled.ul`
border: solid 1px;
padding: 5px;
width: 50%;
display: flex;
margin-left: 30px;
flex-direction: row;
justify-content: space-between;
align-items: center;
list-style: none;
`

export const ListItem = styled.li`
`

export const StatusValues = styled.button`
font-size: 13px;
color: #000000;
border: none;
background-color:rgb(188, 172, 172);
text-decoration: ${props => (props.iaActive ? "underline" : "none")};
`

export const TableHeading =styled.th`

font-size: 13px;
`
export const TableContainer = styled.table`
margin-top: 30px;
`