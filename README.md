# 🍿 usePopcorn React Movie App

Welcome to the usePopcorn React Movie App! This project is a movie searching and tracking application that allows users to search for movies, add them to a watched list, and rate them. In this README file, we will not only introduce you to the app but also discuss the key concepts and technologies I've learned while building it.

## Table of Contents
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies and Concepts Learned](#technologies-and-concepts-learned)
- [Project Structure (Atomic Design)](#project-structure-atomic-design)
- [Responsive Design](#responsive-design)
- [Acknowledgments](#acknowledgments)

## Demo

👉 [Check out the live demo here](#) (https://use-popcorn-react.netlify.app/)

## Getting Started

To run this app locally, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/ClaudiuSonica/usePopcorn.git
   ```

2. Change into the project directory:

   ```shell
   cd usePopcorn
   ```

3. Install the necessary dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to use the app.

## Features

- **Movie Search**: Users can search for movies by entering keywords in the search bar. The app fetches movie data from an external API and displays the results.

- **Watched List**: Users can add movies they've watched to a watched list. These movies are saved for future reference.

- **Movie Rating**: Users can rate the movies in their watched list to keep track of their preferences.

## Technologies and Concepts Learned

Throughout this project, I've learned and implemented various React concepts and technologies, including:

- **useState**: Used to manage the state of the application, such as storing search results, watched movies, and their ratings.

- **useEffect**: Employed to handle side effects, like fetching data from an external API when the component mounts.

- **useRef**: Utilized to interact with the DOM, such as focusing on the search input field after rendering.

- **Custom Hooks**: Created custom hooks for reusable logic, enhancing the maintainability of the codebase.

- **Atomic Design**: Organized the project structure following the Atomic Design methodology, promoting component reusability and scalability.

- **Mobile Responsiveness**: Ensured that the app is responsive and user-friendly on various screen sizes and devices.

## Project Structure (Atomic Design)

The project follows the Atomic Design methodology for structuring components, which consists of five categories:

- **Atoms**: The smallest components, such as buttons and input fields.
  
- **Molecules**: Combinations of atoms, like a movie card with an image and title.

- **Organisms**: More complex components that combine molecules and atoms to form functional parts of the UI, such as the movie search results list.

- **Templates**: Layout structures that combine organisms to create complete pages, like the main app layout.

- **Pages**: Actual application pages that utilize templates and contain content specific to each page, such as the search results page and watched list page.

## Responsive Design

This app is designed to work seamlessly on various devices, from desktops to smartphones. Emphasis has been placed on ensuring a consistent and user-friendly experience across different screen sizes.

## Acknowledgments

Thank you for taking the time to explore the usePopcorn React Movie App! I hope you find this project both educational and enjoyable. Feel free to contribute, report issues, or provide feedback to help make this app even better.

Enjoy your movie-watching experience with usePopcorn! 🍿🎬
