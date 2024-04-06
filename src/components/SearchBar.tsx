import { SearchbarType } from "../types/types";
import Button from "../ui-shared/Button";

const SearchBar = ({
  location,
  setLocation,
  handleSearch,
  handleClear,
  handleDarkMode,
  darkMode,
}: SearchbarType) => {
  return (
    <>
      <div
        style={{
          borderColor: darkMode ? "white" : "#374151",
        }}
        className="text-2xl w-full max-lg:text-xs py-2 bordery-solid border-b-[1px] border-black font-extrabold"
      >
        Today's Weather App
      </div>
      <div className="flex gap-5 -mt-5">
        <input
          style={{
            borderColor: darkMode ? "white" : "#374151",
          }}
          className="px-2 border-[1px] text-black border-black border-solid rounded-sm"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />{" "}

        <Button title="Search" darkMode={darkMode} onClick={() =>handleSearch(location)}/>
       
        <Button title="Clear input" darkMode={darkMode} onClick={handleClear}/>

        <Button title={`Toggle ${!darkMode ? "Dark" : "Light"} mode`} darkMode={darkMode} onClick={handleDarkMode}/>
      </div>
    </>
  );
};

export default SearchBar;
