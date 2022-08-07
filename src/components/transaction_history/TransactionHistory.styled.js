import styled from "styled-components";

export const Table = styled.table`
width: 100%;
margin-left:auto;
margin-right:auto;
outline:1px solid ${p => p.theme.colors.muted};
font-family:${p=>p.theme.fonts.body};

`

export const Thead = styled.thead`
background-color:${p => p.theme.colors.primary};
color: white;
padding: 15px;
font-size:${p=>p.theme.fontSizes.xl}

`
export const TheadItem = styled.th`
padding:15px;

`
export const TbodyRow = styled.tr`
font-size:${p=>p.theme.fontSizes.l};
:nth-child(even){
    background-color:${p => p.theme.colors.muted};
}`;

export const TbodyItem = styled.td`
padding:15px;
text-align: center;


`