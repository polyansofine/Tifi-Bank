import React from "react";
import styled from "styled-components";
import { Text,Skeleton } from "@pancakeswap/uikit";


interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Icon=styled.img`
 width:32px;
 margin-right:8px
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://coinmarketcap.com/currencies/polyplay"
      target="_blank"
    >
      <Icon src="/logo.png" alt="logo"/>
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
