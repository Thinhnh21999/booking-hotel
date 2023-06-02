import styled from "styled-components";
export const AsideStyled = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const DropdownMenuItem = styled.ul`
  display: ${(props) => (props.isDropdownMenuItem ? "block" : "hidden")};
`;
