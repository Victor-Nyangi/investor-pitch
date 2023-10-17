import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { user_id } from "../../redux/utils/creds";

const AddExpense = () => {
  const [expenseData, setExpenseData] = useState({
    name: "",
    description: "",
    category: "",
    total: 0,
    user_id: user_id,
    updated_date: Date.now,
  });



  const priority_areas = [
    { name: "Prioirty area 1" },
    { name: "Prioirty area 2" },
    { name: "Prioirty area 3" }
  ]

  const sdgs = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation, and Infrastructure",
    "Reduced Inequality",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace and Justice Strong Institutions",
    "Partnerships for the Goals"
  ];

  const unSdgs = sdgs.map(sdg => ({ name: sdg }));

  return (
    <>
      <SectionHeader title={'Questionarres'} input_field={false} data_title={'Questionarres'} />

      <div className="px-4 mx-8 py-3 mb-8 bg-white rounded-lg shadow-md">
        <form action="post">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Priority Areas
            </label>

            <select
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="category"
            >
              <option value="">-- Select Priority Area --</option>
              {priority_areas &&
                priority_areas.map((category, id) => (
                  <option
                    key={id}
                    value={category.name}
                  >{category.name}</option>
                ))}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select 1st SDG
              </label>

              <select
                name="sdg1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="sdg1"
              >
                <option value="">-- Select SDG --</option>
                {unSdgs &&
                  unSdgs.map((sdg, id) => (
                    <option
                      key={id}
                      value={sdg.name}
                    >{sdg.name}</option>
                  ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select 2nd SDG
              </label>

              <select
                name="sdg2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="sdg2"
              >
                <option value="">-- Select SDG --</option>
                {unSdgs &&
                  unSdgs.map((sdg, id) => (
                    <option
                      key={id}
                      value={sdg.name}
                    >{sdg.name}</option>
                  ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select 3rd SDG
              </label>

              <select
                name="sdg3"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="sdg3"
              >
                <option value="">-- Select SDG --</option>
                {unSdgs &&
                  unSdgs.map((sdg, id) => (
                    <option
                      key={id}
                      value={sdg.name}
                    >{sdg.name}</option>
                  ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Please Describe your 1st SDG
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="description"
                name="description"
                rows={3}

              >
              </textarea>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Please Describe your 2nd SDG
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="description"
                name="description"
                rows={3}
              >
              </textarea>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Please Describe your 3rd SDG
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="description"
                name="description"
                rows={3}
              >
              </textarea>
            </div>
          </div>
          <p className="font-bold my-4 text-black md:text-lg">
            Target Groups
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Vulnerability Target group
              </label>

              <select
                name="vul"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="vul"
              >
                <option value="">-- Select Vulnerability Target Group --</option>
                <option>Homeless people</option>
                <option>People with disabilities</option>
                <option>People with lower income</option>
                <option>Refugees</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Gender Target group
              </label>

              <select
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="gender"
              >
                <option value="">-- Select Gender Target Group --</option>
                <option>Women/girls</option>
                <option>Men/boys</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Age target Group
              </label>

              <select
                name="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="age"
              >
                <option value="">-- Select Age Target Group --</option>
                <option>Children & youth (30)</option>
                <option>Elderly (65+)</option>
                <option>All other</option>
              </select>
            </div>

          </div>
          <div className="grid grid-cols-3 gap-6">

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                What share of the total project are you providing?
              </label>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="number"
                id="share"
                min={0}
                placeholder={0}
                name="share"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                What other organizations are funding the project?
              </label>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="orgs"
                placeholder="Other funding organizations"
                name="orgs"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                What amount of funding are other organizations providing
              </label>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="altfunding"
                id="altfunding"
                placeholder="altfunding"
                min={0}
                name="altfunding"
              />
            </div>
          </div>




          <div className="px-4 py-3 text-right sm:px-6">
            <button type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpense;
