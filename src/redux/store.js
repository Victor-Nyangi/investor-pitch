import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categorySlice'
import incomeReducer from './income/incomeSlice'
import authReducer from './auth/authSlice'
import expenseReducer from './expense/expenseSlice'
import statementReducer from './statements/statementSlice'
import transactionReducer from './transactions/transactionSlice'
import reportReducer from './reports/reportSlice'
import userReducer from './users/userSlice'

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    incomes: incomeReducer,
    expenses: expenseReducer,
    transactions: transactionReducer,
    users: userReducer,
    statements: statementReducer,
    reports: reportReducer,
    auth: authReducer
  },
});
