import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/twitter.png';
import { useTranslation } from 'react-i18next';
import toggleDarkMode from '../../utility/dark-mode';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  const handleDarkMode = e => {
    toggleDarkMode(e.target.value);
  };

  return (
    <header className="p-2 grid grid-flow-col grid-cols-footer justify-items-start items-center bg-gray-500">
      <Link to="/" className="px-10 pr-10">
        <img src={Logo} className="w-10 h-10 object-cover"></img>
      </Link>
      <nav>
        <ul className="grid grid-flow-col">
          <li className="px-4">
            <Link to="/" className="text-gray-100 text-xl">
              {t('home')}
            </Link>
          </li>
          <li className="px-4">
            <Link to="/blog" className="text-gray-100 text-xl">
              {t('blog')}
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="text-gray-100 text-xl">
              {t('contact')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="justify-self-end items-center grid gap-4 grid-flow-col text-gray-200 pr-6">
        <div className="grid">
          <label htmlFor="dark">
            <input
              type="radio"
              id="dark"
              name="radio"
              value="dark"
              onChange={handleDarkMode}
              className="mr-2"
            />
            <span>Dark</span>
          </label>
          <label htmlFor="light">
            <input
              type="radio"
              id="light"
              name="radio"
              value="light"
              onChange={handleDarkMode}
              className="mr-2"
              defaultChecked
            />
            <span>Light</span>
          </label>
        </div>
        <div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => changeLanguage('en')}
          >
            EN
          </div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => changeLanguage('tr')}
          >
            TR
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
