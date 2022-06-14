import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { State, ApiInfo } from '../types'
import {fetchCurrentInfo} from './reducer'

export const useFetchApiInfo = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
   dispatch(fetchCurrentInfo())
  }, [dispatch])
}

export const useApiInfo = () => {
  const apiInfo: ApiInfo = useSelector((state: State) => state.apiInfo)
  return apiInfo
}
