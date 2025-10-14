import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../images/logo.png';
import styled from 'styled-components';
import { useLoginContext } from '../store/LoginContextApi';

export const FlexDiv = styled.div`
background-color:${(props) => props.theme.colors.primary};
display:flex;
height:45px;
padding:0 20px;
align-items:center;
border-bottom:0.3px solid rgba(0,0,0,0.1)
`
const RightDiv = styled.div`
flex:1;
`
const LeftDiv = styled.div`
display:flex;
align-items:center;
`

const UlDiv = styled.ul`
list-style: none;
display:flex;
justify-content:flex-end;
`

const H1_STYLE = {
    marginLeft: "10px",
    color: "#ff8800"
}

const ATAG_STYLE = {
    color: "hotpink",
}

const LIStyle = styled.li`
    padding:0 10px;
    &:after{
        content:"";
        display:block;
        heighte:5px;
        background-color:hotpink;
        transform:scaleX(0)
    }

    &:hover{
        &:after{
            transform:scaleX(1);
        }
    }
`

export default function Nav() {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useLoginContext();
    const logout = () => {
        setLoggedIn(false);
        navigate('/');
    }
    return (
        <FlexDiv>
            <LeftDiv>
                <img src={logoImg} width="30px" height="30px" />
                <strong style={H1_STYLE}>H Apha H</strong>
            </LeftDiv>
            <RightDiv>
                <UlDiv>
                    <LIStyle><a style={ATAG_STYLE} href='#'>Download</a></LIStyle>
                    <LIStyle><a style={ATAG_STYLE} onClick={logout} href='#'>{loggedIn ? "Logout" : "Login"}</a></LIStyle>
                </UlDiv>
            </RightDiv>
        </FlexDiv>
    )
}
