import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import categoryService from './categoryService'

const initialState = {
  categories: [],
  category: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new category
export const createCategory = createAsyncThunk(
    'categories/create',
    async (categoryData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await categoryService.createCategory(categoryData)
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

  // Get categories
  export const getCategories = createAsyncThunk(
    'categories/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await categoryService.getCategories()
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

  export const editCategory = createAsyncThunk(
    'categories/edit',
    async (id, categoryData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await categoryService.editCategory(id, categoryData)
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
    // Get single category
  // export const getCategory = createAsyncThunk(
  //     'categories/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await categoryService.getCategory(id)
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

  // Delete category
  export const deleteCategory = createAsyncThunk(
    'categories/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await categoryService.deleteCategory(id)
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

  export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createCategory.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createCategory.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.categories.push(action.payload)
        })
        .addCase(createCategory.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getCategories.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCategories.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.categories = action.payload
        })
        .addCase(getCategories.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editCategory.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editCategory.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.categories = action.payload
        })
        .addCase(editCategory.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getCategory.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getCategory.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.category = action.payload
        // })
        // .addCase(getCategory.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteCategory.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.categories = state.categories.filter(
            (category) => category._id !== action.payload.id
          )
        })
        .addCase(deleteCategory.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })

  export const { reset } = categorySlice.actions
  export default categorySlice.reducer
