import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import Hero from './components/Hero'
import MetricsSection from './components/MetricsSection'
import WinSection from './components/WinSection'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'


const StyledHeroSection = styled(PageSection)`
  // padding-top: 16px;
  // background-image: url(/images/home/coming_soon_banner.png);
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  
  ${({ theme }) => theme.mediaQueries.md} {
    //padding-top: 48px;
  }
`
const StyledFooterSection = styled(PageSection)`
  padding :10px !important;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px;
  }
`

const Home: React.FC = () => {

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      {/* <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      >

        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#000"
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="#000"
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> 
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="#ffd600"
        index={2}
        hasCurvedDivider={false}
      >
        <CakeDataRow />
      </PageSection>
      <StyledFooterSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="#000000"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </StyledFooterSection> */}
      <div className="home">
        Coming Soon!
      </div>
    </>
  )
}

export default Home
