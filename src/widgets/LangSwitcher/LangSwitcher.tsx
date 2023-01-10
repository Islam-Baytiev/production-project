import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();
    const toogle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
    }

    return (

            <Button className={classNames(cls.LangSwitcher, {}, [className])}
                    theme={ThemeButton.CLEAR}
                    onClick={toogle}
            >
                {t("Язык")}
            </Button>

    );
};

