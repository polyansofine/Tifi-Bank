import React from 'react'
import styled from 'styled-components'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
  width:200px;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <img src="/images/loader.svg" alt="loader"/>
    </Wrapper>
  )
}

export default PageLoader
