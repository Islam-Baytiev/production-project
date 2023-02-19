import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputProps extends HtmlInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autoFocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span className={cls.caret} style={{ left: `${caretPosition * 13}px` }} />
        )}
      </div>
    </div>
  );
});
