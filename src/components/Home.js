import React from 'react'
import Nav from './Nav'
import fultterImg from '../images/Flutter.png'
import javaImg from '../images/java.png'
import nodeImg from '../images/NodeJs.png'
import styled from 'styled-components';
import {Button} from '../styles/Shares'

export const FlexDiv = styled.div`
background-color:${(props) => props.theme.colors.primary};
display:flex;
padding:0 20px;
align-items:center;
`
const Flex = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
justify-content:center;
align-items:center;
`

export default function Home() {
    return (
        <>
            <Nav />
            <FlexDiv>
                <Flex>
                    <h1>H Aplha H</h1>
                    <h4>ReactJS SPA Demo project</h4>
                    <Button>Download Apk</Button>
                </Flex>
                <Flex>
                    <img src={fultterImg} alt="ads" width="60%" />
                </Flex>
            </FlexDiv>
            <FlexDiv>
                <Flex>
                    <img src={javaImg} alt="ads" width="60%" />
                </Flex>
                <Flex>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos obcaecati velit ipsum laudantium, ex facere nesciunt repudiandae omnis sit nostrum magni blanditiis cupiditate pariatur quia ea quisquam explicabo sequi.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos obcaecati velit ipsum laudantium, ex facere nesciunt repudiandae omnis sit nostrum magni blanditiis cupiditate pariatur quia ea quisquam explicabo sequi.</p>
                </Flex>
            </FlexDiv>
            <FlexDiv>
                <Flex>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos obcaecati velit ipsum laudantium, ex facere nesciunt repudiandae omnis sit nostrum magni blanditiis cupiditate pariatur quia ea quisquam explicabo sequi.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos obcaecati velit ipsum laudantium, ex facere nesciunt repudiandae omnis sit nostrum magni blanditiis cupiditate pariatur quia ea quisquam explicabo sequi.</p>
                </Flex>
                <Flex>
                    <img src={nodeImg} alt="ads" width="60%" />
                </Flex>
            </FlexDiv>
        </>
    )
}
