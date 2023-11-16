import Search from "./component/Search";
import Filter from "./component/Filter";
import Card from "./component/Card";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./component/Api";
import { Link } from "react-router-dom";
import Pagination from "./component/Pagination";

const Home = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [categoryInput, setCategoryInput] = React.useState("");

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const countries = useQuery({
    queryKey: ["getCountries"],
    queryFn: fetchData
  });

  const filteredCountry = React.useMemo(() => {
    if (searchInput !== "" && categoryInput !== "") {
      return countries.data.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(searchInput.toLowerCase()) &&
          country.region == categoryInput
      );
    } else if (searchInput !== "") {
      return countries.data.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (categoryInput !== "") {
      return countries.data.filter(
        (country) => country.region == categoryInput
      );
    } else {
      return countries.data;
    }
  }, [countries.data, searchInput, categoryInput]);

  if (countries.isLoading) {
    return <span>Loading...</span>;
  }
  if (countries.error) {
    return <span>Error: {countries.error.message}</span>;
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div className="px-16 py-14 max-[550px]:px-7 max-[550px]:py-7">
      <div className="flex gap-3 items-center justify-between max-md:flex max-md:flex-col max-md:items-start">
        <Search
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          setCurrentPage = {setCurrentPage}
        ></Search>
        <Filter
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
          setCurrentPage ={setCurrentPage}
        ></Filter>
      </div>
      <div className="grid grid-cols-4 justify-between max-lg:grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1 gap-10 mt-10">
        {filteredCountry.slice(startIndex, endIndex).map((country, index) => (
          <Link key={index} to={`/detail/${country.name.official}`}>
            <Card country={country}></Card>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCountry.length / itemsPerPage)}
        onPageChange={handlePageChange}
      ></Pagination>
    </div>
  );
};

export default Home;
