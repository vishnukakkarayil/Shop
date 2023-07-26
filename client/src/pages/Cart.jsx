import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === " filled" && "none"};
    background-color: ${props => props.type === " filled" ? "black" : "transparent"};
    color: ${props => props.type === " filled" && "white"};
`;
const TopTexts = styled.div``
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px; 
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 24px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summery = styled.div`
    flex: 1;
    border: 0cap.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummeryTitle = styled.h1`
    font-weight: 200;
`;
const SummeryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && 500};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton> continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc="/>
                            <Details>
                                <ProductName><b>Product</b> JESSI THUNDER SHOE</ProductName>
                                <ProductId><b>iD</b> 36546565444</ProductId>
                                <ProductColor color="blue"/>
                                <ProductSize><b>Size</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>                        
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc="/>
                            <Details>
                                <ProductName><b>Product</b> JESSI THUNDER SHOE</ProductName>
                                <ProductId><b>iD</b> 36546565444</ProductId>
                                <ProductColor color="blue"/>
                                <ProductSize><b>Size</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>                        
                    </Product>
                </Info>
                <Summery>
                    <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                    <SummeryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimate Shiping</SummeryItemText>
                        <SummeryItemPrice>$ 5.90</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Shipping discount</SummeryItemText>
                        <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem  type="total">
                        <SummeryItemText>Total</SummeryItemText>
                        <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    <Button>Checkout now</Button>
                </Summery>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart