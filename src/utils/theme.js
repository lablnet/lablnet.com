window.setAppTheme = (theme) => {
    const bodyClassList = document.querySelector('body')?.classList;
    const documentElementClassList = document.documentElement?.classList;

    if (theme === "dark" && bodyClassList?.contains('app-theme')) {
        bodyClassList?.remove('bg-secondary-light');
        bodyClassList?.add('bg-primary-dark');
        documentElementClassList?.add("dark");
        documentElementClassList?.remove("light");
    } else {
        bodyClassList?.remove('bg-primary-dark');
        bodyClassList?.add('bg-secondary-light');
        documentElementClassList?.remove("dark");
        documentElementClassList?.add("light");
    }
    window.localStorage.setItem('theme', theme);
}
let theme = window.localStorage.getItem("theme") || "dark"
console.log("theme", theme)
// set the theme.
window.setAppTheme(theme);


