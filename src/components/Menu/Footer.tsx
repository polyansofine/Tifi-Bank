import React from 'react'
import styled from 'styled-components'
import { LinkExternal, Flex} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Social from 'views/Home/components/Social'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const BubbleWrapper = styled(Flex)`
width:160px;
height:160px;
`


const Footer = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Flex justifyContent="center" alignItems="center">

        <Social/>
 
        {/* <LinkExternal
          href="https://www.binance.org/en/bridge?utm_source=PolyPlay"
          ml={[0, 0, '40px']}
          mt={['20px', '20px', 0]}
          mb={['8px', '8px', 0]}
        >
          {t('Convert ERC-20 to BEP-20')}
        </LinkExternal> */}
      </Flex>
      <Flex
        flexGrow={1}
        alignItems="center"
        width={['100%', '100%', '100%', 'auto']}
        justifyContent={['center', 'center', 'center', 'flex-end']}
      >
        <BubbleWrapper/>
      </Flex>
    </Wrapper>
  )
}

export default Footer
