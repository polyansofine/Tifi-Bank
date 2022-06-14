import React from 'react'
import styled from 'styled-components'
import { Flex, Text,Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
// import PurpleWordHeading from '../PurpleWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'
import LotteryCardContent from './LotteryCardContent'

const TransparentFrame = styled.div<{ isDark: boolean }>`

  padding: 10px;
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`



const PredictionCardData: IconCardData = {
  icon:  <></>,
  background: '#e5345e',
  borderColor: '#e5345e',
  // rotation: '-2.36deg',
}

const LotteryCardData: IconCardData = {
  icon:  <></>,
  background: ' #6ecdf9',
  borderColor: '#6ecdf9',
  // rotation: '1.43deg',
}



const WinSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>

      <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          
          <Heading scale="xl" mb="24px" textAlign="center">{t('Win millions in prizes')}</Heading>
          <Text color="#fff">{t('Provably fair, on-chain games.')}</Text>
          <Text mb="40px" color="#fff">
            {t('Win big with PolyPlay.')}
          </Text>
          <Flex m="0 auto" flexDirection={['column', null, null, 'row']} maxWidth="600px">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}>
                <PredictionCardContent />
              </IconCard>
            </Flex>
            <Flex flex="1" maxWidth={['275px', null, null, '100%']}>
              <IconCard {...LotteryCardData}>
                <LotteryCardContent />
              </IconCard>
            </Flex>
          </Flex>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
