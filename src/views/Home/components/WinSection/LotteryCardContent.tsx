import React, { useState, useEffect, useMemo } from 'react'
import { Flex, Text} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useRefresh from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { usePriceCakeBusd } from 'state/farms/hooks'
import Balance from 'components/Balance'
import styled from 'styled-components'
import { fetchCurrentLotteryIdAndMaxBuy, fetchLottery } from 'state/lottery/helpers'
import BigNumber from 'bignumber.js'
// import { getBalanceAmount } from 'utils/formatBalance'

// const StyledLink = styled(Link)`
//   text-align:center;
//   &:hover{
//     text-decoration:none;
//   }
// `

// const Button= styled.button`
//   background-color:#ffd600;
//   border-radius:7px;
//   padding:10px 20px;
//   border:none;
// `

const StyledBalance = styled(Balance)`
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const { slowRefresh } = useRefresh()
  const [lotteryId, setLotteryId] = useState<string>(null)
  const [currentLotteryPrize, setCurrentLotteryPrize] = useState<BigNumber>(null)
  const cakePriceBusdAsString = usePriceCakeBusd().toString()

  const cakePrizesText = t('%cakePrizeInUsd% in PLAY prizes this round', { cakePrizeInUsd: cakePriceBusdAsString })
  const [pretext, prizesThisRound] = cakePrizesText.split(cakePriceBusdAsString)

  const cakePriceBusd = useMemo(() => {
    return new BigNumber(cakePriceBusdAsString)
  }, [cakePriceBusdAsString])

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  useEffect(() => {
    // get current lottery ID
    const fetchCurrentID = async () => {
      const { currentLotteryId } = await fetchCurrentLotteryIdAndMaxBuy()
      setLotteryId(currentLotteryId)
    }

    if (loadData) {
      fetchCurrentID()
    }
  }, [loadData, setLotteryId])

  useEffect(() => {
    // get public data for current lottery
    const fetchCurrentLotteryPrize = async () => {
      const { amountCollectedInCake } = await fetchLottery(lotteryId)
      const prizeInBusd = cakePriceBusd.times(amountCollectedInCake)
      setCurrentLotteryPrize(prizeInBusd)
    }

    if (lotteryId) {
      fetchCurrentLotteryPrize()
    }
  }, [lotteryId, slowRefresh, setCurrentLotteryPrize, cakePriceBusd])

  return (
    <>
      <Flex flexDirection="column" >
        <div ref={observerRef} />
        <Text color="white" bold fontSize="16px">
          {t('Lottery')}
        </Text>
        {pretext && (
          <Text color="white" mt="12px" bold fontSize="16px">
            {pretext}
          </Text>
        )}
        
          <StyledBalance
            fontSize="35px"
            bold
            prefix="$"
            decimals={0}
            value={142549}
            color="#fff"
          
          />
        {/* {currentLotteryPrize && currentLotteryPrize.gt(0) ? (
          <StyledBalance
            fontSize="40px"
            bold
            prefix="$"
            decimals={0}
            value={getBalanceAmount(currentLotteryPrize).toNumber()}
          />
        ) : (
          <>
            <Skeleton width={200} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        )} */}
        <Text color="white" mb="17px" bold fontSize="16px">
          {prizesThisRound}
        </Text>
        <Text color="white" mb="38px">
          {t('Buy tickets with PLAY, win PLAY if your numbers match')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" height="39px">
        {/* <StyledLink href="/lottery" >
          <Button >
          {t('Buy Tickets')}
          </Button>
        </StyledLink> */}
      </Flex>
    </>
  )
}

export default LotteryCardContent
