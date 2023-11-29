export const Button = {
  baseStyle: {
    borderRadius: "6px",
    color: "primary.500",
  },

  variants: {
    outline: {
      border: "1px solid",
      borderColor: "primary.500",
      _hover: {
        borderColor: "primary.700",
        backgroundColor: "primary.300",
      },
    },
  },

  sizes: {
    xs: {
      fontSize: "xs",
      px: 1.5,
    },
    sm: {
      fontSize: "sm",
      px: 2,
    },
    base: {
      fontSize: "base",
      p: 2.5,
    },
    lg: {
      fontSize: "lg",
      px: 3,
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "base",
  },
};
