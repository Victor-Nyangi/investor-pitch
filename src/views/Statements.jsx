import React, { useState, Fragment, useMemo, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import Statistics from "../components/dashboard/Statistics";
import ExpenseRatioCalculator from "../components/charts/ExpenseRatioCalculator";
import Transactions from "../components/dashboard/Transactions";
import CalloutGrid from "../components/charts/CalloutGrid";
// import Pagination from "../../components/Pagination";
// let PageSize = 10;

const Statements = () => {

  const { transactions } = useSelector((state) => state.transactions);


  const transaction_data = useMemo(() => transactions, [transactions]);


  return (
    <>
      <section>
        <>
          <div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
            <section className="px-4 py-12 mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center justify-between mb-16 space-y-1">
                <h2 className="text-4xl font-bold text-gray-900">Impact Overview</h2>
                <label>
                  <span className="sr-only">Select date range</span>
                  <select className="form-select form-select-sm">
                    <option>Last 7 days</option>
                    <option>Blue</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-6 card shadow-lg rounded border">
                  <div className="flex items-start justify-between">
                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">23,455</h2>
                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      <span>40%</span>
                    </span>
                  </div>
                  <p className="text-sm leading-none text-gray-600">Priority Areas</p>
                </div>
                <div className="p-6 card shadow-lg rounded border">
                  <div className="flex items-start justify-between">
                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">55</h2>
                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      <span>240%</span>
                    </span>
                  </div>
                  <p className="text-sm leading-none text-gray-600">Target Groups</p>
                </div>
                <div className="p-6 card shadow-lg rounded border">
                  <div className="flex items-start justify-between">
                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">129,752</h2>
                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                        <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                      </svg>
                      <span>22%</span>
                    </span>
                  </div>
                  <p className="text-sm leading-none text-gray-600">SDGS</p>
                </div>
                <div className="p-6 card shadow-lg rounded border">
                  <div className="flex items-start justify-between">
                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">1,255</h2>
                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      <span>10%</span>
                    </span>
                  </div>
                  <p className="text-sm leading-none text-gray-600">Investments</p>
                </div>
              </div>
            </section>
          </div>
          <Statistics />
          <div className="mx-24">
            <ExpenseRatioCalculator />
          </div>
          <Transactions transactions={transaction_data} />
          <section className="mx-24">
            <CalloutGrid />
          </section>
        </>
      </section>
    </>
  );
};

export default Statements
