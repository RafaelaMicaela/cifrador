import { styled } from "styled-components";

export const CardContaine = styled.body`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #000000;
`;

export const Container = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const Titulo = styled.h1`
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  margin-top: 20px;
  font-size: 18px;
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 18px;
`;

export const Input = styled.input`
  margin: 2px;
  width: calc(100% - 20px);
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  margin: 2px;
`;

export const P = styled.p`
  font-size: 16px;
`;
