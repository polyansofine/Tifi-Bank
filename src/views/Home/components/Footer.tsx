import React from 'react'
import styled from 'styled-components'
import { Flex, Text} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Social from './Social'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Copyright = styled(Text)`
  opacity: 0.5;
`

const Footer = () => {
  const { t } = useTranslation()


  return (
    <Wrapper>
      <Text textAlign="center" color="white" fontSize="13px">
        {t('PolyPlay Gaming LTD.')}
      </Text>
      {/* <Text textAlign="center" color="white" fontSize="13px">
        {t('18 Harrison Garden Blv.')}
      </Text> */}
      <Text mb="24px" color="white" fontSize="13px">
        {t('Toronto, Canada')}
      </Text>
      <Social/>

      <Copyright color="white" fontSize="10px">
        &copy; {t('Copyright 2021, PolyPlay')}
      </Copyright>
    </Wrapper>
  )
}

export default Footer
