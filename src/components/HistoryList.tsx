import React, { useState } from "react";
import { IoSearchSharp, IoTrashSharp } from "react-icons/io5";
import { HistoryDataType, HistoryListType } from "../types/types";

const HistoryList = ({
  historyData,
  loading,
  setHistoryData,
  handleSearch,
}: HistoryListType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = historyData?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDelete = (index: number) => {
    const updatedHistory = historyData?.filter((_, i) => i !== index);
    if (updatedHistory) setHistoryData(updatedHistory);
  };

  const handleFindHistory = (target: string) => {
    if (historyData) {
      const historyLocation = historyData.find(
        (data) => data.name === target
      ) as HistoryDataType;
      handleSearch(historyLocation.name);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="text-2xl text-center max-lg:text-xs py-2 border-solid border-b-[1px] border-black font-extrabold">
        History
      </div>

      <div className="flex  flex-col h-[80%] justify-between">
        <ol className="h-48 overflow-scroll">
          {loading && !historyData?.length ? (
            <>Loading ...</>
          ) : (
            <>
              {currentItems &&
                currentItems.map((data: HistoryDataType, index: number) => (
                  <div className="text-lg flex justify-between border-solid border-b-2 mt-5 transition-transform z-50 hover:translate-y-[-5px]">
                    <li key={index} className="max-lg:text-sm">
                      {data.name}, {data.code}
                    </li>
                    <div className="flex gap-5 max-lg:gap-1 max-lg:text-sm items-center">
                      <p>{data.searchedAt}</p>

                      <div className="flex gap-2">
                        {" "}
                        <div className="w-7 h-7 hover:bg-slate-300 hover:cursor-pointer bg-slate-200 items-center flex justify-center rounded-full">
                          <IoSearchSharp
                            onClick={() => handleFindHistory(data.name)}
                          />
                        </div>
                        <div className="w-7 h-7 hover:bg-slate-300 hover:cursor-pointer bg-slate-200 items-center flex justify-center rounded-full">
                          <IoTrashSharp onClick={() => handleDelete(index)} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </ol>

        {/* Pagination */}

        <ol className="flex gap-10 max-lg:text-xs">
          {[...Array(Math.ceil((historyData?.length || 1) / itemsPerPage))].map(
            (_, index) => (
              <li
                key={index}
                onClick={() => paginate(index + 1)}
                className={`cursor-pointer ${
                  currentPage === index + 1 ? "font-bold" : ""
                }`}
              >
                Page {index + 1}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default HistoryList;
