# React advanced practice

## Overview:

- This document provides information about React advanced practice.

## Targets:

- Apply React Advance (memo, useCallback, useMemo)
- Apply Zustand for state management
- Apply React Query for fetching data 
- Use a mockAPI service to get familiar with asynchronous behaviors from real api.
- Unit test coverage should greater than 80%
- Improve PageSpeed scores at minimum 98 points
- Apply Storybook
- Fill missing things from React basic (re-render checking)

## Information:

### Timeline:

- Estimate time: 10 days (16/11/2023 -30/11/2023).
- Actual time: 

### Technical:

- [HTML5](https://en.wikipedia.org/wiki/HTML5): is a markup language used for structuring and presenting content on the World Wide Web
- [CSS3](https://www.techopedia.com/definition/28243/cascading-style-sheets-level-3-css3): is the iteration of the CSS standard used in the styling and formatting of Web pages
- [ES6](https://www.geeksforgeeks.org/introduction-to-es6/): ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
- [React Hook](https://reactjs.org/docs/hooks-intro.html): a new addition in React 16.8. They let you use state and other React features without writing a class.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start): is a standard library for routing in React.
- [Vite](https://vitejs.dev/guide): is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html): is a syntactic superset of JavaScript which adds static typing.
- Editor: Visual Studio Code.
- [MockApi](https://github.com/mockapi-io/docs/wiki): is a simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface.
- [Chakra UI](https://chakra-ui.com/): is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
- [Storybook](https://storybook.js.org/): is a frontend workshop for building UI components and pages in isolation.
- [Axios](https://axios-http.com/docs/intro): is a promise-based HTTP Client for node.js and the browser.
- [React Query](https://tanstack.com/query/v3/): is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.
- [Zustand](https://github.com/pmndrs/zustand): is a small unopinionated state management library built by Jotai and React-spring.
- [Jest](https://jestjs.io/): is a delightful JavaScript Testing Framework with a focus on simplicity.

### Development environment:

- Node: version 18.16.0
- pnpm: version 8.6.3
- Vite: version 5.0.0
- typescript: version 5.2.2
- react: version 18.2.0
- axios: version 1.6.2
- charka: version 2.8.2
- jest: version 29.7.0
- storybook: version 7.5.3
- zustand: version 4.4.6
- react query: version 3.39.3

### Document:

- [Design](https://www.figma.com/file/MylSrrTPUoV4XXCq8aYJfv/Project-Management-Dashboard-(Community)?type=design&node-id=2-163&mode=design&t=hWRf1pRRlQ2lYTJN-0)
- [Requirement & Plan](https://docs.google.com/document/d/1y7iIsP_j_nb_Mq9Eve3EGIdrhfOCuP_kBEd-e96eXlU/edit#heading=h.oymnw3nlvwib)
- [Task board](https://gitlab.asoft-python.com/minh.nguyenthuy/react-training/-/boards)

### Convention:

- Branch name format: `<prefix>/short-desc`<br>
  _Ex:_ feat/header
- Commit format: `<type>[optional scope]: <description>`<br>
  _Ex:_ feat(header): add type for header
- Merge request format: `[Project] - Short desc [optional issue id]`<br>
  _Ex:_ [React advanced practice] - Add type for show list task #17
- Component's event handling functions: `on<Event name>`<br>
  _Ex:_ onChange, onEvent, onInput

### Main app features:

- Show list task by status: To Do, On Progress, Done
- Assign priority to task: High, Medium, Low
- Show detail task
- Search task by name
- Sort tasks ascending / decreasing by name / createdAt (opt)
- Filter task by priority
- Create task
- Update task (opt)
- Delete task

## Getting started

### Requirement

- Have node package manager (version 18.16.0)
- Installed pnpm (version 8.6.3)

### 1) Clone repo and checkout branch

- Step 1: Cloning the repo
  - HTTPS:
    ```
    $ git clone https://gitlab.asoft-python.com/minh.nguyenthuy/react-training.git
    ```
  - SSH:
    ```
    $ git clone git@gitlab.asoft-python.com:minh.nguyenthuy/react-training.git
    ```
- Step 2: Go to folder react-training `cd react-training`
- Step 3: Checkout to branch react-advanced-practice `git checkout feat/react-advanced-practice`
- Step 4: Go to folder react-advanced-practice `cd react-advanced-practice`

### 2) Run database

- Step 1: Go to folder react-advanced-practice `cd react-advanced-practice`
- Step 2: Create file .env
- Step 3: Add line code `VITE_API_BASE_URL="your_api" `

### 3) Run application

- Step 1: Install package `pnpm install`
- Step 2: Run project `pnpm run dev`
- Step 3: Open `http://127.0.0.1:5173/` in your browser to see the Web application.


### Run storybook
`pnpm run storybook`


### Run unit testing
`pnpm run test`
