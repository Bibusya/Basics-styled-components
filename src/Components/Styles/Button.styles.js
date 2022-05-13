import styled from "styled-components";
import Button from "../Button";
// 1)

// Use :hover, :active and stuff like that in our Component
export const GreenButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: green;
  color: white;
  font-size: 1rem;
  margin: 0.5rem;

  // & targets that specific component that we are styling
  &:hover {
    background-color: coral;
  }
`;

// 2)
// Adding component in our button, as a Label
export const ButtonLabel = styled.label`
  font-size: 2rem;
  color: yellow;
`;

// 3)
//Accessing other component (in our case Label) inside our Button
export const RedButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: red;
  color: white;
  font-size: 1rem;
  margin: 0.5rem;

  // Targeting this button
  &:hover {
    //Targeting label inside our button
    & label {
      color: green;
    }
  }
`;

// 4) style Existing component insted of creating it here

export const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: violet;
  padding: 1rem;
`;

export const BlueButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: blue;
  color: white;
  font-size: 1rem;
  margin: 0.5rem;
`;

// Accepting Props To style our button

export const CustomButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 1rem;
  margin: 0.5rem;
`;
