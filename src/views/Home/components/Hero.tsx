import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Link, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'

const CustomBtn= styled(Button)`
color:#d7c03e;
border:1px solid #846d00;
border-radius:7px;
background:none;
`
const Title=styled(Heading)`
color:#d7c03e;
display:inline-block;

`
const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`



const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`



const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>

      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex flex="1" flexDirection="column" flexGrow={2}>
          <Heading scale="xxl" color="#fff" mb="24px" >
          {t('The moon is made' )}
            </Heading>
          <Heading scale="xxl" color="#fff" mb="24px" >

          {t('of Poly')}
          <Title scale="xxl" mb="24px">{t('Play')}</Title>
          </Heading>
          <Heading scale="md" mb="24px">
            {t('Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.')}
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            <Link mr="16px" href="/swap">
              <CustomBtn >{t('Trade Now')}</CustomBtn>
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src="/images/home/hero.png" alt="logo"/>

          </BunnyWrapper> 

        </Flex>
      </Flex>
    </>
  )
}

export default Hero
