import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum SizeButton {
    M= 'size_m',
    L = 'size_l',
    Xl = 'size_xl',
}

export enum ThemeButton {
    CLEAR= 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.OUTLINE,
    square,
    size = SizeButton.M,
    disabled,
    ...otherProps
  } = props;
  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
