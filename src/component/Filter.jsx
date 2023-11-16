import { Link } from "react-router-dom";

const Filter = ({ categoryInput, setCategoryInput,setCurrentPage}) => {
  function handleSelectChange(event) {
    setCategoryInput(event.target.value);
    setCurrentPage(1);
  }
  return (
    <>
      <select
        className="bg-white dark:bg-dark-mode-elements dark:text-white py-4 px-4 w-60 shadow-md text-light-mode-text rounded-md cursor-pointer"
        name="filter"
        placeholder="Filter"
        value={categoryInput}
        onChange={handleSelectChange}
      >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
      </select>
    </>
  );
};

export default Filter;
