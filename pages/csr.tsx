import { LogoutIcon } from '@heroicons/react/solid'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { BackButton } from '../components/BackButton'
import { Layout } from '../components/Layout'
import { Notice, Task } from '../types/types'
import { supabase } from '../utils/supabase'

const Csr: NextPage = () => {
  const queryClient = useQueryClient()
  const signOut = () => {
    supabase.auth.signOut()
    queryClient.removeQueries('todos')
    queryClient.removeQueries('notices')
  }
  const [tasks, setTasks] = useState<Task[]>([])
  const [notices, setNotices] = useState<Notice[]>([])
  useEffect(() => {
    const getTasks = async () => {
      const { data: tasks } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true })
      setTasks(tasks as Task[])
    }
    const getNotices = async () => {
      const { data: notices } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: true })
      setNotices(notices as Notice[])
    }

    getTasks()
    getNotices()
  }, [])
  return (
    <Layout title="CSR">
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

export default Csr
