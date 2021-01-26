import styled from 'styled-components';

export const Header=styled.header`
display: flex;
align-items: center;
justify-content:space-between;

    a{
        display: flex;
        align-items:center;
        text-decoration:none;
        color: #a8a8b3;
        transition: all 0.2s ease-in-out;

        &:hover{
            color: #666;
        }
    }
    svg{
        margin-right:4px;
    }


`

export const RepositoryInfo=styled.div``