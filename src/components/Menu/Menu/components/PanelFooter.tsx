import React from "react";
import styled from "styled-components";
import { CogIcon,IconButton } from "@pancakeswap/uikit";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import SocialLinks from "./SocialLinks";
// import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 20px 5% 20px 15%;
`;

// const SettingsEntry = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: ${MENU_ENTRY_HEIGHT}px;
//   padding: 0 8px;
// `;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,

  cakePriceUsd,
  
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        <SocialLinks />
      </SocialEntry>
      {/* <SettingsEntry>
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry> */}
    </Container>
  );
};

export default PanelFooter;
