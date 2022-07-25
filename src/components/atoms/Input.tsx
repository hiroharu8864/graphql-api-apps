import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
  value: string;
  onChange: () => void;
};

const SInput = styled.input`
  padding: 8px 16px;
  margin-bottom: 20px;
  border: solid #ddd 1px;
  border-radius: 1000px;
  outline: none;
`;

export const Input: FC<Props> = memo((Props) => {
  const { placeholder = "", value, onChange } = Props;
  return (
    <SInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});
