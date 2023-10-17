import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import statementService from './statementService'

const initialState = {
  statements: [],
  statement: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new statement
export const createStatement = createAsyncThunk(
    'statements/create',
    async (statementData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await statementService.createStatement(statementData)
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

  // Get statements
  export const getStatements = createAsyncThunk(
    'statements/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await statementService.getStatements()
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

    // Get single statement
  export const getStatement = createAsyncThunk(
      'statements/getOne',
      async (id, thunkAPI) => {
        try {
          // const token = thunkAPI.getState().auth.user.token
          return await statementService.getStatement(id)
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

  // Delete statement
  export const deleteStatement = createAsyncThunk(
    'statements/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await statementService.deleteStatement(id)
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

  export const statementSlice = createSlice({
    name: 'statement',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createStatement.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createStatement.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.statements.push(action.payload)
        })
        .addCase(createStatement.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getStatements.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getStatements.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.statements = action.payload
        })
        .addCase(getStatements.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getStatement.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getStatement.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.statement = action.payload
        })
        .addCase(getStatement.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(deleteStatement.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteStatement.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.statements = state.statements.filter(
            (statement) => statement._id !== action.payload.id
          )
        })
        .addCase(deleteStatement.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })

  export const { reset } = statementSlice.actions
  export default statementSlice.reducer
