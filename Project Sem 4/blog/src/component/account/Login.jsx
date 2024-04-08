
import {useState} from 'react';
import { Box,TextField,Button,styled,Typography } from '@mui/material';

const Component = styled(Box)`
    
    width: 400px;
    margin-top: 50px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:auto;
    box-shadow: 3px 5px 3px 5px rgb(0 0 0 /0.6);
    padding-top: 20px
`;

const Image = styled('img')({
    width:200,
    margin:"auto",
    display: 'flex',
    padding:" 30px 0 0"

});

const Wrapper = styled(Box)`
    padding: 30px 20px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & > button, & > p{
        margin-top:20px;
    }
`;
const LoginButton = styled(Button)`

 font-weight:bold;
 color : white;
 height:48px;
 
 border-radius: .9375rem;
`;
const SignUpButton = styled(Button)`
 text-transform:none;
 font-weight:bold;
 
 height:48px;
 box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
 border-radius: .9375rem;
`;
 const Text = styled(Typography)`
    color : blue;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 `;

export default function Login() {
    const imageURL="https://th.bing.com/th/id/OIP._OMVdifGX4r1XNtUorl8QAAAAA?rs=1&pid=ImgDetMain";
    const   [account , toggleAccount] = useState("login");
    const toggleSignUp  = () => {
        account === 'signup' ? toggleAccount("login") : toggleAccount("signup");}
  return (
    <Component>
        <Box>
            <Image src = {imageURL} alt="login"/>
            {
                account === 'login' ?
                <Wrapper>
                <TextField  label='Email' />
                <TextField label='Password' type={'password'}/>
                <LoginButton variant='contained'>Login</LoginButton>
                <Text>OR</Text>
                <SignUpButton varient="outlined" onClick={toggleSignUp}>Create an account</SignUpButton>
            </Wrapper>
        :
            <Wrapper>
                <TextField label='Enter Name'/>
                <TextField  label='Enter Email' />
                <TextField label='Enter Password' type={'password'}/>
                <SignUpButton variant='outlined'>Sign Up</SignUpButton>
                <Text>OR</Text>
                <LoginButton varient="contained" style={{color:'blue'}} onClick={toggleSignUp}>Already have an account? Log in.</LoginButton>
            </Wrapper> 
}   
        </Box>
    </Component>
  )
}
