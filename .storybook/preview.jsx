import { ChakraProvider } from "@chakra-ui/react";
import { CHAKRA_THEME } from "@/themes";

const preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={CHAKRA_THEME}>
        <Story />
      </ChakraProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
