import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import transactionService from './transactionService'

const initialState = {
  transactions: [],
  transaction: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


  // Get transactions
  export const getTransactions = createAsyncThunk(
    'transactions/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await transactionService.getTransactions()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

    // Get transactions
    export const getFewTransactions = createAsyncThunk(
      'transactions/getFew',
      async (count, _, thunkAPI) => {
        try {
          // const token = thunkAPI.getState().auth.user.token
          return await transactionService.getFewTransactions(count)
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          return thunkAPI.rejectWithValue(message)
        }
      }
    )

    // Get single transaction
    export const getTransaction = createAsyncThunk(
      'transactions/getOne',
      async (id, thunkAPI) => {
        try {
          // const token = thunkAPI.getState().auth.user.token
          return await transactionService.getTransaction(id)
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          return thunkAPI.rejectWithValue(message)
        }
      }
    )

  export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getTransactions.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getTransactions.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.transactions = action.payload
        })
        .addCase(getTransactions.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getFewTransactions.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getFewTransactions.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.transactions = action.payload
        })
        .addCase(getFewTransactions.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getTransaction.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getTransaction.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.transaction = action.payload
        })
        .addCase(getTransaction.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })

  export const { reset } = transactionSlice.actions
  export default transactionSlice.reducer
