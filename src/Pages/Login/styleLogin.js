import Styled from 'styled-components';

export const Container = Styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const Title = Styled.h3`
  font-weight: 500;
  text-align: center;
  font-size: 2rem;
  height: 10%;
  margin-bottom: 40px;
`;

export const InputGroup = Styled.div`
  height: 70%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = Styled.input`
  width: 90%;
  height: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: #fff;
  padding: 10px 15px;
`;

export const Button = Styled.button`
  width: 90%;
  height: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center; 
  &:hover {
    background-color: #567ebb;
    color: #fff;
  }
`;

export const Link = Styled.a`
  color: #567ebb;
  text-decoration: none;
  &:hover {
    color:  #2b4c7e;
  }
`;