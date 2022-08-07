import styled from "styled-components";

export const ProfileContainer = styled.div`
text-align: center;
padding:15px;
border:1px solid grey;
background-color:rgba(0,0,0,0.1);
border-radius:8px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
width: 320px;
margin-left:auto;
margin-right:auto;
margin-bottom:${p=>p.theme.space[4]}px;
`;

export const ProfileImg = styled.img`
width: 250px;
margin-bottom: 10px;

`
export const ProfileTitle = styled.p`
color:${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ProfileDiscr = styled.p`
color:${p => p.theme.colors.text};
font-size:${p => p.theme.fontSizes.m};
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ProfileStats = styled.ul`
display:flex;
width:100%;
margin-left:auto;
margin-right:auto;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
gap:10px;
width:calc(100%/3);
height:70px;
outline:1px solid black;
padding:${p => p.theme.space[2]}px;
background-color:${p => p.theme.colors.primary};
color:${p=>p.theme.colors.white};
`;