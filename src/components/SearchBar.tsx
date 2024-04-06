type SearchbarType = {
  location: string;
  setLocation: (props: string) => void;
  handleSearch: () => void;
  handleClear: () => void;
};

const SearchBar = ({
  location,
  setLocation,
  handleSearch,
  handleClear,
}: SearchbarType) => {
  return (
    <>
      <div className="text-2xl max-lg:text-xs py-2 bordery-solid border-b-[1px] border-black font-extrabold">
        Today's Weather App
      </div>
      <div className="flex gap-5 -mt-5 max-lg:flex-col">
        <input
          className="px-2 border-2 border-black border-solid rounded-sm"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />{" "}
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
    </>
  );
};

export default SearchBar;
