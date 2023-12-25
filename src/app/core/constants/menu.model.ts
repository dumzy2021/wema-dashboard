export const DashboardMenu: IMenu[] = [
  {
    icon: '/assets/svgs/dashboard.svg',
    title: 'Dashboard',
    link: '/dashboard',
    hasSub: false,
    isSettingsList: false,
  },
  {
    icon: '/assets/svgs/requests.svg',
    title: 'Requests',
    link: '/requests',
    hasSub: false,
    isSettingsList: false,
  },

  {
    icon: '/assets/svgs/kycs.svg',
    title: 'KYCs',
    link: '/kycs',
    hasSub: false,
    isSettingsList: false,
  },
  {
    icon: '/assets/svgs/reports.svg',
    title: 'Reports',
    link: '/reports',
    hasSub: false,
    isSettingsList: false,
  },
  {
    icon: '/assets/svgs/audit-trail.svg',
    title: 'Audit Trail',
    hasSub: true,
    isSettingsList: false,
    subs: [
      {
        title: 'Audits',
        link: '/audits',
        icon: '/assets/svgs/audit-trail.svg',
      },
    ],
  },
  {
    icon: '/assets/svgs/users.svg',
    title: 'Users',
    link: '/users',
    hasSub: false,
    isSettingsList: false,
  },
  {
    icon: '/assets/svgs/settings.svg',
    title: 'Settings',
    link: '/settings',
    hasSub: false,
    isSettingsList: false,
  },
];

export interface IMenu {
  icon: string;
  title: string;
  link?: string;
  hasSub?: boolean;
  isSettingsList?: boolean;
  subs?: { title: string; link: string; icon?: string }[];
}
