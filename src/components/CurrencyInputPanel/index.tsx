import React from 'react'
import { Currency, Pair } from '@pancakeswap/sdk'
import { Button, ChevronDownIcon, Text, useModal, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'

// import { RowBetween } from '../Layout/Row'
import { Input as NumericalInput } from './NumericalInput'


const StyledButton=styled(Button)`
color:#ffd600;
`

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius:5px;
`
const CurrencySelectButton = styled(Button).attrs({ variant: 'text'})`
  padding: 0 0.5rem;
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  z-index: 1;
`
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 5px;
  //box-shadow: ${({ theme }) => theme.shadows.inset};
  padding:18px 1rem 14px;
  position:relative;
  background-color:#000;
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  // const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()
  const translatedLabel = label || t('Input')

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (
    <InputPanel id={id}>
      <Container hideInput={hideInput}>
        
        <InputRow style={hideInput ? { padding: '0', borderRadius: '8px' } : {}} selected={disableCurrencySelect}>
          <CurrencySelectButton
            selected={!!currency}
            className="open-currency-select-button"
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal()
              }
            }}
          >
            <Flex alignItems="center" justifyContent="space-between" className="from">
              <div className="icon">
                {pair ? (
                  <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
                ) : currency ? (
                  <CurrencyLogo currency={currency} size="24px" />
                ) : <img src="/images/main/no-select-coin.png" className="no-select" alt="No-coin"/>}
              </div>
              <div className="coin">
                <div className="above">
                  {!hideInput && (
                    <LabelRow>
                      {/* <RowBetween> */}
                        <Text fontSize="14px" >{translatedLabel}</Text>
                        {/* {account && (
                          <Text onClick={onMax} fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
                            {!hideBalance && !!currency && selectedCurrencyBalance
                              ? t('Balance: %amount%', { amount: selectedCurrencyBalance?.toSignificant(6) ?? '' })
                              : ' -'}
                          </Text>
                        )} */}
                      {/* </RowBetween> */}
                    </LabelRow>
                  )}                  
                </div>
                <div className="below">
                  {pair ? (
                    <Text id="pair">
                      {pair?.token0.symbol}:{pair?.token1.symbol}
                    </Text>
                  ) : (
                    <Text id="pair">
                      {(currency && currency.symbol && currency.symbol.length > 20
                        ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                            currency.symbol.length - 5,
                            currency.symbol.length,
                          )}`
                        : currency?.symbol) || <span className='select'>{t('Select a currency')}</span> }
                    </Text>
                  )}
                  {!disableCurrencySelect && <ChevronDownIcon />}                  
                </div>
              </div>
              
            </Flex>
          </CurrencySelectButton>
          {!hideInput && (
            <>
              <NumericalInput
                className="token-amount-input"
                value={value}
                onUserInput={(val) => {
                  onUserInput(val)
                }}
              />
              {account && currency && showMaxButton && label !== 'To' && (
                <StyledButton onClick={onMax} scale="sm" variant="text" >
                  MAX
                </StyledButton>
              )}
            </>
          )}
          
        </InputRow>
    
      </Container>
    </InputPanel>
  )
}
