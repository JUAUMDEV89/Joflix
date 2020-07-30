import styled from 'styled-components';

export const Form = styled.form`
   display:flex;
   flex-direction:column;

   input, textArea{
       width:100%;
       height:40px;
       border:none;
       border-radius:10px;
       margin-top:20px;
       padding-left:10px;
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

   div{
       display:flex;
       flex-direction:column;

   }

   label{
       margin-top:10px;
   }

`;
