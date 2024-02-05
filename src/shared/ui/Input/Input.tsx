import React, {
  FC, InputHTMLAttributes, useEffect, useRef, useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    className, value, onChange, placeholder, autofocus, ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}`}
      </div>
      )}
      <input
        ref={ref}
        className={cls.input}
        value={value}
        autoFocus={autofocus}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
};
