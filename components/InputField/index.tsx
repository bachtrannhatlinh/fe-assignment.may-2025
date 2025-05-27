import React from "react";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
  value: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder = "",
  className = "",
  readOnly = false,
}) => {
  return (
    <Input
      className={className}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
};

export default InputField;