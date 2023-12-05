import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { render } from "@testing-library/react";

import { CHAKRA_THEME } from "@/themes";

import { BrowserRouter as Router } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

export const renderWithProvider = (children: ReactNode) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <ChakraProvider theme={CHAKRA_THEME}>{children}</ChakraProvider>
      </Router>
    </QueryClientProvider>,
  );
};

export const wrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export * from "@testing-library/react";
export { renderWithProvider as render };
