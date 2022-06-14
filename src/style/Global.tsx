import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
  }
  body {
    background-color: #003399;

    img {
      height: auto;
      max-width: 100%;
    }
    color:white;
  }
  .container-fluid{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  #join-pool-button{
    background-color:#ffd600 !important;
    color:#000 !important;
  }
  #import-pool-link{
    color:#ffd600 !important;
    border-color:#ffd600 !important;
  }
  .menu-class .menu-title {
    display: flex;
    padding: 40px 0 3.5rem 1.5rem;
  }
  .menu-title img {
    width: 90px;
  }
  .menu-title .title {
    padding: 10px 0 0 0.3rem;
    font-size: 32px;
    font-weight: bold;
    color: #00b5ff;
  }
  .menu-class .menu-item.active {
    background-color: #0066cc;
    color: white;
  }
  .menu-item .label{
    margin-left: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  .menu-class .net{
    font-size:18px;
    font-weight:bold;
    color: #828282;
  }
  .menu-class .net img{
    margin-right:15px;
  }
  .menu-class .net:hover{
    text-decoration:none;
  }
  .no-select{
    width:24px;
  }
  .swap .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom:4rem;
  }
  .swap .flex h1{
    font-size: 36px;
    font-weight: 600;
    margin: 6px 0 10px;
  }
  .swap .flex .hand {
    background-color: #262834;
    padding: 7px;
    border-radius: 10px;
    cursor:pointer;
  }
  .swap .section {
    border-radius: 10px;
    border: 1px solid #262834;
    padding: 4% 3% 8%;
    background-color: #262834;
    margin: 8% 0 0;
  }
  .swap .from {
    border-radius: 10px;
    display: flex;
  }
  .swap .icon svg, .swap .icon img {
    width: 48px;
    height: 48px;
    margin: 0px 15px 0 0;
  }
  .swap .coin {
    min-width: 180px;
  }
  .swap .coin .below{
    display:flex;
  }
  .below #pair{
    font-size:26px;
  }
  .below #pair .select{
    font-size: 16px;
    vertical-align: text-top;
    line-height: 1.9;
  }
  .swap .token-amount-input{
    font-size:26px;
  }
  #swap-page .connect{
    background-color: #9f9fa2;
    border-radius: 5px;
    width: 100%;
    padding: 3%;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    color:black;
  }
  .farm{
    background-color: #003399;
    text-align:center;
    font-size:40px;
    color:white;
    padding-top:100px;
    min-height:100vh;
  }
  .farm .farm-list thead tr{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .farm .farm-list thead th{    
    padding:0 40px;:
  }
  .farm .farm-list .action{
    display:flex;
  }
  .farm .farm-list .action td{
    width:100%;
  }
  .token-pair div:nth-child(1){
    width: 50%;
    height: 100%;
    right: 5px;
    z-index: 4;
  }

  @media (min-width: 768px){
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

`

export default GlobalStyle
