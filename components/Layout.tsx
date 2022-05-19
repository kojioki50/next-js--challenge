import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { AcademicCapIcon } from '@heroicons/react/solid'

type Title = {
  title: string
  children: ReactNode
}

export const Layout: FC<Title> = ({ children, title = 'Next app' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="text-2xl flex w-screen items-center justify-center my-5">
         {title} <AcademicCapIcon className="h-6 w-6 text-red-500" />{' '}
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center "></footer>
    </div>
  )
}
