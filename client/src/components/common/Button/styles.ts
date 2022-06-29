import { styled } from "../../../themes";

export const Button = styled("button", {
  background: "$white",
  border: "none",
  borderRadius: "$md",
  boxShadow: "$default",
  color: "$background",
  cursor: "pointer",
  fontSize: "1rem",
  marginTop: "2rem",
  padding: "0.5rem 1rem",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    background: "$green",
    color: "$background",
  },
});
