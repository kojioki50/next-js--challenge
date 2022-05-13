import { FC, FormEvent } from 'react'
import { useMutateNotice } from '../hooks/useMutateNotices'
import useStore from '../store'
import { supabase } from '../utils/supabase'

export const NoticeForm: FC = () => {
  const { editedNotice } = useStore()
  const update = useStore((state) => state.updateEditedNotice)
  const { createNoticeMutation, updateNoticeMutation } = useMutateNotice()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedNotice.id === '')
      createNoticeMutation.mutate({
        content: editedNotice.content,
        user_id: supabase.auth.user()?.id,
      })
    else
      updateNoticeMutation.mutate({
        id: editedNotice.id,
        content: editedNotice.content,
      })
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-skyblue-300 focus:border-blue-500 focus:outline-none"
        placeholder="New?"
        value={editedNotice.content}
        onChange={(e) => update({ ...editedNotice, content: e.target.value })}
      />
      <button
        type="submit"
        className="ml-2 rounded  px-3 py-2 text-sm font-medium text-white bg-blue-300 hover:bg-blue-500"
      >
        {editedNotice.id ? 'Update' : 'Create'}
      </button>
    </form>
  )
}
