import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import incomeService from './incomeService'

const initialState = {
  incomes: [],
  income: null,
  total: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new income
export const createIncome = createAsyncThunk(
    'incomes/create',
    async (incomeData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await incomeService.createIncome(incomeData)
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

  // Get incomes
  export const getIncomes = createAsyncThunk(
    'incomes/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await incomeService.getIncomes()
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

    // Get few incomes
    export const getFewIncomes = createAsyncThunk(
      'incomes/getFew',
      async (_, thunkAPI) => {
        try {
          // const token = thunkAPI.getState().auth.user.token
          return await incomeService.getFewIncomes()
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

  export const editIncome = createAsyncThunk(
    'incomes/edit',
    async (id, incomeData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await incomeService.editIncome(id, incomeData)
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
    // Get single income
  // export const getIncome = createAsyncThunk(
  //     'incomes/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await incomeService.getIncome(id)
  //       } catch (error) {
  //         const message =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()
  //         return thunkAPI.rejectWithValue(message)
  //       }
  //     }
  //   )

  // Delete income
  export const deleteIncome = createAsyncThunk(
    'incomes/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await incomeService.deleteIncome(id)
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

  export const incomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createIncome.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createIncome.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.incomes.push(action.payload)
        })
        .addCase(createIncome.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getIncomes.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getIncomes.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.incomes = action.payload.incomes
          state.total = action.payload.total
        })
        .addCase(getIncomes.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getFewIncomes.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getFewIncomes.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.incomes = action.payload.incomes
          state.total = action.payload.total
        })
        .addCase(getFewIncomes.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editIncome.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editIncome.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.incomes = action.payload
        })
        .addCase(editIncome.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getIncome.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getIncome.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.income = action.payload
        // })
        // .addCase(getIncome.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteIncome.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteIncome.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.incomes = state.incomes.filter(
            (income) => income._id !== action.payload.id
          )
        })
        .addCase(deleteIncome.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })

  export const { reset } = incomeSlice.actions
  export default incomeSlice.reducer
