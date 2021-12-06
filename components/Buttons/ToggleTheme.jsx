import { useState, useEffect } from "react";
import tw, { css } from "twin.macro";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(false);
  const handleThemeChange = () => {
    const actualTheme = localStorage.getItem("theme") ?? "light";
    const newTheme = actualTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    newTheme === "light" ? setTheme(true) : setTheme(false);
  };

  useEffect(() => {
    const actualTheme = localStorage.getItem("theme") ?? "light";
    document.documentElement.setAttribute("data-theme", actualTheme);
    localStorage.setItem("theme", actualTheme);
    setTheme(actualTheme === "light" ? true : false);
  }, []);

  const styles = css`
    ${tw`absolute block w-6 h-6 rounded-full bg-background-primary border-4 appearance-none cursor-pointer focus:outline-none`}
    border-color: var(--primary-light);
    transition: all 0.5s;
    &:checked {
      @apply: right-0 border-green-400;
      right: 0;
      border-color: var(--secondary-light);
    }
  `;
  return (
    <div tw="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        css={styles}
        defaultChecked={theme}
        onClick={handleThemeChange}
        value={theme}
      />
      <label
        htmlFor="toggle"
        tw="block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer text-gray-400"
      >
        theme
      </label>
    </div>
  );
};

export default ToggleTheme;
