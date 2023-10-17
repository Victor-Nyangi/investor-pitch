import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import reportService from './reportService'

const initialState = {
  report: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

  // Get reports
  export const getReport = createAsyncThunk(
    'reports/getOne',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await reportService.getReport()
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

    // Get single report
  export const getCustomReport = createAsyncThunk(
      'reports/getCustomOne',
      async (filter, thunkAPI) => {
        try {
          // const token = thunkAPI.getState().auth.user.token
          return await reportService.getCustomReport(filter)
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


  export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      .addCase(getReport.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getReport.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.report = action.payload
      })
      .addCase(getReport.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCustomReport.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCustomReport.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.report = action.payload
      })
      .addCase(getCustomReport.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    },
  })

  export const { reset } = reportSlice.actions
  export default reportSlice.reducer
