'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import CustomersTableCard from '@/components/ui/customers-table-card'

export default function Features() {
  return (
    <section className="w-full">
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="text-center md:text-left">
            <h2 className="text-foreground text-4xl font-black uppercase tracking-tighter leading-none">Effortless Task Management</h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg font-medium">
              Automate your tasks and workflows by connecting your favorite tools like Notion, Todoist, and
              more. AI-powered scheduling helps you stay on track and adapt to changing priorities.
            </p>
            <div className="bg-foreground/5 rounded-[40px] p-4 md:p-8 border border-border/60 shadow-2xl">
              <CustomersTableCard />
            </div>
          </div>

          <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
            <div className="group">
              <h3 className="text-foreground text-xl font-black uppercase tracking-tight">Marketing Campaigns</h3>
              <p className="text-muted-foreground my-4 text-lg font-medium leading-tight">
                Effortlessly plan and execute your marketing campaigns organized.
              </p>
              <Card className="aspect-video overflow-hidden px-6 bg-zinc-50 border-2 border-zinc-200 rounded-[32px] transition-all group-hover:border-brand-primary/30">
                <Card className="h-full translate-y-6 bg-white rounded-t-2xl shadow-2xl border-zinc-200" />
              </Card>
            </div>
            <div className="group">
              <h3 className="text-foreground text-xl font-black uppercase tracking-tight">AI Meeting Scheduler</h3>
              <p className="text-muted-foreground my-4 text-lg font-medium leading-tight">
                Effortlessly book and manage your meetings. Stay on top of your schedule.
              </p>
              <Card className="aspect-video overflow-hidden bg-zinc-50 border-2 border-zinc-200 rounded-[32px] transition-all group-hover:border-brand-primary/30">
                <Card className="translate-y-6 h-full bg-white rounded-t-2xl shadow-2xl border-zinc-200" />
              </Card>
            </div>
          </div>

          <blockquote className="before:bg-brand-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            <p className="text-foreground text-lg font-bold italic leading-tight">
              "Wow, auto-generated pages are the kind of thing that you don't even know you need until you see
              it. It's like an AI-native CRM."
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite className="font-black uppercase tracking-tighter text-sm">Méschac Irung</cite>
              <span aria-hidden className="bg-foreground/15 size-1 rounded-full"></span>
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Creator</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
