import { LogoutIcon } from '@heroicons/react/solid'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useQueryClient } from 'react-query'
import { BackButton } from '../components/BackButton'
import { Layout } from '../components/Layout'
import { Notice, Task } from '../types/types'
import { supabase } from '../utils/supabase'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true })
  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true })
  return { props: { tasks, notices } }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const signOut = () => {
    supabase.auth.signOut()
    queryClient.removeQueries('todos')
    queryClient.removeQueries('notices')
  }
  return (
    <Layout title="SSR">
      <div className="grid grid-cols-2 gap-40">
        <ul>
          {tasks.map((task) => {
            return (
              <li className="my-3" key={task.id}>
                <p className="text-lg text-blue-500">{task.title}</p>
              </li>
            )
          })}
        </ul>
        <ul>
          {notices.map((notice) => {
            return (
              <li className="my-3" key={notice.id}>
                <p className="text-lg text-blue-500">{notice.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <BackButton />
      <Link href="/home" prefetch={false}>
        <a className="my-3 text-xl text-indigo-500 bg-black py-2 px-3 hover:text-red-500 rounded">
          Go Home
        </a>
      </Link>
      <LogoutIcon
        className="my-5 h-6 w-6 cursor-pointerbtext-blue-500"
        onClick={signOut}
      />
    </Layout>
  )
}

export default Ssr
