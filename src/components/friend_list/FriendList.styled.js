import styled from "styled-components";

export const FriendBox = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
margin-left:auto;
margin-right:auto;
gap: 10px;
margin-bottom:${p => p.theme.space[4]}px;

`;

export const FriendItem = styled.li`
display:flex;
width: 400px;
align-items: center;
gap: 20px;
outline: 1px solid grey;
border-radius: 4px;
padding:15px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
background-color:rgba(0,0,0,0.1);


`;
export const FriendStatus = styled.span`
width:20px;
height:20px;
border-radius:${p => p.theme.radii.round};
background-color:${p => p.isOnline ? "green" : "red"};
`;

export const FriendText = styled.p`
font-size:${p => p.theme.fontSizes.l};

`
