const Card = ({ country }) => {
  return (
    <section className="bg-white dark:bg-dark-mode-elements shadow-md h-[350px] rounded-md max-[550px]:w-[300px] max-[550px]:mx-auto hover:opacity-80">
      <img
        className="rounded-t-md h-1/2 w-full"
        src={country.flags.png}
        alt="country image"
      />
      <div className="py-4 px-3">
        <h2>{country.name.common}</h2>
        <div className="flex gap-1">
          <p>Population:</p>
          <span>{country.population.toLocaleString('en-US')}</span>
        </div>
        <div className="flex gap-1">
          <p>Region: </p>
          <span>{country.region}</span>
        </div>
        <div className="flex gap-1">
          <p>Capital: </p>
          <span>{country.capital}</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
