import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const getCountry = async (name) => {
  try {
    const resp = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const data = resp.json();
    return data;
  } catch (error) {
    throw new Error("Country is not found");
  }
};

const Detail = () => {
  const { countryId } = useParams();
  const country = useQuery({
    queryKey: ["getCountry"],
    queryFn: () => getCountry(countryId),
  });

  if (country.isLoading) {
    return <span>Loading...</span>;
  }

  if (country.error) {
    return <span>Error: {country.error.message}</span>;
  }
  const [data] = country.data;

  const nativeName = () => {
    for (let key in data.name.nativeName) {
      return data.name.nativeName[key].common;
    }
  };

  const currencies = () => {
    for (let key in data.currencies) {
      return data.currencies[key].name;
    }
  };

  const languages = () => {
    const arrLanguages = [];
    for (let key in data.languages) {
      arrLanguages.push(data.languages[key]);
    }
    return arrLanguages.join(", ");
  };

  return (
    <section className="flex flex-col max-lg:items-center px-16 max-sm:px-3">
      <div className="max-lg:w-10/12">
        <Link to="/">
          <div className="flex items-center justify-center gap-2 p-2 shadow-md rounded-md bg-white dark:bg-dark-mode-elements w-32 my-7 active:opacity-70">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="dark:text-white"
            ></FontAwesomeIcon>
            <span>Back</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-16 max-lg:flex-col mt-7">
        <img src={data.flags.svg} className="w-1/2 max-lg:w-10/12" alt="" />
        <div className="w-5/12 max-lg:w-4/5">
          <h1 className="my-7 max-sm:my-0 max-lg:my-2 max-sm:mb-5 font-extrabold">
            {data.name.official}
          </h1>
          <div className="flex gap-12 justify-between max-sm:flex-col">
            <div>
              <div className="flex gap-1">
                <p>Native Name: </p>
                <span>{nativeName()}</span>
              </div>
              <div className="flex gap-1">
                <p>Population: </p>
                <span>{data.population.toLocaleString("en-US")}</span>
              </div>
              <div className="flex gap-1">
                <p>Region: </p>
                <span>{data.region}</span>
              </div>
              <div className="flex gap-1">
                <p>Sub Region: </p>
                <span>{data.subregion}</span>
              </div>
              <div className="flex gap-1">
                <p>Capital: </p>
                <span>{data.capital[0]}</span>
              </div>
            </div>
            <div>
              <div className="flex gap-1">
                <p>Top Level Domain: </p>
                <span>{data.tld.join(", ")}</span>
              </div>
              <div className="flex gap-1">
                <p>Currencies: </p>
                <span>{currencies()}</span>
              </div>
              <div className="flex gap-1">
                <p>Languages: </p>
                <span>{languages()}</span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p>Border Countries: </p>
            <div className="flex gap-3 my-2">
              {data.borders?.map((country, i) => {
                return (
                  <span className="w-max p-2 rounded-md border" key={i}>
                    {country}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
