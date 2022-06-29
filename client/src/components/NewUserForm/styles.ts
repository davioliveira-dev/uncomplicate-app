import { styled } from "../../themes";
import { Button as CommonButton } from "../common/Button";
import { ListItem as CommonListItem } from "../common/UserListItem";

export const ListItem = styled(CommonListItem, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Input = styled("input", {
  display: "block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "5px",
  width: "100%",
  fontSize: "0.8rem",
  marginBottom: "10px",
});

export const Button = styled(CommonButton, {
  marginTop: "5px !important",
});
