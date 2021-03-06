import styled, {css} from 'styled-components';
import {shade} from 'polished';



export const Title= styled.h1`
font-size: 48px;
color: #3A3A3A;
margin-top:80px;
max-width: 450px;
line-height: 56px;
`
export const Form=styled.form`
margin-top: 40px;
max-width: 700px;
display:flex;

input{
    flex: 1;
    height:70px;
    padding: 0 24px;
    border:0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 2px solid #fff;
    transition: all 0.2s ease-in-out;

    ${(props)=>props.hasError && css `
    border-color: #c53030;
    
    `}

    &::placeholder{
        color: #a8a8b3;
    }
}

button{
    width: 210px;
    max-width: 210px;
    background:#04D361;
    border-radius: 0 5px 5px 0;
    outline: none;
    border: none;
    color: white;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: ${shade(0.2,'#04D361' )}
    }
}
`

export const Repositories=styled.div`
margin-top:80px;
max-width: 700px;



a{
    background:#fff;
    border-radius:5px;
    width:100%;
    padding:24px;
    display:block;
    text-decoration: none;
    display: flex;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: translateX(10px);
    }
    &+a{
    margin-top:16px;
}
}

img{
    width:64px;
    height:64px;
    border-radius:50%;
}

div{
    flex:1;
    margin: 0 16px;

}
strong{
    font-size:20px;
    color: #3D3D4D;
}

p{
    font-size: 18px;
    color:#A8A8B3;
}
svg{
    margin-left:auto;
    color: #CBCBD6;
}
`
export const Error=styled.span`

display:block;
color:#c53030; 
margin-top:8px;
`
