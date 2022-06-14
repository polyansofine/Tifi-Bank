import React from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import SubNav from 'components/Menu/SubNav'

import Footer from './Home/components/Footer'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: 100vh;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 120px;
    min-height: 100vh;
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <StyledPage {...props}>
      {/* <SubNav /> */}
      {children}
      <Flex flexGrow={1} marginBottom="20px"/>
      
    </StyledPage>
  )
}

export default Page
