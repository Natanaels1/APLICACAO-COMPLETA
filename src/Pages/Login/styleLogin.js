import Styled from 'styled-components';

export const Container = Styled.div`
  width: 500px;
  height: 450px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6%;
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
  width: 100%;
  height: 40px;
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
`;