import { lazy } from 'react';

// Keep Home eager-loaded (it's the landing page)
import Home from './pages/Home';

// Lazy load secondary pages for better performance
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Ambassadors = lazy(() => import('./pages/Ambassadors'));
const HowWeWork = lazy(() => import('./pages/HowWeWork'));

export const PAGES = {
    "Home": Home,
    "Pricing": Pricing,
    "FAQ": FAQ,
    "Ambassadors": Ambassadors,
    "HowWeWork": HowWeWork,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};