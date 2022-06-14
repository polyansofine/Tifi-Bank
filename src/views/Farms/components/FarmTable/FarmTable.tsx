import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  userDataReady: boolean
  sortColumn?: string
}

const Container = styled.div`
  width: 100%;
  background:#080b14;
  padding:3% 2% 1%
`
const TitleContainer = styled.div`
  background: #002244;
  position: relative;
  padding: 3% 4% 4%;
  text-align: left;
  font-weight: bold;
`
const TableWrapper = styled.div`
  overflow: visible;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
const TableHeader = styled.thead`
  display:flex;
  justify-content:space-between;
  margin:20px 0 0;
  width:100%;
`
const TableBody = styled.tbody`
  display:block;
  width:100%;
  max-height: 70vh;
  overflow-y: auto;  
`


const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const FarmTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { data, columns, userDataReady } = props

  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <TitleContainer>
        Farm
      </TitleContainer>
      <TableWrapper ref={tableWrapperEl}>
        <StyledTable className="farm-list">
          <TableHeader>
            <tr>
              <th>Pair</th>
              <th>TVL</th>
              <th>APR</th>      
            </tr>                  
          </TableHeader>
          <TableBody>
            {rows.map((row) => {
              return <Row {...row.original} userDataReady={userDataReady} key={`table-row-${row.id}`} />
            })}
          </TableBody>
        </StyledTable>
      </TableWrapper>
      {/* <ScrollButtonContainer>
        <Button variant="text" onClick={scrollToTop}>
          {t('To Top')}
          <ChevronUpIcon color="primary" />
        </Button>
      </ScrollButtonContainer> */}
    </Container>
  )
}

export default FarmTable
