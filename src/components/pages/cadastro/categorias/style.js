import styled from 'styled-components';

export const Form = styled.form`
   display:flex;
   flex-direction:column;

   input{
       width:100%;
       height:40px;
       border:none;
       border-radius:10px;
       margin-top:20px;
   }

   button{
       margin-top:20px;
       border:none;
       background-color:#34d304;
       height:40px;
       color:white;
       border-radius:10px;
       cursor:pointer;
   }
`; 