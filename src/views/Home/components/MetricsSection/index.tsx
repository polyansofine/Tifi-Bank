import React from 'react'
import { Heading, Flex, Text, Skeleton } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'

// Values fetched from bitQuery effective 13/8/21
const txCount = 44713126
const addressCount = 2607499

const Icon= styled.img`
width:60px;
`

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)



  const UsersCardData: IconCardData = {
    icon: <Icon src="/images/home/user.svg" alt="users"   />,
  }

  const TradesCardData: IconCardData = {
    icon: <Icon src="/images/home/trade.svg" alt="users"   />,
  }

  const StakedCardData: IconCardData = {
    icon: <Icon src="/images/home/stake.svg" alt="users"   />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      <Heading textAlign="center" scale="xl">
        {t('Used by millions.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Trusted with billions.')}
      </Heading>
      <Text textAlign="center" color="#fff">
        {t('PolyPlay has the most users of any decentralized platform, ever.')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="#fff" mb="20px">
          {entrusting}
          <>{data ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex>

  
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']} background="#000" borderBackground="none">
          <StatCardContent
            headingText={t('%users% users', { users })}
            bodyText={t('in the last 30 days')}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']} background="#000" borderBackground="none">
          <StatCardContent
            headingText={t('%trades% trades', { trades })}
            bodyText={t('made in the last 30 days')}
          />
        </IconCard>
        <IconCard {...StakedCardData} background="#000" borderBackground="none">
          <StatCardContent
            headingText={t('$%tvl% staked', { tvl: tvlString })}
            bodyText={t('Total Value Locked')}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
