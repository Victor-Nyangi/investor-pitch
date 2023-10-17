import React, { useRef, useCallback, useMemo } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector, useDispatch } from "react-redux";
import { getReport, reset } from '../redux/reports/reportSlice';
import Spinner from '../components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reports = () => {
  // const componentRef = createRef();
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const determineDate = useCallback(() => {
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const date1 = today.getDate();

    const month = months[today.getMonth()];
    const day = days[today.getDay()];
    const year = today.getFullYear();

    return { month, date1, day, year };
  }, []);


  const current_date = useMemo(() => determineDate(), [determineDate]);

  const dispatch = useDispatch();
  const { report, isLoading, isError, message } = useSelector(
    (state) => state.reports
  );
  const { user } = useSelector((state) => state.auth)

  const random_num = Math.floor(Math.random() * 1000) + 1;

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div>

      <ToastContainer />
      <div ref={componentRef}>

        <div className="mx-auto p-16">
          <div className="flex items-center justify-between mb-8 px-3">
            <div>
              <span className="text-2xl">Report #</span>{`: ${random_num}-${current_date?.year}`}<br />
              <span>Date</span>{` : ${current_date.day} ${current_date.year} ${current_date.date1} ${current_date.month} `}<br />
            </div>
            <div className="text-right">
              <img src="https://www.stenvdb.be/assets/img/email-signature.png" alt="pic" />
            </div>
          </div>

          <div className="flex justify-between mb-8 px-3">
            <div>
              Quarter 1<br />
              Quarter 2<br />
              Quarter 3<br />
              Quarter 4<br />

            </div>
            <div className="text-right">
            {'USD 40,000 - USD 400,000'}<br />
            {'USD 180,000 - USD 290,000'}<br />
              {`USD 50,000 - USD 300,000`}<br />
              {'USD 70,000 - USD 200,000'}
            </div>
          </div>

          <div className="border border-t-2 border-gray-200 mb-8 px-3"></div>

          <div className="mb-8 px-3">
            <p>{user?.about}</p>
          </div>

          <div className="text-4xl font-bold text-blue-700 text-left px-3">
            <span>Targets per category</span>
          </div>
          {/* Expenses per category */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">


              {report &&
                Object.entries(report?.expenses_per_category).map((category, index) => (
                  <div className="px-12 text-center sm:px-0" key={index}>
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                      {category[0]}
                    </h6>
                    <div className="mb-2 text-red-600 font-bold">
                      {`KES ${category[1]}`}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Income</div>
            <div className="text-right font-medium">{`USD 45000`}</div>
          </div>
          <div className="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Expenses</div>
            <div className="text-right font-medium">{`USD 65000`}</div>
          </div>
          <div className="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Investments</div>
            <div className="text-right font-medium">USD 77000</div>
          </div>
          <div className="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Profits</div>
            <div className="text-right font-medium">USD 198000</div>
          </div>

          <div className="flex justify-between items-center mb-2 px-3">
            <div className="text-2xl leading-none"><span className="">Net</span>:</div>
            <div className="text-2xl text-right font-medium">{`USD: 125000`}</div>
          </div>

          <div className="flex mb-8 justify-end px-3">
            <div className="text-right w-1/2 px-0 leading-tight">
              <small className="text-xs">Nullam auctor, tellus sit amet eleifend interdum, quam nisl luctus quam, a tincidunt nisi eros ac dui. Curabitur leo ipsum, bibendum sit amet suscipit sed, gravida non lectus. Nunc porttitor lacus sapien, nec congue quam cursus nec. Quisque vel vehicula ipsum. Donec condimentum dolor est, ut interdum augue blandit luctus. </small>
            </div>
          </div>

          <div className="mb-8 text-4xl text-center px-3">
            <span>Thank you!</span>
          </div>

          <div className="text-center text-sm px-3">
            Generated by ∖ Team Z
          </div>
        </div>

      </div>
      <div className=" text-center px-3">
        <button className='hover:bg-blue-400 mb-8 text-xl rounded-md bg-green-500 text-black text-sm font-medium pl-2 pr-3 py-2 shadow-sm' onClick={handlePrint}>Print this out!</button>
      </div>
    </div>)
};
export default Reports;
