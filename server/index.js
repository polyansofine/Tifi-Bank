const express = require('express')
const cors = require('cors')
const Web3 = require('web3')
const BigNumber = require('bignumber.js')
const rp = require('request-promise')

const PolyplayAbi = require('./abi')

const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'))
const port = 4500

const address = '0x9a3077f34cc30f9bf8e93a0369119bae0113d9cc'
const app = express()
app.use(cors())

app.get('/data', async (req, res) => {
  try {
    const requestOptionsPlay = {
      method: 'GET',
      uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=polyplay',
      json: true,
      gzip: true,
    }
    // {
    //   method: 'GET',
    //   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    //   qs: {
    //     start: '1',
    //     limit: '5000',
    //     convert: 'USD',
    //   },
    //   headers: {
    //     'X-CMC_PRO_API_KEY': '9ee35cd4-5d90-42f7-8b8a-6db877c8a9d7',
    //   },
    //   json: true,
    //   gzip: true,
    // }
    const requestOptionsCoingecko = {
      method: 'GET',
      uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin',
      json: true,
      gzip: true,
    }
    const responsePlay = await rp(requestOptionsPlay)
    console.log(responsePlay)

    // const data = responseCoinMarket.data.find((item) => item.name === 'PolyPlay')

    const dataCoingecko = await rp(requestOptionsCoingecko)
    const contract = new web3.eth.Contract(PolyplayAbi, address)
    let totalBurn = await contract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()
    totalBurn = web3.utils.fromWei(totalBurn, 'ether')

    const response = {
      price: responsePlay[0].current_price,
      marketCap: responsePlay[0].current_price * responsePlay[0].total_supply,
      maxSupply: responsePlay[0].total_supply,
      tradingVolume: responsePlay[0].low_24h,
      totalMint: 0,
      totalBurn: totalBurn,
      circulatingSupply: 0,
      priceBnb: dataCoingecko[0].current_price,
    }
    res.send(response)
  } catch (error) {
    res.send('Error happend' + error)
  }
})

app.listen(port, () => console.log(`http://localhost:${port}`))
