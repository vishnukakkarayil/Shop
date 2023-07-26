import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import styled from "styled-components"
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`;
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`;

const Image = styled.img`
    height: 100%;    
    width: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 28px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = (direction) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = () => {
        if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    
    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        <Slide bg="f5fafd">
                <ImageContainer>
                    <Image src="https://media.istockphoto.com/id/511542810/photo/carefree-woman-walking-on-beach-with-sun-dress-and-hat.jpg?s=612x612&w=0&k=20&c=rbfdmxniHx2b5WDWp62ia04PnU3pA3j6zTLGsjgHu-Q=" />
                </ImageContainer>
                <InfoContainer>
                    <Title> simply dummy</Title>
                    <Desc>simply dummy text of the printing and typesetting industry.</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide><Slide bg="f5fafd">
                <ImageContainer>
                    <Image src="https://media.istockphoto.com/id/511542810/photo/carefree-woman-walking-on-beach-with-sun-dress-and-hat.jpg?s=612x612&w=0&k=20&c=rbfdmxniHx2b5WDWp62ia04PnU3pA3j6zTLGsjgHu-Q=" />
                </ImageContainer>
                <InfoContainer>
                    <Title> simply dummy `1</Title>
                    <Desc>simply dummy text of the printing and typesetting industry.</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide><Slide bg="f5fafd">
                <ImageContainer>
                    <Image src="https://media.istockphoto.com/id/511542810/photo/carefree-woman-walking-on-beach-with-sun-dress-and-hat.jpg?s=612x612&w=0&k=20&c=rbfdmxniHx2b5WDWp62ia04PnU3pA3j6zTLGsjgHu-Q=" />
                </ImageContainer>
                <InfoContainer>
                    <Title> simply dummy 2</Title>
                    <Desc>simply dummy text of the printing and typesetting industry.</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider