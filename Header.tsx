import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageDropdown from './LanguageDropdown';

type HeaderProps = { onToggleSidebar: () => void };

export default function Header({ onToggleSidebar }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <header className="header">
      <div className="topbar">
        <button aria-label="menu" className="icon-btn" onClick={onToggleSidebar}>
          <img src="/icons/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />
        </button>
        <div className="logo-placeholder" aria-label="logo" />
        <nav className="utility">
          <Link to="/explainers" className="with-icon">
            <img src="/icons/group_search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />
            {t('nav.explainers')}
          </Link>
          <Link to="/special-reports" className="with-icon">
            <img src="/icons/news_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />
            {t('nav.specialReports')}
          </Link>
          <Link to="/podcast" className="with-icon"><img src="/icons/podcasts_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />{t('nav.podcast')}</Link>
          <Link to="/video" className="with-icon"><img src="/icons/video_label_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />{t('nav.video')}</Link>
          <Link to="/weather" className="with-icon"><img src="/icons/clear_day_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />{t('nav.weather')}</Link>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="live with-icon">
            <img src="/icons/live_tv_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />{t('nav.live')}
          </a>
          <form onSubmit={submit} className="search">
            <img src="/icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="icon-img" />
            <input
              type="search"
              placeholder={t('nav.searchPlaceholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <LanguageDropdown />
        </nav>
      </div>

      <nav className="mainnav">
        <Link to="/latest">{t('nav.latest')}</Link>
        <Link to="/world">{t('nav.world')}</Link>
        <Link to="/business">{t('nav.business')}</Link>
        <Link to="/tourism">{t('nav.tourism')}</Link>
        <Link to="/culture">{t('nav.culture')}</Link>
        <Link to="/healt">{t('nav.healt')}</Link>
        <Link to="/science">{t('nav.science')}</Link>
        <Link to="/green">{t('nav.green')}</Link>
        <Link to="/lifestyle">{t('nav.lifestyle')}</Link>
        <Link to="/more">{t('nav.more')}</Link>
      </nav>
    </header>
  );
}
