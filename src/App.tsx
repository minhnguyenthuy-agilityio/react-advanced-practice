import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CHAKRA_THEME } from "@/themes";

import { ROUTES } from "@/constants";

import { TaskPage } from "@/pages";

import { PrimaryLayout } from "./layouts";

const App = () => {
  return (
    <ChakraProvider
      theme={CHAKRA_THEME}
      toastOptions={{ defaultOptions: { duration: 3000, isClosable: true } }}
    >
      <Router>
        <Routes>
          <Route element={<PrimaryLayout />}>
            <Route
              index
              path={ROUTES.TASKS_PROJECT_DEFAULT}
              element={<TaskPage />}
            />
            <Route path={ROUTES.TASKS_PROJECT} element={<TaskPage />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
