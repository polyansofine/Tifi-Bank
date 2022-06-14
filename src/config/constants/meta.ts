import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PlayDex',
  description:
    'The most popular AMM on BSC by user count! Earn PLAY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PlayDex), NFTs, and more, on a platform you can trust.',
  image: 'https://PlayDex.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PlayDex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PlayDex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PlayDex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PlayDex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PlayDex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PlayDex')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('PlayDex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PlayDex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PlayDex')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PlayDex')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('PlayDex')}`,
      }
    default:
      return null
  }
}
