/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./styles";

export interface inputProps {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  handleChange: (e: any) => void;
}

const Input = ({
  name,
  type,
  value,
  placeholder,
  handleChange,
}: inputProps) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Input;
