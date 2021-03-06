import { defaults } from 'react-chartjs-2';

export const CSSTheme = {
    light: {
        mainColor: '#A072D5',
        mainColorLight: '#cfa6ff',
        mainBackgroundColor: 'white',
        secondaryBackgroundColor: '#f3f3f4',
        mainTextColor: '#1d1d1d',
        tertiaryTextColor: '#989aa0',
        borderColor: '#e6e6e6',
        successColor: '#68b684',
        errorColor: '#f3453f',
        worstChartColor: '#ea4335',
    },
    dark: {
        mainColor: '#A072D5',
        mainColorLight: '#cfa6ff',
        mainBackgroundColor: '#36393f',
        secondaryBackgroundColor: '#2f3136',
        mainTextColor: 'white',
        tertiaryTextColor: '#989aa0',
        borderColor: '#202225',
        successColor: '#68b684',
        errorColor: '#f3453f',
        worstChartColor: '#ea4335',
    },
};

export const setChartStyle = (theme) => {
    defaults.global.defaultFontFamily = 'Nunito';
    defaults.global.defaultFontColor = CSSTheme[theme].mainTextColor;
};

export const getSelectStyle = (defaultStyle, theme) => ({
    ...defaultStyle,
    borderRadius: 6,
    colors: {
        ...defaultStyle.colors,
        primary: CSSTheme[theme].mainColor,
        primary25: CSSTheme[theme].secondaryBackgroundColor,
        primary50: CSSTheme[theme].mainColorLight,
        neutral0: CSSTheme[theme].mainBackgroundColor,
        neutral20: CSSTheme[theme].borderColor,
        neutral30: CSSTheme[theme].borderColor,
        neutral40: CSSTheme[theme].borderColor,
        neutral60: CSSTheme[theme].borderColor,
        neutral80: CSSTheme[theme].mainTextColor,
        neutral90: CSSTheme[theme].mainTextColor,
    },
});
