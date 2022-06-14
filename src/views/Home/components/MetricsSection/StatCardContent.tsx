import React from 'react'
import { Heading, Flex, Text } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; }> = ({
  headingText,
  bodyText,
  
}) => {


  return (
    <Flex
      minHeight={[null, null, null, '50px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-start"
      mt={[null, null, null, '15px']}
    >
      <Heading color="#fff" scale="lg" mb="10px" textAlign="center">
        {headingText}
      </Heading>
      <Text color="#fff" textAlign="center">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
