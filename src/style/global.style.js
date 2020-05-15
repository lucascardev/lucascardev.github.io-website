import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`;

export const Header = styled.header`
@media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 8px 5px;
  }
flex: 1;
background-color: cadetblue;
display: flex;
flex-direction: row;
overflow:hidden;
/* position: absolute; */
padding: 8px 10px;
justify-content: space-between;
`;

export const Gitinfo = styled.div`

@media only screen and (max-width: 600px) {
    flex-direction: row;
  }
display:flex;
align-self:center;
flex-direction: row;
`;

export const Avatar = styled.img`

@media only screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
width: 60px;
align-self: center;
height: 60px;
border-radius: 50%;
`;

export const Contact = styled.div`
@media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
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
    font-size: 28px;
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
    align-self: center;
    flex:1;
  }
padding: 16px;
`;

export const Main = styled.div`
@media only screen and (max-width: 600px) {
  }
flex: 1;
padding: 32px;
background-color: cadetblue;
color: whitesmoke;
border-radius: 3px;
h1 {
    text-align: center;
}
h3 {
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
}
p {
    margin-top: 16px;
    text-align: center;
    margin-bottom: 16px;
}
.linkholder {
    background: whitesmoke;
    border-radius: 4px;
    display: flex;
    justify-content:center;
    flex-direction: row;
    a{ 
        @media only screen and (max-width: 600px) {
            font-size: 10vw;
   }   
   margin-top: 4px;
    font-size: 5vw;
    color: #ff742b;
    transition: color 0.2s;
   padding : 8px;
   align-items: center;
}
a:hover{
    color: cadetblue; 
}
}

`;

export const Footer = styled.footer`
background-color: cadetblue;
display: flex;
flex-direction: row;
/* position: absolute; */
flex: 1;
padding: 16px;
justify-content: space-between;
text-align: center;
p {
    color: whitesmoke;
    a{
        color: #ff742b;
    }
}
`;

