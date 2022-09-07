/**
 * Function to set the theme.
 * @since v1.0.0
 * @returns null
 */
const themeSetup = () => {
    const appTheme = localStorage.getItem('theme') || 'light';

      if (
        appTheme === 'dark' &&
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.contains('app-theme')
      ) {
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.remove('bg-secondary-light');
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.add('bg-primary-dark');
      } else {
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.remove('bg-primary-dark');
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.add('bg-secondary-light');
      }
}

export {
    themeSetup,
}