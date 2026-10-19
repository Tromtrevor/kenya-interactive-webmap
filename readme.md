# Kenya Interactive Atlas 🇰🇪

An interactive web mapping project for visualising and exploring population data across Kenya's 47 counties.

## Overview

Kenya Interactive Atlas combines administrative boundary data and census statistics to create an interactive choropleth map of Kenya. The project aims to make county-level population patterns easier to explore through web mapping and spatial data visualisation.

## Features

- Interactive map of Kenya's county boundaries.
- Choropleth visualisation of 2019 county population.
- County selection and population information.
- Population data processing and spatial analysis using Python.

## Tech Stack

- **Python:** Data processing and analysis.
- **GeoPandas & Pandas:** Spatial data manipulation and census data preparation.
- **React:** Frontend user interface.
- **JavaScript (JSX):** Application logic.
- **Leaflet & React Leaflet:** Interactive mapping.
- **Vite:** Frontend development and build tooling.
- **Tailwind CSS:** Interface styling.

## Data

The project uses Kenya's administrative county boundaries and population statistics from the 2009 and 2019 Kenya Population and Housing Census.

The data is processed using Python and GeoPandas before being prepared for web visualisation.

_Data sources and attribution will be documented here._

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Tromtrevor/kenya-interactive-webmap.git
cd kenya-interactive-webmap
```

Navigate to the frontend and install dependencies:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## Future Improvements

- Add a population density map layer.
- Introduce additional demographic visualisations.
- Integrate PostgreSQL/PostGIS for spatial data storage and FastAPI for serving geospatial data.

## Author

**Trevor Rombora**

Geospatial Engineering | GIS & Spatial Data Analysis

[GitHub](https://github.com/Tromtrevor)
