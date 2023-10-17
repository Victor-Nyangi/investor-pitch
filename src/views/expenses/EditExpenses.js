import React, { useState } from "react";
import {  useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { getExpense, editExpense } from "../../redux/expense/expenseSlice";
import SectionHeader from "../../components/SectionHeader";
const EditExpense = () => {
  let params = useParams();

  const expense_id = params.expense_id;

  const [expenseData, setExpenseData] = useState({
    id: expense_id,
    name: "",
    description: "",
    category : "",
    total: 0,
    updated_date: Date.now,
  });

  const [res_message, setMessage] = useState("");
  const [status, setStatus] = useState("");


  const dispatch = useDispatch()


  const { categories, isLoading, isError, message} = useSelector((state) => state.categories)



  const updateExpense = (e) => {
    e.preventDefault();

    setExpenseData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

    setStatus("success");
    setMessage("Editing expense, please wait.....");
    console.log(expenseData,"expeneses sdata")

    dispatch(editExpense({ ...expenseData }))

  };

  const updateField = (e) => {
    e.preventDefault();

    setExpenseData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // if (!expense) {
  //   return <Spinner />;
  // }
  return (
    <>
        <SectionHeader title={'Edit Expense'} main_page={'dashboard/expenses'} input_field={false} data_title={'Expenses'} />

        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mx-8 mb-8 bg-white rounded-lg shadow-md">
          {
            expenseData.name &&
          <form action="post" onSubmit={updateExpense}>
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="text"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                  name="name"
                  value={expenseData?.name}
                  onChange={updateField}

                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Category
                </label>

                <select
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="category"
                  value={expenseData?.category}
                  onChange={updateField}

                >
                  <option value="">-- Select Category --</option>
                  {categories &&
                    categories.map((category, id) => (
                      <option
                        key={id}
                        value={category.name}
                      >{category.name}</option>
                    ))}
                </select>
              </div>


            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="description"
                name="description"
                rows={3}
                value ={expenseData?.description}
                onChange={updateField}
              >
                </textarea>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
              <button type="button"
              disabled
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
          }
        </div>
      </>
  );
};

export default EditExpense;
