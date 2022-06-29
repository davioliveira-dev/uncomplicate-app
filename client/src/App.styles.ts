import { styled } from "./themes";

export const Main = styled("main", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "6rem",
  "@bpTablet": {
    padding: "1rem",
    paddingTop: "8rem",
  },
});

export const Title = styled("h1", {
  color: "$white",
});
