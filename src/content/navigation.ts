import type { NavItem } from '../types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Operations',
    href: '/operations',
    children: [
      { label: 'Livestock', href: '/operations#livestock' },
      { label: 'Grains', href: '/operations#grains' },
      { label: 'Apiculture', href: '/operations#apiculture' },
      { label: 'Processing', href: '/operations#processing' },
    ]
  },
  { label: 'Model', href: '/model' },
  { label: 'Markets', href: '/markets' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Investors', href: '/investors' },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  operations: [
    { label: 'Livestock', href: '/operations#livestock' },
    { label: 'Grains', href: '/operations#grains' },
    { label: 'Apiculture', href: '/operations#apiculture' },
    { label: 'Processing', href: '/operations#processing' },
  ],
  resources: [
    { label: 'Media Center', href: '/media' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Investor Relations', href: '/investors' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};
