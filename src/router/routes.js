
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        icon: 'home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: 'About',
        path: '/about',
        icon: 'help',
        component: () => import('pages/AboutPage.vue')
      },
      {
        name: 'Credits',
        path: '/credits',
        icon: 'copyright',
        component: () => import('pages/CreditsPage.vue')
      },
      {
        name: 'Astronomy',
        path: '/astronomy',
        icon: 'nights_stay',
        component: () => import('pages/AstronomyPage.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
