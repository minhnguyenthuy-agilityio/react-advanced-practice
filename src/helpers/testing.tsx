import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { CHAKRA_THEME } from "@/themes";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

export const renderWithProvider = (children: ReactNode) => {
  return render(
    <Router>
      <ChakraProvider theme={CHAKRA_THEME}>{children}</ChakraProvider>
    </Router>,
  );
};

export * from "@testing-library/react";
export { renderWithProvider as render };
