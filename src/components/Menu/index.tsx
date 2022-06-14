import React from 'react'
// import { Menu as UikitMenu  } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useProfile } from 'state/profile/hooks'
import { useApiInfo } from 'state/apiInfo/hooks'

import config from './config'
import UserMenu from './UserMenu'
// import GlobalSettings from './GlobalSettings'
import MenuTest from './Menu/Menu'


const Menu = (props) => {
  const { isDark } = useTheme()
  const apiInfo=useApiInfo()
  const playPriceUsd = apiInfo.response.price
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <MenuTest
    
      userMenu={<UserMenu />}
      isDark={isDark}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={playPriceUsd}
      links={config(t)}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      {...props}
    />
  )
}

export default Menu
