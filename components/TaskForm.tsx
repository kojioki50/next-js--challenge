import { FC, FormEvent } from 'react'
import { useMutateTask } from '../hooks/useMutateTask'
import useStore from '../store'
import { supabase } from '../utils/supabase'

export const TaskForm: FC = () => {
  const { editedTask } = useStore()
  const update = useStore((state) => state.updateEditedTask)
  const { createTaskMutation, updateTaskMutation } = useMutateTask()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === '')
      createTaskMutation.mutate({
        title: editedTask.title,
        user_id: supabase.auth.user()?.id,
      })
    else
      updateTaskMutation.mutate({
        title: editedTask.title,
        id: editedTask.id,
      })
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-skyblue-300 focus:border-blue-500 focus:outline-none"
        placeholder="New?"
        value={editedTask.title}
        onChange={(e) => update({ ...editedTask, title: e.target.value })}
      />
      <button
        type="submit"
        className="ml-2 rounded bg-blue-300 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500"
      >
        {editedTask.id ? 'Update' : 'Create'}
      </button>
    </form>
  )
}
