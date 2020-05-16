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
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
flex: 1;
background-color: cadetblue;
display: flex;
flex-direction: row;
overflow:hidden;
/* position: absolute; */
padding: 8px 10px;
justify-content: space-between;

.techs {
    @media only screen and (max-width: 600px) {
            font-size: 6vw;
            justify-content: space-between;
   }   
    background: whitesmoke;
    border-radius: 1px;
    display: flex;
    align-items: center;
    flex-direction: row;  
    font-size: 3vw;
    color: #ff742b;
    padding : 8px;
    margin-top: 8px;
    
}
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
display: flex;
`;

export const Contact = styled.div`
@media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 8px;
  }
 align-self: center;
 font-size: 21px;
 display: flex;
 flex-direction: column;

p{
    color: whitesmoke;
    display: flex; 
    margin-top: 5px;
}
a {
    color: whitesmoke;
    transition: color 0.2s;
    display: flex;
    text-decoration: none;
    background: #ff742b;
    padding: 4px;
    border-radius: 3px;
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
display: flex;
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
display: flex;
padding: 16px;
`;

export const Main = styled.div`
@media only screen and (max-width: 600px) {
  }
display: flex;
flex: 1;
padding: 32px;
background-color: cadetblue;
color: whitesmoke;
border-radius: 2px;
flex-direction: column;
h1 {
    display: flex;
}
h3 {
    margin-top: 16px;
    margin-bottom: 16px;
}
p {
    margin-top: 16px;
    text-align: center;
    margin-bottom: 16px;
    a {
    color: whitesmoke;
    transition: color 0.2s;
    text-decoration: none;
    background: #ff742b;
    padding: 4px;
    border-radius: 3px;
    margin: 2px;
    }
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
   display: flex;
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
flex-direction: column;
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

