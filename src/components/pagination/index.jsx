

import { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PaginationContext from '../../context/paginationContext';

const Pagination = () => {
  const {page,nextPage,prevPage} = useContext(PaginationContext);
  return (
    <div className="flex justify-center items-center h-[3.5rem] pt-2 mt-4 gap-3 bg-[#021e34]">
      <button 
        onClick={prevPage}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-transform transform hover:-translate-x-1"
      >
        <FaArrowLeft className="text-blue-600" />
        <span className="text-blue-600 font-semibold pr-6">Go Back   </span>
      </button>

      <div className="text-blue-600 font-semibold text-center">{page}</div>

      <button 
        onClick={nextPage}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-transform transform hover:translate-x-1"
      >
        <span className="text-blue-600 font-semibold">Go Forward</span>
        <FaArrowRight className="text-blue-600" />
      </button>
    </div>
  );
}

export default Pagination;
