import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  // border-radius: 5px;
  max-width: 700px;
  padding:3% 3% 2%;
  width: 100%;
  z-index: 1;
  background-color: #0e111a;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
