import styled from "styled-components";

export const Dropdown = styled.li`
  &:hover {
    ul {
      z-index: 99;
      top: 100%;
      opacity: 1;
      transition: top 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "hidden")};
`;

export const DropdownMenu = styled.div`
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  left: ${(props) => (props.isOpen ? "0" : "-320px")};
  transition: left 0.2s ease, opacity 0.2s ease;
`;

export const DropdownMenuItem = styled.ul`
  display: ${(props) => (props.isDropdownMenuItem ? "block" : "hidden")};
`;
