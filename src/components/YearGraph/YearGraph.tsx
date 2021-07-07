// Written by Joey Essak-
// Imported Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
// Imported Wrapper
import { Wrapper } from "./YearGraphStyled";
// FirstContainer Imported
import { MainContainer } from "./YearGraphStyled";
import { LabelOne } from "./YearGraphStyled";
import { LabelTwo } from "./YearGraphStyled";
import { LabelThree } from "./YearGraphStyled";
// SecondContainer Imported
import { SecondContainer } from "./YearGraphStyled";
import { LabelFour } from "./YearGraphStyled";
import { LabelFive } from "./YearGraphStyled";
import { LabelSix } from "./YearGraphStyled";
import { LabelSeven } from "./YearGraphStyled";
// ThirdContainer Imported
import { ThirdContainer } from "./YearGraphStyled";
import { ButtonOne } from "./YearGraphStyled";
import { ButtonTwo } from "./YearGraphStyled";
import { ButtonThree } from "./YearGraphStyled";
import { ButtonFour } from "./YearGraphStyled";
import { ButtonFive } from "./YearGraphStyled";
import { ButtonSix } from "./YearGraphStyled";
// FourthContainer Imported
import { FourthContainer } from "./YearGraphStyled";
import { StockChartPlaceholder } from "./YearGraphStyled";
import { PlaceholderMessage } from "./YearGraphStyled";
// FifthContainer Imported
import { FifthContainer } from "./YearGraphStyled";
import { BlockOne } from "./YearGraphStyled";
import { BlockOneMessage } from "./YearGraphStyled";
import { BlockTwo } from "./YearGraphStyled";
import { BlockTwoMessage } from "./YearGraphStyled";
import { BlockThree } from "./YearGraphStyled";
import { BlockThreeMessage } from "./YearGraphStyled";
// SixthContainer Imported
import { SixthContainer } from "./YearGraphStyled";
import { TitleText } from "./YearGraphStyled";
import { Subtext } from "./YearGraphStyled";
import { ButtonSeven } from "./YearGraphStyled";
import { StyledLink } from './YearGraphStyled';
import { StyledLinkTwo } from './YearGraphStyled';

// Creating a YearGraph JSX Element 
const YearGraph = ( ): JSX.Element => {
  return (
      <Wrapper>
        <MainContainer>
          <LabelOne>19.00</LabelOne>
          <LabelTwo>  <FontAwesomeIcon icon={faCaretUp} />  </LabelTwo>
          <LabelThree>0.10(0.53%)</LabelThree>
        </MainContainer>
        <SecondContainer>
        <LabelFour>19.33</LabelFour>
          <LabelFive> <FontAwesomeIcon icon={faCaretUp} /> </LabelFive>
          <LabelSix>0.33(1.74%)</LabelSix>
          <LabelSeven>After Hours . June 29, 7:59PM EDT . Market Closed </LabelSeven>
        </SecondContainer>
        <ThirdContainer>
          <ButtonOne>Day</ButtonOne>
          <ButtonTwo>Week</ButtonTwo>
          <ButtonThree>Month</ButtonThree>
          <ButtonFour>Year</ButtonFour>
          <ButtonFive>5 Year</ButtonFive>
          <ButtonSix>Max</ButtonSix>
        </ThirdContainer>
        <FourthContainer>
          <StockChartPlaceholder>
            <PlaceholderMessage>
              I am a really cool 3d stock chart and this is my temporary placeholder I update in realtime and show you the Money!
            </PlaceholderMessage>
          </StockChartPlaceholder>
        </FourthContainer>
        <FifthContainer>
          <BlockOne>
            <BlockOneMessage>Open</BlockOneMessage>
          </BlockOne>
          <BlockTwo>
            <BlockTwoMessage>P/E</BlockTwoMessage>
          </BlockTwo>
          <BlockThree>
            <BlockThreeMessage>Vol</BlockThreeMessage>
          </BlockThree>
        </FifthContainer>
        <SixthContainer>
            <TitleText>Track this stock</TitleText>
            <Subtext>Get the latest quotes in your <StyledLink href="">watchlist</StyledLink> and receive email and browser notifications</Subtext>
            <ButtonSeven><StyledLinkTwo><FontAwesomeIcon icon={faStar} /></StyledLinkTwo> Follow</ButtonSeven>
        </SixthContainer>
      </Wrapper>
  );
};
// Exporting the created YearGraph JSX Element
export default YearGraph;