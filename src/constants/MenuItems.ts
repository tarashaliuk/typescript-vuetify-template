import IMenuItem from '@/types/IMenuItem';

const menuItems: IMenuItem[] = [
  { icon: 'mdi-home', text: 'Home', routeName: 'Home' },
  { icon: 'mdi-history', text: 'About', routeName: 'About' },
  // { icon: 'mdi-content-copy', text: 'Duplicates' },
  // {
  //   icon: 'mdi-chevron-up',
  //   'icon-alt': 'mdi-chevron-down',
  //   text: 'Labels',
  //   model: true,
  //   children: [
  //     { icon: 'mdi-plus', text: 'Create label' },
  //   ],
  // },
  // { icon: 'mdi-cog', text: 'Settings' },
  // { icon: 'mdi-message', text: 'Send feedback' },
  // { icon: 'mdi-help-circle', text: 'Help' },
  // { icon: 'mdi-cellphone-link', text: 'App downloads' },
  // { icon: 'mdi-keyboard', text: 'Go to the old version' },
]

export default menuItems
