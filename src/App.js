import React from "react";

//STYLES
import { GlobalStyles } from "./Components/Styles/GlobalStyles.styles";
import { AppContainer } from "./Components/Styles/AppContainer.styles";

import {
  GreenButton,
  RedButton,
  BlueButton,
  CustomButton,
  ButtonLabel,
  StyledButton,
} from "./Components/Styles/Button.styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <StyledButton label="Click here" />
        <GreenButton>Hover</GreenButton>
        <RedButton>
          <ButtonLabel>LABEL</ButtonLabel>
        </RedButton>
        <BlueButton>Blue</BlueButton>
        <CustomButton backgroundColor="purple">props - purple</CustomButton>
        <CustomButton backgroundColor="cyan">props - cyan</CustomButton>
      </AppContainer>
    </>
  );
};

export default App;
