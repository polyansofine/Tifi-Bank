import React from 'react'
import styled from 'styled-components'
import { Link } from '@pancakeswap/uikit'


const WrapperSocial = styled.div`
margin-bottom:10px;
&>*{
  padding:0 5px;
}
`
const StyledLink=styled(Link)`
display:inline-block;
width:32px;
height:32px;

`
const SocialIcon = styled.img`
width:100%;
height:100%;
`

const Social = () => {

  const socials = [
    { label: 'twitter', icon: 'twitter.svg' ,href:'https://twitter.com/polyplaycoin'},
    { label: 'discord', icon: 'discord.svg' ,href:'https://discord.gg/TAgndUz2Fc'},

    { label: 'medium', icon: 'medium.svg' ,href:'https://polyplay.medium.com/'},
    { label: 'telegram', icon: 'telegram.svg' ,href:'https://t.me/PolyPlayGames'},
    { label: 'instagram', icon: 'instagram.svg' ,href:'https://www.instagram.com/polyplay_games/'},
    { label: 'youtube', icon: 'youtube.svg' ,href:'https://polyplay.net/FaYoutubeSquare'},

    { label: 'cmc', icon: 'cmc.svg',href:'https://coinmarketcap.com/currencies/polyplay/' },
    { label: 'coingecko', icon: 'coingecko.svg',href:'https://www.coingecko.com/en/coins/polyplay' },

  ]

  const socialContent = socials.map((item) => (
      <StyledLink external key={item.label} href={item.href} aria-label={item.label} >

      <SocialIcon  src={`/images/social/${item.icon}`} alt={item.label} />
      </StyledLink>

  ))
  return (

      <WrapperSocial>{socialContent}</WrapperSocial>

  )
}

export default Social
