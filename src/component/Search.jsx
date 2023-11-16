import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({searchInput,setSearchInput,setCurrentPage}) => {

  function handleChange(event){
      setSearchInput(event.target.value)
      setCurrentPage(1);
  }

  return (
    <>
      <div className="relative flex items-center max-[550px]:w-full">
        <FontAwesomeIcon
          className="absolute top-[22px] left-3"
          icon={faSearch}
          color="gray"
        ></FontAwesomeIcon>
        <input
          className="dark:bg-dark-mode-elements dark:text-white w-96 max-[550px]:w-full py-4 px-10 shadow-md text-light-mode-input rounded-md"
          type="text"
          placeholder="Search for a country..."
          name="country"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
