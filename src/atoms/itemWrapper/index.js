import styled from "styled-components";

const ItemWrapper = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
  padding: ${(props) => (props.padding ? props.padding : "0 0 0 0")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export default ItemWrapper;
