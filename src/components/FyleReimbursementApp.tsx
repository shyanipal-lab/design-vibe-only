'use client'

import * as React from 'react'
import CustomersTableCard, { Customer } from '@/components/ui/customers-table-card'

const FYLE_EXPENSES: Customer[] = [
  {
    id: 'exp_1',
    date: 'Mar 28, 2026',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Fuel for Site Visit',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    revenue: '$45.00',
  },
  {
    id: 'exp_2',
    date: 'Mar 25, 2026',
    status: 'Ref',
    statusVariant: 'warning',
    name: 'Client Lunch',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    revenue: '$120.50',
  },
  {
    id: 'exp_3',
    date: 'Mar 22, 2026',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Office Supplies',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Soren',
    revenue: '$89.99',
  },
  {
    id: 'exp_4',
    date: 'Mar 20, 2026',
    status: 'Cancelled',
    statusVariant: 'danger',
    name: 'Software Subscription',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Toby',
    revenue: '$29.00',
  },
]

export default function FyleReimbursementApp() {
  return (
    <div className="w-full h-full bg-zinc-50 p-4 md:p-8">
      <CustomersTableCard 
        title="Reimbursements"
        subtitle="Manage and track your expense reports in real-time."
        customers={FYLE_EXPENSES}
        className="max-w-4xl mx-auto shadow-2xl"
      />
    </div>
  )
}
