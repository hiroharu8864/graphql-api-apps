import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

const SButton = styled.button`
  color: #ffffff;
  background-color: #cc6633;
  padding: 8px 40px;
  border: none;
  border-radius: 1000px;
  outline: none;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const MainButton: FC<Props> = memo((Props) => {
  const { children, onClick } = Props;
  return <SButton onClick={onClick}>{children}</SButton>;
});
