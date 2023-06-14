import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Bookings',
    icon: 'home-outline',
    link: '/pages/bookings',
    home: true,
  },
  {
    title: 'Current Visitors',
    icon: 'people-outline',
    link: '/pages/cur_visitors'
  },
  {
    title: 'ADMINISTRATION',
    group: true,
  },
  {
    title: 'Visitors Log',
    icon: 'book-open',
    link: '/pages/visitors',
  },
  {
    title: 'Employee Management',
    icon: 'briefcase-outline',
    link: '/pages/employees',
  },
  {
    title: 'Company Info',
    icon: 'info-outline',
    link: '/pages/company',
  },
  {
    title: 'Analytics (Coming Soon)',
    icon: 'bar-chart-outline',
    link: '',
  },
];
