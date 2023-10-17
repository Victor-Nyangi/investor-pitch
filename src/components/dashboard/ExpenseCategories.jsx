import { Dialog, Transition } from '@headlessui/react'
import React, { memo, Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../redux/categories/categorySlice'
import ExpenseIcons from '../ExpenseIcons'

const ExpenseCategories = ({ categories }) => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    updated_date: Date.now,
  });


  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()

  const clear = () => {
    setCategoryData({
      name: "",
      description: "",
      updated_date: Date.now,
    });
    setStatus("");
    setMessage("");
  };

  const newCategory = (e) => {
    e.preventDefault();
    setStatus("success");
    setMessage("Creating category , please wait.....");
    console.log({ 'message': message, 'status': status })

    dispatch(createCategory({ ...categoryData }))
    setTimeout(() => {
      clear();
      closeModal();
    }, 2000);
  };
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>

      <section className="px-10 py-20 mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Expense Categories</h2>
          <div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Add Category
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
                            className="text-lg font-medium leading-6 text-gray-900">
                            Add Expense Categories
                          </Dialog.Title>
                          <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            onClick={closeModal}>Cancel</button>
                        </div>
                        <div className="mt-2">
                          <form action="POST" onSubmit={newCategory} className="my-4">
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
                                  value={categoryData.name}
                                  onChange={(e) =>
                                    setCategoryData({
                                      ...categoryData,
                                      name: e.target.value,
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
                                  placeholder="Category Description"
                                  value={categoryData.description}
                                  onChange={(e) =>
                                    setCategoryData({
                                      ...categoryData,
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
        </div>

        <p className="mb-16 text-lg text-gray-500">Get insights to dig down into what's powering your growth the most.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 lg:gap-x-24 gap-y-20">

          {
            categories && categories.map((category, index) => (
              <div key={index}>
                <ExpenseIcons name={category.name} />
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">{category?.name}</h3>
                <p className="text-sm text-gray-500">{category?.description}</p>
              </div>
            ))
          }
        </div>

      </section>
    </>
  )
}

export default memo(ExpenseCategories)