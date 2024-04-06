import { IoWarning } from "react-icons/io5";

type SearchbarType = {
  location: string;
  setLocation: (props: string) => void;
  handleSearch: () => void;
  error: string | undefined;
  handleClear: () => void;
};

const SearchBar = ({
  location,
  setLocation,
  handleSearch,
  error,
  handleClear,
}: SearchbarType) => {
  return (
    <>
      <div className="text-2xl py-2 bordery-solid border-b-[1px] border-black font-extrabold">
        Today's Weather App
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <label>Location</label>
          <input
            className="px-2 border-2 border-black border-solid rounded-sm"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="px-2 border-2 border-black border-solid rounded-sm"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-2 border-2 border-black border-solid rounded-sm"
            onClick={handleClear}
          >
            Clear Input
          </button>
        </div>
        {error && (
          <div className="bg-red-400 gap-1 items-center flex p-2 rounded-md">
            <IoWarning /> {error}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
