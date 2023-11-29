export const Badge = {
  baseStyle: {
    borderRadius: "4px",
    py: "2px",
    px: "9px",
    fontWeight: "medium",
    textTransform: "capitalize",
  },

  variants: {
    low: {
      color: "tertiary.200",
      bgColor: "tertiary.100",
    },
    high: {
      color: "tertiary.200",
      bgColor: "tertiary.100",
    },
    completed: {
      color: "success.400",
      bgColor: "success.300",
    },
  },
};
