import { styled } from "@stitches/react";

export const ListItem = styled("li", {
  background: "$white",
  borderRadius: "$default",
  boxShadow: "$default",
  counterIncrement: "counter",
  marginTop: "3rem",
  minHeight: "8rem",
  padding: "1.5rem 3.5rem",
  position: "relative",
  "& > p": {
    marginTop: "0.7rem",
  },
  "&:before, &:after": {
    background: "$listItemBackground",
    borderRadius: "$listItemRadii",
    content: "counter(counter)",
    height: "3rem",
    left: "-1rem",
    overflow: "hidden",
    position: "absolute",
    top: "-1rem",
    width: "2.8rem",
  },
  "&:before": {
    alignItems: "flex-end",
    color: "black",
    display: "flex",
    font: "900 1.5em/1 Montserrat",
    justifyContent: "flex-end",
    padding: "0.125em 0.25em",
    zIndex: "1",
  },
});
