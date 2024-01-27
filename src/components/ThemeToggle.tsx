import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";
import '../utils/theme.js'

export default function ThemeToggle(): h.JSX.Element {
  const [theme, setTheme] = useState('light');

    const handleClick = () => {
      let _theme = theme === "light" ? "dark" : "light";
      setTheme(_theme)
      // @ts-ignore
      setAppTheme(_theme);
    };

    useEffect(() => {
        let theme = localStorage.getItem("theme") || "light"
        setTheme(theme);
    }, []);


    let icon = theme === "light" ? (
        <i
      
        class="
          text-liText-ternary-dark
          hover:text-gray-400
          dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light
          w-5
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></i>) :
          (
            <i class="text-gray-200 hover:text-gray-50 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-sun"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></i>
          )
    return (
        <div>
            <a href="#" onClick={handleClick}  class="py-1">
                {icon}
            </a>
        </div>
    );
}
