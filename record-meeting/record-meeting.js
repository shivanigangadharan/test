import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: rgb(28, 108, 237);
border: none;
border-radius: 10px;
color: white;
font-weight: light;
font-size: 150%;
padding: 2%;
margin: 4%;
display: block;

`
const Box = styled.div`
box-shadow: 1px 1px 10px 3px lightgray;
padding: 2%;
margin: 5%;   
width: 80%;
`
const Heading = styled.div`
border: 1px solid black;
padding: 2%;
align-contents: center;
font-size: 150%;
font-weight: bold;
width: 80%;
margin-top: 5%;

`
const Input = styled.input`
border: 1px solid lightgray;
margin: 1%;
`
function Record() {

    return (
        <div>
            <Heading> Record during/after Mohalla Sabha </Heading>
            <Box>
                <Button> Add meeting notes </Button>
                <Button> Add Problem </Button>
            </Box>
            <h2> Today's Problems </h2>
            <form>
                <Input type="text" placeholder="Enter new problem" />
                <br />  <Input type="text" placeholder="Enter new problem" />
                <br />   <Input type="text" placeholder="Enter new problem" />
            </form>
        </div>

    );

}

export default Record;