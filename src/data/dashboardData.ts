import {
  Activity,
  CheckCircle2,
  CreditCard,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'

export const stats = [
  {
    title: 'Total Revenue',
    value: '$128.4K',
    change: '+12.5% from last month',
    icon: Wallet,
  },
  {
    title: 'Active Users',
    value: '24,892',
    change: '+8.2% from last month',
    icon: Users,
  },
  {
    title: 'Transactions',
    value: '18,340',
    change: '+5.7% from last month',
    icon: CreditCard,
  },
  {
    title: 'Conversion Rate',
    value: '7.8%',
    change: '+2.1% from last month',
    icon: Activity,
  },
]

export const revenueData = [
  { month: 'Jan', revenue: 32000 },
  { month: 'Feb', revenue: 41000 },
  { month: 'Mar', revenue: 38000 },
  { month: 'Apr', revenue: 52000 },
  { month: 'May', revenue: 61000 },
  { month: 'Jun', revenue: 74000 },
  { month: 'Jul', revenue: 69000 },
  { month: 'Aug', revenue: 88000 },
]

export const trafficData = [
  { name: 'Organic', value: 42, color: '#06b6d4' },
  { name: 'Social', value: 28, color: '#8b5cf6' },
  { name: 'Referral', value: 18, color: '#22c55e' },
  { name: 'Paid Ads', value: 12, color: '#f97316' },
]

export const products = [
  {
    name: 'Pulse Pro Plan',
    category: 'Subscription',
    revenue: '$42,800',
    growth: '+14.2%',
  },
  {
    name: 'Analytics Add-on',
    category: 'SaaS Feature',
    revenue: '$28,400',
    growth: '+9.8%',
  },
  {
    name: 'Team Workspace',
    category: 'Collaboration',
    revenue: '$19,250',
    growth: '+6.4%',
  },
  {
    name: 'Automation Pack',
    category: 'Productivity',
    revenue: '$13,900',
    growth: '+4.1%',
  },
]

export const activities = [
  {
    title: 'New enterprise subscription',
    description: 'Pulse Pro Plan purchased by Acme Inc.',
    time: '2 min ago',
    icon: CreditCard,
  },
  {
    title: 'User milestone reached',
    description: 'Active users increased by 8.2% this month.',
    time: '18 min ago',
    icon: UserPlus,
  },
  {
    title: 'Automation rule completed',
    description: 'Monthly revenue report was generated.',
    time: '1 hour ago',
    icon: Zap,
  },
  {
    title: 'Campaign goal completed',
    description: 'Referral campaign reached 92% of target.',
    time: '3 hours ago',
    icon: CheckCircle2,
  },
]