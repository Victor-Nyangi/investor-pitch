import { Dialog, Transition } from '@headlessui/react'
import React, { memo, Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createIncome } from "../../redux/income/incomeSlice";
import { user_id } from '../../redux/utils/creds';

const IncomeSection = ({ incomes, total, current_date }) => {

  let [isOpen, setIsOpen] = useState(false)
  const [incomeData, setIncomeData] = useState({
    name: "",
    description: "",
    total: 0,
    user_id: user_id,
    updated_date: Date.now,
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()
  const clear = () => {
    setIncomeData({
      name: "",
      description: "",
      total: 0,
      updated_date: Date.now,
    });
    setStatus("");
    setMessage("");
  };

  const newIncome = (e) => {
    e.preventDefault();
    setStatus("success");
    setMessage("Adding funds, please wait.....");
    console.log({ 'message': message, 'status': status })

    dispatch(createIncome({ ...incomeData }))
    setTimeout(() => {
      clear();
      closeModal();
    }, 2000);
  };

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="flex items-center mb-6 lg:w-5/6 lg:mb-0">
          <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg mr-8">
          <div className="block rounded-t overflow-hidden  text-center ">
            <div className="bg-green-600 text-white py-1">
            {current_date.month}
            </div>
            <div className="pt-1 border-l border-r border-white bg-white">
              <span className="text-5xl font-bold leading-tight">
                {current_date.date1}
              </span>
            </div>
            <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 mb-4">
              <span className="text-sm">
                {current_date.day}
              </span>
            </div>
          </div>
        </div>
            <div className="flex items-center justify-center w-12 h-12 mr-5 rounded-full bg-indigo-50 sm:w-20 sm:h-24 xl:mr-10 xl:w-24 xl:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
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
            <h3 className="text-3xl font-extrabold sm:text-4xl xl:text-4xl">
              {`Ksh ${total}`}
            </h3>
          </div>



          <div className="lg:w-1/6 flex space-between">
            <span className="text-gray-800 mr-4 text-center">
              Date
            </span>
            <select name="" id="">
              <option value="">2010</option>
            </select>
            <select name="" id="">
            <option value="">Jan</option>
            </select>
          </div>
        </div>
      </div>

      <section className="px-10 py-10 mx-auto max-w-7xl">

        <div className="relative flex items-center justify-between">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Incomes</h2>
          <div>
            <button
              type="button"
              onClick={openModal}
              id="add"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              aria-label="Add Funds"
              title="Add Funds"
            >
              Add Funds
            </button>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeModal}
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div className="relative flex items-center justify-between">
                        <Dialog.Title
                          as="h3"
                          id="add"
                          className="text-lg font-medium leading-6 text-gray-900">
                          Add Income Funds
                        </Dialog.Title>
                        <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                          onClick={closeModal}>Cancel</button>
                      </div>
                      <div className="mt-2">
                        <form action="POST" onSubmit={newIncome} className="my-4">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Name
                              </label>{" "}
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={incomeData.name}
                                onChange={(e) =>
                                  setIncomeData({
                                    ...incomeData,
                                    name: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Total
                              </label>{" "}
                              <input
                                type="number"
                                id="total"
                                placeholder="Total"
                                name="total"
                                value={incomeData.total}
                                onChange={(e) =>
                                  setIncomeData({
                                    ...incomeData,
                                    total: e.target.valueAsNumber,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                          </div>

                          <div className="col-span-8 mt-4">
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Description
                              </label>
                              <textarea
                                className="form-control mt-1 block w-full shadow-sm sm:text-sm border p-2 border-black rounded-md"
                                rows={5}
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={incomeData.description}
                                onChange={(e) =>
                                  setIncomeData({
                                    ...incomeData,
                                    description: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex block items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>

                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
        {
          incomes &&
          <section className="grid grid-cols-1 gap-20 px-4 py-16 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-purple-700" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">{incomes[0]?.name}</h3>
              <p className="text-base mb-4 leading-relaxed text-gray-600">
                {incomes[0]?.description}
              </p>
              <span className='mt-2 text-lg md:text-xl font-bold text-green-600'>{`Ksh ${incomes[0]?.total ?? 0}`}</span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-purple-700" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
              </svg>
              <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">{incomes[1]?.name}</h3>
              <p className="text-base mb-4 leading-relaxed text-gray-600">
                {incomes[1]?.description}
              </p>
              <span className='mt-2 text-lg md:text-xl font-bold text-green-600'>{`Ksh ${incomes[1]?.total ?? 0}`}</span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-purple-700" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">{incomes[2]?.name}</h3>
              <p className="text-base mb-4 leading-relaxed text-gray-600">
                {incomes[2]?.description}
              </p>
              <span className='mt-2 text-lg md:text-xl font-bold text-green-600'>{`Ksh ${incomes[2]?.total ?? 0}`}</span>
            </div>
          </section>
        }

      </section>
    </div>
  )
}

export default memo(IncomeSection)