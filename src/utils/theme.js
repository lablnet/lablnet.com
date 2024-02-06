window.setAppTheme = (theme) => {
    const bodyClassList = document.querySelector('body')?.classList;
    const documentElementClassList = document.documentElement?.classList;

    if (theme === "dark") {
        bodyClassList?.remove('light');
        bodyClassList?.add('dark');
        documentElementClassList?.add("dark");
        documentElementClassList?.remove("light");
    } else {
        bodyClassList?.remove('dark');
        bodyClassList?.add('light');
        documentElementClassList?.remove("dark");
        documentElementClassList?.add("light");
    }
    window.localStorage.setItem('theme', theme);
}
let theme = window.localStorage.getItem("theme") || "light"
// set the theme.
window.setAppTheme(theme);
