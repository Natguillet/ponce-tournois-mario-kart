export const getSelectStyle = (theme) => {
    return {
        ...theme,
        borderRadius: 6,
        colors: {
            ...theme.colors,
            primary: '#A072D5',
            primary25: '#f3f3f4',
        },
    };
};
