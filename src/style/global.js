import styled from 'styled-components'


export const Container = styled.div`
margin-top: 32px;
`;


export const Header = styled.div`
background-color: cadetblue;
display: flex;
flex-direction: row;
/* position: absolute; */
top: 0;
width: 100%;
padding: 16px;
justify-content: space-between;
`;

export const Avatar = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
`;

export const Contact = styled.div`
 align-self: center;
 justify-content: flex-end;
p{
    font-size: 16px;
    color: whitesmoke;
    align-self: center;
}
`;

export const Username = styled.h1`
color: #ff742b; 
align-self: center;
padding: 20px;
a{
    color: whitesmoke;
    transition: color 0.2s;
}
a:hover{
    color: #ff742b; 
}
`;

export const Main = styled.div`
padding: 32px;
background-color: cadetblue;
color: whitesmoke;
border-radius: 3px;
h1 {
    
}
p {
    margin-top: 16px;
    margin-bottom: 16px;

}
.linkholder {
    display: flex;
    flex-direction: row;
    a{ 
    color: #ff742b;
    margin-left: 10px;
    margin-right: 10px;
    transition: color 0.2s;
}
a:hover{
    color: whitesmoke; 
}
}

`;

export const Footer = styled.div`
background-color: cadetblue;
position: absolute;
display: flex;
flex-direction: row;
/* position: absolute; */
bottom: 0;
width: 100%;
padding: 16px;
justify-content: space-between;
p {
    color: whitesmoke;
    a{
        color: #ff742b;
    }
}
`;

