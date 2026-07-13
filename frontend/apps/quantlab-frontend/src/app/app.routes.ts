import { Route } from '@angular/router';

/**
 * Application route definitions.
 *
 * NOTES:
 * - Routes are defined for standalone components and are lazy-loaded
 *   using `loadComponent()` to keep the initial bundle small.
 * - Do NOT add eager imports of page components here. Use `loadComponent()`.
 * - Browser titles are configured via the `title` property on routes.
 */
export const appRoutes: Route[] = [
  // Redirect root to the dashboard
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  // Primary application pages (lazy loaded standalone components)
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'research',
    title: 'Research',
    loadComponent: () => import('./features/research/research.component').then(m => m.ResearchComponent),
  },
  {
    path: 'strategy-builder',
    title: 'Strategy Builder',
    loadComponent: () => import('./features/strategy-builder/strategy-builder.component').then(m => m.StrategyBuilderComponent),
  },
  {
    path: 'backtesting',
    title: 'Backtesting',
    loadComponent: () => import('./features/backtesting/backtesting.component').then(m => m.BacktestingComponent),
  },
  {
    path: 'settings',
    title: 'Settings',
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent),
  },

  // Home is kept as a lightweight landing page; still lazy-loaded
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },

  // 404 - Not Found (professional error page)
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];