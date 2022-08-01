import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from "../responsive.js";


const Container = styled.div`
    display: flex;
    background-color: #0b866c;
    ${mobile({
        flexDirection: "column"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin: 8px;
    display: flex;
    align-items: center;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;

`

const Title = styled.h1`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Courier Speed</Logo>
            <Description>
                FUll Stack MERN Project.
            </Description>
            <SocialContainer>
                <SocialIcon>
                    <GitHubIcon />
                </SocialIcon>
                <SocialIcon>
                    <LinkedInIcon />
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Contact</Title>
            <ContactItem>
                <PhoneIcon style={{ marginRight: "15px"}} />
                +92 309 1045145
            </ContactItem>
            <ContactItem>
                <MailIcon style={{ marginRight: "15px"}} />
                asn.cs21@gmail.com
            </ContactItem>
            <ContactItem>
                <MyLocationIcon style={{ marginRight: "15px"}} />
                Lahore, Pakistan.
            </ContactItem>
        </Center>
        <Right>
            <Title>
                UseFull Link
            </Title>
            <List>
                <ListItem>
                    Ahsan
                </ListItem>
                <ListItem>
                    Ahsan
                </ListItem>
                <ListItem>
                    Ahsan
                </ListItem>
                <ListItem>
                    Ahsan
                </ListItem>
            </List>
        </Right>
    </Container>
  )
}

export default Footer