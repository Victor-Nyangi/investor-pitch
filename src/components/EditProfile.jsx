import { Dialog, Transition } from '@headlessui/react'
import React, { memo, Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from "../redux/auth/authSlice";
import { PencilIcon } from '@heroicons/react/20/solid';

const EditProfile = ({email}) => {

  let [isOpen, setIsOpen] = useState(false)
  const [profileData, setProfileData] = useState({
    role: "",
    email: email,
    job_type: "",
    salary: 0,
    dob: "1900-10-10",
    address: "",
    about: "",
    part_time: "",
    updated_date: Date.now,
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()
  const clear = () => {
    setProfileData({
        role: "",
        job_type: "",
        email: email,
        salary: 0,
        dob: "",
        address: "",
        about: "",
        part_time: "",
      updated_date: Date.now,
    });
    setStatus("");
    setMessage("");
  };

  const editProfile = (e) => {
    e.preventDefault();
    setStatus("success");
    setMessage("Updating profile, please wait.....");
    console.log({ 'message': message, 'status': status })

    dispatch(updateProfile({ ...profileData }))
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
        <div className="relative flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-black hover:bg-black hover:text-white shadow-sm hover:bg-gray-50" aria-label="Edit Profile"
              title="Add Funds"
            >              <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-BLACK" aria-hidden="true" />

              Edit
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
                          Edit Profile
                        </Dialog.Title>
                        <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                          onClick={closeModal}>Cancel</button>
                      </div>
                      <div className="mt-2">
                        <form action="put" onSubmit={editProfile} className="my-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Role
                              </label>{" "}
                              <input
                                type="text"
                                id="role"
                                name="role"
                                required
                                value={profileData.role}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    role: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Job Type
                              </label>{" "}
                              <input
                                type="text"
                                id="job_type"
                                placeholder="Job Type(Remote/On site)"
                                name="job_type"
                                value={profileData.job_type}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    job_type: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Address
                              </label>{" "}
                              <input
                                type="text"
                                id="address"
                                placeholder="Address"
                                name="address"
                                value={profileData.address}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    address: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-3 mt-4">
                            <div>
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Total
                              </label>{" "}
                              <input
                                type="number"
                                id="salary"
                                placeholder="Salary/Income estimate"
                                min={0}
                                name="salary"
                                value={profileData.salary}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    salary: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                            </div>
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Date of Birth
                              </label>{" "}
                              <input
                                type="date"
                                id="dob"
                                placeholder="Date of Birth"
                                name="dob"
                                value={profileData.dob}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    dob: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                Part time job
                              </label>{" "}
                              <input
                                type="text"
                                id="part_time"
                                placeholder="Part time job"
                                name="part_time"
                                value={profileData.part_time}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    part_time: e.target.value,
                                  })
                                }
                                className="rounded-md shadow-sm p-2 border-gray-600 border block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              />
                            </div>
                          </div>

                          <div className="col-span-8 mt-4">
                            <div>
                              <label className="block font-medium text-sm mb-2 text-gray-700">
                                About
                              </label>
                              <textarea
                                className="form-control mt-1 block w-full shadow-sm sm:text-sm border p-2 border-black rounded-md"
                                rows={5}
                                id="about"
                                name="about"
                                placeholder="About"
                                value={profileData.about}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    about: e.target.value,
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
  )
}

export default memo(EditProfile)