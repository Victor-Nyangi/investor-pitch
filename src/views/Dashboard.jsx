import React, { useMemo, useCallback } from 'react'
import { useSelector } from "react-redux";
import IncomeSection from '../components/dashboard/IncomeSection'
import Statistics from '../components/dashboard/Statistics'
import Transactions from '../components/dashboard/Transactions'
import MonthAnalytics from '../components/dashboard/MonthAnalytics';
import Reports from '../components/dashboard/Reports';
import Timer from '../components/Timer'
import CalloutGrid from '../components/charts/CalloutGrid';
import ExpenseRatioCalculator from '../components/charts/ExpenseRatioCalculator';

const Dashboard = () => {


  const { incomes, total } = useSelector((state) => state.incomes);
  const { transactions } = useSelector((state) => state.transactions);


  const income_data = useMemo(() => incomes, [incomes]);
  const transaction_data = useMemo(() => transactions, [transactions]);
  const income_total = useMemo(() => total, [total]);



  const determineDate = useCallback(() => {
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const date1 = today.getDate();

    const month = months[today.getMonth()];
    const day = days[today.getDay()];

    return { month, date1, day };
  }, []);

  const current_date = useMemo(() => determineDate(), [determineDate]);



  return (
    <>
      <MonthAnalytics />
      <IncomeSection incomes={income_data} total={income_total} current_date={current_date} />
      <Statistics />
      <div className="mx-24">
        <ExpenseRatioCalculator />
      </div>
      <Transactions transactions={transaction_data} />
      <section className="mx-24">
        <CalloutGrid />
      </section>

      <Reports />

    </>
  )
}

export default Dashboard