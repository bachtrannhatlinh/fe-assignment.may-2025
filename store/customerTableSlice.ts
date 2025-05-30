import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TableState {
  page: number
  pageSize: number
  sortBy: string
  sortOrder: 'asc' | 'desc'
  filters: Record<string, string>
}

const initialState: TableState = {
  page: 1,
  pageSize: 10,
  sortBy: 'id',
  sortOrder: 'asc',
  filters: {},
}

const customerTableSlice = createSlice({
  name: 'customerTable',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setSort(state, action: PayloadAction<{ sortBy: string; sortOrder: 'asc' | 'desc' }>) {
      state.sortBy = action.payload.sortBy
      state.sortOrder = action.payload.sortOrder
    },
    setFilter(state, action: PayloadAction<{ key: string; value: string }>) {
      state.filters[action.payload.key] = action.payload.value
      state.page = 1
    },
    resetFilters(state) {
      state.filters = {}
      state.page = 1
    },
  },
})

export const { setPage, setSort, setFilter, resetFilters } = customerTableSlice.actions
export default customerTableSlice.reducer