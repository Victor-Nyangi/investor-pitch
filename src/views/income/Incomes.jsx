import React from "react";
import SectionHeader from "../../components/SectionHeader";

const Incomes = () => {

  return (
    <>
      <section>
        <SectionHeader title={'Uploads'} input_field={false} data_title={'uploads'} />

        <div className="mx-20 overflow-hidden overflow-x-auto  rounded">

          <form>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Name of file
              </label>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                type="text"
                id="name"
                placeholder="Name"
                autoComplete="off"
                name="name"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                Upload Project Document
              </label>
            <div className="mt-4 flex items-center space-x-2">
              <label
                forInput="project_activity_documents"
                className="bg-white border border-gray-300 border-2 border-dashed px-4 py-2 rounded-lg cursor-pointer w-2/3"
              >
                <div className="py-4 flex justify-center">
                  <div>
                    <h4 className="text-sm text-black text-center"><span className='text-red-500 mr-1'>Upload a document</span>or drag and drop.</h4>
                    <h2 className="text-xs text-black">PDF, DOC up to 5 MB</h2>
                  </div>
                  <div>
                  </div>
                </div>
              </label>

              <input
                type="file"
                name="project_activity_documents[]"
                id="project_activity_documents"
                className="hidden"
                multiple
                autoComplete="project_activity_documents"
                placeholder="Project Activity Documents"
              />
            </div>
          </form>
        </div>
        {/* <Pagination
        currentPage={currentPage}
        totalCount={incomes.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      </section>
    </>
  );
};

export default Incomes
