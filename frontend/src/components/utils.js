// Extract variables for population and county name and code
export const getPopulation = (properties) => Number(properties.population_2019);

export const getCountyName = (properties) => properties.adm1_name;

export const getCountyCode = (properties) => properties.adm1_pcode;

//Population colour scale
export const getColor = (population) => {
  return population > 2_000_000
    ? "#800026"
    : population > 1_500_000
      ? "#BD0026"
      : population > 1_000_000
        ? "#E31A1C"
        : population > 750_000
          ? "#FC4E2A"
          : population > 500_000
            ? "#FD8D3C"
            : population > 250_000
              ? "#FEB24C"
              : "#FFEDA0";
};
