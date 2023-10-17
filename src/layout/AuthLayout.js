import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from '../views/Dashboard';
import Reports from "../views/Reports";
import Expenses from '../views/expenses/Expenses';
import Expenses2 from "../views/Expenses2";
import AddExpense from '../views/expenses/AddExpense';
import Statements from "../views/Statements";
import NotFound from "../views/NotFound";
import Footer from "../components/Footer";
import Incomes from "../views/income/Incomes";


const AuthLayout = () => {

    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    const user = localStorage.getItem('user');



    return (
        <>
            <Header />
            <main>
                {/* <Suspense fallback={<ThemedSuspense />}> */}
                <Routes>
                    <Route path="" element={<Dashboard />} />

                    <Route path="/uploads" element={<Incomes />} />
                    <Route path="/questionarres" element={<AddExpense />} />
                    <Route path="/maps" element={<Expenses2 />} />
                    <Route path="/impacts" element={<Statements />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* </Suspense> */}
            </main>
            <Footer />

        </>
    )
}

export default AuthLayout