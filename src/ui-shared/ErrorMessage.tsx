import { IoWarning } from "react-icons/io5";

const Error = ({error}: any) => {
  return (
    <div>
      
      <div className="bg-red-400 gap-1 items-center flex p-2 rounded-md">
        <IoWarning /> {error}
      </div>
    </div>
  );
};

export default Error;
