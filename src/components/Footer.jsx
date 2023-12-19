import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
  text
`;

export function Footer() {
  return (
    <FooterDiv>
               {/* Made by &nbsp;Akarshan,Sahil,Srushti,Sneha&nbsp; &nbsp;&nbsp; &nbsp; */}
    For any complain/query send it on our mail &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<a href="">algowiz123@gmail.com</a>
  

    </FooterDiv>
    
  );
}
