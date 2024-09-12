# Job Filtering App

This is a **React job filtering application** - a challenge by [frontendmentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) where users can filter job listings based on various criteria such as role, level and skills (like languages and tools). The app displays available jobs and allows users to filter them by clicking on filter tags. The UI is styled using **Tailwind CSS** and features a responsive, modern design.

## Features

- ### Job Listings

  View job opportunities with details such as role, level, contract type, and required skills

- ### Dynamic Filtering

  Filter jobs by selecting tags (e.g, Frontend, JavaScript, CSS). Only jobs matching all selected criteria are displayed

- ### Interactive Search

  Filter options appear in an interactive search bar at the top of the page

- ### Responsive Design

  The UI is fully responsive, ensuring a seamless experience on all device sizes

## Technologies Used

### React

### TypeScript

### Tailwind CSS

### Vite

### JSON Data

The job listings are sourced from a static JSON file (`data.json`)

# Installation

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/en)

- npm (as the package manager)

## Steps

1. ### Clone the repository:

```
git clone https://github.com/SanazBHMN/static-job-listings
```

2. ### Navigate to the project directly:

```
cd static-job-listings
```

3. ### Install dependencies:

```
npm install
```

4. ### Start the development server:

```
npm run dev
```

# Usage

1. ### Filtering Jobs:

- Click on any of the job tags (like `Frontend`, `CSS`, or `Senior`) to add them to the filter.

- As you add tags, the job listings will dynamically filter to match the selected criteria

- You can remove tags by clicking the 'X' icon next to each tag in the filter bar.

2. ### Clear Filters:

- You can cleaar all filters by clicking the `Clear` button in the search input section, and all job listings will reappear.
