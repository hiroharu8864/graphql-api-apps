import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
  maxlength: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
};

const SInput = styled.input`
  padding: 8px 16px;
  margin-bottom: 20px;
  border: solid #ddd 1px;
  border-radius: 1000px;
  outline: none;
`;

export const InputTest: FC<Props> = memo((Props) => {
  const { placeholder = "", maxlength, value, onChange, onBlur } = Props;
  return (
    <SInput
      maxLength={maxlength}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
});
