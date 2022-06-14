import React from 'react'
import styled from 'styled-components'

import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'

// import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { useApiInfo } from 'state/apiInfo/hooks'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(3, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(3, auto);
  }
`

// const emissionsPerBlock = 17

const CakeDataRow = () => {
  const { t } = useTranslation()
  const info = useApiInfo()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  // const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  // const cakePriceBusd = usePriceCakeBusd()
  // const mcap = cakePriceBusd.times(cakeSupply)
  // const mcapString = formatLocalisedCompactNumber(info.response.marketCap)

  return (
    <>
      <Heading scale="xl" textAlign="center" color="#000" mb="100px">
        Polyplay Stats
      </Heading>
      <Grid>
        <StyledColumn>
          {info.response.marketCap > 0 ? (
            <Flex alignItems="center">
              <Text fontSize="24px" bold color="#000" marginRight="3px">
                $
              </Text>
              <Balance
                decimals={0}
                lineHeight="1.1"
                fontSize="24px"
                color="#000"
                bold
                value={info.response.marketCap}
              />
            </Flex>
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
          <Text color="#2a0200">{t('Market cap')}</Text>
        </StyledColumn>
        <StyledColumn>
          {info.response.maxSupply > 0 ? (
            <Balance decimals={0} lineHeight="1.1" fontSize="24px" color="#000" bold value={info.response.maxSupply} />
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
          <Text color="#2a0200">{t('Max Supply')}</Text>
        </StyledColumn>
        {/* <StyledColumn>
          {info.response.tradingVolume > 0 ? (
             <Flex alignItems="center">
             <Text fontSize="24px" bold color="#000" marginRight="3px">
               $
             </Text>
            <Balance decimals={2} lineHeight="1.1" fontSize="24px" bold value={info.response.tradingVolume} color="#000" />
            </Flex>
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
          <Text color="#2a0200">{t('24hr Trading Volume')}</Text>
        </StyledColumn> */}
      </Grid>
    </>
  )
}

export default CakeDataRow
