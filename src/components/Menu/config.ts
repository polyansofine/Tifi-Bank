import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'


const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: '/images/menu/home.png',
    href: '/',
  },
  {
    label: t('Farm'),
    icon: '/images/menu/farm.png',
    href: '/farms',
  },
  {
    label: t('Swap'),
    icon: '/images/menu/swap.png',
    href: '/swap',
  },
  {
    label: t('Stake'),
    icon: '/images/menu/stake.png',
    href: '/stake',
  },
  {
    label: t('Lend'),
    icon: '/images/menu/lend.png',
    href: '/lend',
  },
  {
    label: t('Analysis'),
    icon: '/images/menu/analysis.png',
    href: '/analysis',
  },

  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: 'https://pancakeswap.info',
  // },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Contact'),
  //       href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@playdex.com',
  //     },
  //     // {
  //     //   label: t('Voting'),
  //     //   href: '/voting',
  //     // },
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/polyplaygames/',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://polyplay.medium.com/',
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://polyplay.medium.com/',
  //     },
  //     {
  //       label: t('Merch'),
  //       href: 'https://shop.polyplay.net/',
  //     },
  //   ],
  // },
  
]

export default config
