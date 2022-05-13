import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { useMutateTask } from '../hooks/useMutateTask'
import useStore from '../store'
import { Task } from '../types/types'

export const TaskItem: FC<Omit<Task, 'created_at' | 'user_id'>> = ({id,title}) => {
  const update = useStore((state) => state.updateEditedTask)
  const { deleteTaskMutation } = useMutateTask()
  return (
    <li className="my-5 text-lg">
      <span className="my-5 h-5 w-5">{title}</span>
      <div className="float-right ml-20 flex">
        <PencilIcon
          className="cursor-pointer mx-3 h-5 w-5"
          onClick={() => {
            update({
              id: id,
              title: title,
            })
          }}
        />

        <TrashIcon
          className="cursor-pointer mx-3 h-5 w-5"
          onClick={() => {
            deleteTaskMutation.mutate(id)
          }}
        />
      </div>
    </li>
  )
}
