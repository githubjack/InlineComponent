import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

export const Logo = styled.div.attrs(() => ({ size: "3rem" }))`
  border-radius: 50%;
  background-color: black;
  inline-size: ${({ size }) => size};
  block-size: ${({ size }) => size};
`;

export const MenuContainer = styled(PadBox).attrs(() => ({ padding: "md" }))`
  border: 1px solid black;
`;

export const Button = styled(PadBox).attrs(() => {
  return {
    as: "button",
    padding: ["md", "lg"]
  };
})`
  background: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
`;
