import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0);
  ${mobile({ height: "20vh" })} 
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-size: 40px;
    color: white;
    font-size: 50px;
    ${'' /* -webkit-text-stroke-width: 1px; */}
    -webkit-text-stroke-color: black;
    text-shadow: 0 0 3px #000, 0 0 100px #000;
    ${'' /* background-color:; */}
    border-radius: 10px;
    ${'' /* opacity:0.5; */}
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.17);
    border: 10px;
    padding:5px
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    :hover {
      background-color: teal;
      padding: 10px;
      color: white;
      border-radius: 10%;
      -webkit-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.17);
      box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.17);
      
    }
    transition: all 0.4s;

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
