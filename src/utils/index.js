const themeSetup = () => {
    const appTheme = localStorage.getItem('theme');

      if (
        appTheme === 'dark' &&
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.contains('app-theme')
      ) {
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.remove('bg-secondary-light');
        document.querySelector('body').classList.add('bg-primary-dark');
      } else {
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector('body').classList.remove('bg-primary-dark');
        document.querySelector('body').classList.add('bg-secondary-light');
      }
}

export {
    themeSetup,
}