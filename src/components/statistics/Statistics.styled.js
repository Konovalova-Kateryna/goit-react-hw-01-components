import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatContainer = styled.section`
text-align: center;
padding-top:${p => p.theme.space[3]}px;

outline:1px solid grey;
width:800px;
margin-left:auto;
margin-right:auto;
margin-bottom:${p => p.theme.space[4]}px;
`;
export const StatTitle = styled.h2`
font-size:${p => p.theme.fontSizes.l};
color:#2a2a2a9e;
`

export const StatList = styled.ul`
display:flex;
align-items:flex-end;
margin-left:auto;
margin-right:auto;
`;

export const ListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
font-size:${p => p.theme.fontSizes.l};
width:calc(100%/5);
gap:${p => p.theme.space[3]}px;
outline:1px solid black;
padding-top:${p => p.theme.space[3]}px;
padding-bottom:${p => p.theme.space[3]}px;
background-color:${getRandomHexColor};
color:${p=>p.theme.colors.white};
`