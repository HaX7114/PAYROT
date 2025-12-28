
import { FeatureItem, ServiceItem, FooterSection } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    number: '001',
    title: 'GLOBAL ACCOUNT ACCESS',
    description: 'Receive Payments In USD, EUR, GBP, And More With Local Bank Details.'
  },
  {
    id: 'f2',
    number: '002',
    title: 'FOREIGN EXCHANGE RATES',
    description: 'Benefit From Real-Time Rates With Minimal Conversion Fees.'
  },
  {
    id: 'f3',
    number: '003',
    title: 'SMART FAST PAY TOOLS',
    description: 'Easily Connect With Platforms Like Upwork, Fiverr, And Amazon.'
  },
  {
    id: 'f4',
    number: '004',
    title: 'SUPER EASY FUND WITHDRAWALS',
    description: 'Transfer Funds To Your Local Bank Or Use Our Payrot Card For Direct Access.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Freelancers',
    description: 'Say Goodbye To Payment Delays And Complicated Systems. With Payrot, You Get A Simple, Fast, And Reliable Way To Receive Payments From Clients Around The World With Zero Card Fees And Full Control Over Your Funds.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    linkText: 'GET PAID FASTER'
  },
  {
    title: 'Businesses',
    description: "Whether You're A Startup Or An Established Company, Payrot Empowers You To Manage Cross-Border Transactions Effortlessly. Scale Your Operations, Pay Vendors Globally, And Keep Your Finances Organized.",
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    linkText: 'START MANAGING PAYMENTS'
  },
  {
    title: 'Marketplaces',
    description: 'From Small Online Shops To Large-Scale Platforms, Payrot Helps You Automate And Streamline Payouts To Sellers And Partners Worldwide. Increase Trust, And Ensure Everyone Gets Paid On Time Without Hidden Costs.',
    imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
    linkText: 'STREAMLINE YOUR PAYOUTS'
  }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Personal Accounts', href: '#' },
      { label: 'Business Payouts', href: '#' },
      { label: 'Virtual Cards', href: '#', isNew: true },
      { label: 'Expense Management', href: '#' },
      { label: 'Merchant API', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Developer Hub', href: '#' },
      { label: 'Success Stories', href: '#' },
      { label: 'Fee Calculator', href: '#' },
      { label: 'Security Center', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Payrot', href: '#' },
      { label: 'Our Story', href: '#' },
      { label: 'Careers', href: '#', isNew: true },
      { label: 'Press Kit', href: '#' },
      { label: 'Sustainability', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' },
      { label: 'AML/KYC', href: '#' }
    ]
  }
];
