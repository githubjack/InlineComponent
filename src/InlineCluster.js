import styled from "styled-components";

import { spacingMap } from "./spacingMap";

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center"
};

export const InlineCluster = styled.div`
  --gutter: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyAlignMap[props.justify] ?? justifyAlignMap.start};

  align-items: ${(props) =>
    justifyAlignMap[props.align] ?? justifyAlignMap.start};
`;
