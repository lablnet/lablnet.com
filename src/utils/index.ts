import type {CollectionEntry} from 'astro:content';

const df = new Intl.DateTimeFormat(undefined, {
    month: 'short',
    year: 'numeric',
});

// @ts-ignore
const compareByDate = (a: CollectionEntry, b: CollectionEntry) => {
    // If both 'b' and 'a' do not have an 'endDate', compare their 'startDate's
    if (!b.data.endDate && !a.data.endDate) {
        return +b.data.startDate - +a.data.startDate;
    }
    // If only 'b' does not have an 'endDate', 'b' is considered "greater"
    if (!b.data.endDate) {
        return 1;
    }
    // If only 'a' does not have an 'endDate', 'a' is considered "greater"
    if (!a.data.endDate) {
        return -1;
    }
    // If both 'b' and 'a' have an 'endDate', compare those
    return +b.data.endDate - +a.data.endDate;
}

const setAppTheme = (theme: string) => {
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
}

// URLs.
let urls : object = {
    contact: 'https://contact.lablnet.com/',  
}
  
// Recaptcha token.
let recaptchaToken :string = '6LcevvYhAAAAAG1MMRgl_fKqtGx6ZNv8KdnLSLic';
  
export {
    df,
    compareByDate,
    urls,
    recaptchaToken,
    setAppTheme,
}
