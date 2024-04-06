import React, { useState } from "react";
import { IoSearchSharp, IoTrashSharp } from "react-icons/io5";
import { getTimeLocal } from "../utils/getTimeLocal";

type HistoryDataType = {
  historyData: string[] | null;
  setHistoryData: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const HistoryList = ({ historyData, setHistoryData }: HistoryDataType) => {
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

  const handleFind = (name: string) => {
    const searchedLocation = historyData?.find((a) => a === name);
    
  }

  return (
    <div className="h-full">
      <div className="text-2xl py-2 border-solid border-b-[1px] border-black font-extrabold">
        History
      </div>

      <div className="flex flex-col justify-between">
        <ol className="h-32 overflow-scroll">
          {currentItems &&
            currentItems.map((name: string, index: number) => (
              <div className="text-lg flex justify-between border-solid border-b-2 my-5">
                <li key={index}>{name}</li>
                <div className="flex gap-5 items-center">
                  <p>{getTimeLocal(Date.now())}</p>

                  <div className="flex gap-2">
                    {" "}
                    <div className="w-7 h-7 hover:cursor-pointer bg-slate-200 items-center flex justify-center rounded-full">
                      <IoSearchSharp onClick={() => handleFind(name)}/>
                    </div>
                    <div className="w-7 h-7 hover:cursor-pointer bg-slate-200 items-center flex justify-center rounded-full">
                      <IoTrashSharp onClick={() => handleDelete(index)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </ol>

        {/* Pagination */}

        <ol className="flex gap-10">
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
