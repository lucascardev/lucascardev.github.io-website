import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;

`;



export const Header = styled.div`
@media only screen and (max-width: 600px) {
    justify-content: center;
  }
position: fixed;
background-color: cadetblue;
display: flex;
flex-direction: row;
/* position: absolute; */
top: 0;
left: 0;
right: 0;
padding: 8px;
justify-content: space-between;
`;

export const Avatar = styled.img`

@media only screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
width: 60px;
align-self: center;
height: 60px;
border-radius: 50%;
`;

export const Contact = styled.div`
@media only screen and (max-width: 600px) {
    font-size: 12px;
  }
 align-self: center;
 justify-content: flex-end;
 font-size: 16px;
p{
    color: whitesmoke;
    align-self: center;
}
`;

export const Username = styled.h1`
@media only screen and (max-width: 600px) {
    align-self: center;
    font-size: 16px;
  }
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

export const PageHolder = styled.div`
@media only screen and (max-width: 600px) {
    margin-top: 60px;
  }
  margin-top: 80px;
padding: 32px;
align-self: center;


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
    width: 50%;
    flex-direction: row;
    a{ 
        font-size: 5vw;
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
position: fixed;
display: flex;
flex-direction: row;
/* position: absolute; */
bottom: 0;
left:0;
right: 0;
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

