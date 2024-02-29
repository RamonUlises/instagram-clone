export const getTheme = (): boolean => {
    const theme = localStorage.getItem('theme');
    if(theme !== null) {
        if(theme === 'light') {
            document.documentElement.classList.remove('dark');
            return false;
        } else {
            document.documentElement.classList.add('dark');
            return true;
        };
    };
    const setTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', setTheme);
    return true;
};

const cambiarTema = (): void => {
    const theme = localStorage.getItem('theme');
    if(theme === 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    };
};

export const cambiarTemaPage = (): void => {
    const theme = localStorage.getItem('theme');
    if(theme === 'light') {
        document.documentElement.classList.add('dark');
        cambiarTema();
        
    } else {
        document.documentElement.classList.remove('dark');
        cambiarTema();
    };
}