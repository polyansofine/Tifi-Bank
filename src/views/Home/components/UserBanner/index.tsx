import React from 'react'
import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import UserDetail from './UserDetail'

const StyledCard = styled(Box)`
border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom: 1px #8c8b8e solid;
    border-left: 1px #8c8b8e solid;
    border-right: 1px #8c8b8e solid;
    border-radius: 0 0 24px 24px;
    background: linear-gradient(
360deg
,rgb(71 72 76 / 90%) 0%,rgb(48 48 49 / 90%) 100%);
`

const UserBanner = () => {
  return (
    <StyledCard>
      <Box p={['16px', null, null, '24px']}>
        <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" mr={[null, null, null, '32px']}>
            <UserDetail />
          </Flex>
          {/* <Flex flex="1" width={['100%', null, 'auto']}>
            <HarvestCard />
          </Flex> */}
        </Flex>
      </Box>
    </StyledCard>
  )
}

export default UserBanner
