import { FC } from 'react'
import { useQuery } from 'react-query'
import { GetQueryTasks } from '../hooks/getQueryTasks'
import { Spinner } from './Spinner'
import { TaskItem } from './TaskItem'

export const TaskLists: FC = () => {
  const { data: tasks, status } = GetQueryTasks()
  if (status === 'loading') return <Spinner />
  if (status === 'error') return <p>{'Error'}</p>
  return (
    <ul className="my-5">
      {tasks?.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  )
}
