import { createReducer, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { ApiInfo, ApiState } from '../types'
import { getInfo } from './helpers'

const initialState: ApiInfo = {
  response: {
    price: 0,
    marketCap: 0,
    maxSupply: 0,
    tradingVolume: 0,
    totalMint: 0,
    totalBurn: 0,
    circulatingSupply: 0,
    priceBnb:0
  },
}

export const fetchCurrentInfo = createAsyncThunk<ApiState>('application/getInfo', async () => {
  const apiInfo = await getInfo()
  return apiInfo
})
export default createReducer(initialState, (builder) =>
  builder.addCase(fetchCurrentInfo.fulfilled, (state, action: PayloadAction<ApiState>) => {
    state.response = { ...action.payload }
  }),
)
