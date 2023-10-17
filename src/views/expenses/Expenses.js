import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import SectionHeader from "../../components/SectionHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';
// import SectionHeader from "../../components/SectionHeader";
// import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
// let PageSize = 10;

const Expenses = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentTableData, setTableData] = useState([])


  // const onPageChangeTable = (p) => {
  //   setPageTable(p);
  // };

  const { expenses, isLoading, isError, message } = useSelector(
    (state) => state.expenses
  );


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
      <ToastContainer />

        <SectionHeader title={'Expenses'} main_page={'dashboard/expenses/add'} input_field={true} data_title={'expenses'} />

        <div className="mx-6 overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="sticky left-0 px-4 py-2 text-left bg-gray-50">

                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Category
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Description
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Amount
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Date
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {expenses &&
                expenses.map((expense, index) => (
                  <tr key={expense._id}>
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {expense?.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {expense?.category}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {expense?.description}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {expense?.total}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {moment(expense?.updated_date).format("MMMM Do YYYY")}
                    </td>
                    <td className="px-4 py-2 text-gray-700">

                      <Link
                        className="my-6 text-xs"
                        to={`/dashboard/edit/expense/${expense._id}`}
                      >
                        <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <Pagination
        currentPage={currentPage}
        totalCount={expenses.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      </section>
    </>
  );
};

export default Expenses
