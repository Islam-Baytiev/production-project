import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum SizeButton {
    M= 'size_m',
    L = 'size_l',
    Xl = 'size_xl',
}

export enum ThemeButton {
    CLEAR= 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

export const Button:React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = SizeButton.M,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
