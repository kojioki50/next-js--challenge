import {
  AnnotationIcon,
  BookmarkIcon,
  DocumentTextIcon,
  LogoutIcon,
  StatusOnlineIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import { useQueryClient } from 'react-query'
import { Layout } from '../components/Layout'
import { NoticeForm } from '../components/NoticeForm'
import { NoticeLists } from '../components/NoticeLists'
import { TaskForm } from '../components/TaskForm'
import { TaskLists } from '../components/TaskLists'
import { supabase } from '../utils/supabase'

const Home = () => {
  const queryClient = useQueryClient()
  const signOut = () => {
    supabase.auth.signOut()
    queryClient.removeQueries('todos')
    queryClient.removeQueries('notices')
  }
  return (
    <Layout title="home">
      <div className="grid grid-cols-2 gap-40">
        <div>
          <div className="my-3 flex justfy-center">
            <BookmarkIcon className=" h-8 w-8 text-blue-500" />
          </div>
          <TaskForm />
          <TaskLists />
        </div>
        <div>
          <div className="my-3 flex justfy-center">
            <AnnotationIcon className=" h-8 w-8 text-blue-500" />
          </div>

          <NoticeForm />
          <NoticeLists />
        </div>
      </div>
      <div className="my-5 text-center">
        <Link href="/csr">
          <a className="px-2 py-3 mb-3 text-xl text-blue-500 hover:bg-black rounded">
            Go to CSR
          </a>
        </Link>
      </div>
      <div className="my-5 text-center">
        <Link href="/ssr">
          <a className="px-2 py-3 text-xl text-blue-500 hover:bg-black rounded">
            Go to SSR
          </a>
        </Link>
      </div>
      <div className="my-5 text-center">
        <Link href="/ssg">
          <a className="px-2 py-3 mb-3 text-xl text-blue-500 hover:bg-black rounded">
            Go to SSG
          </a>
        </Link>
      </div>
      <div className="my-5 text-center">
        <Link href="/isr">
          <a className="px-2 py-3 mb-3 text-xl text-blue-500 hover:bg-black rounded">
            Go to ISR
          </a>
        </Link>
      </div>
      <LogoutIcon
        className="my-5 mb-b h-6 w-6 cursor-pointerbtext-blue-500"
        onClick={signOut}
      />
    </Layout>
  )
}

export default Home
