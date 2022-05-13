import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { FC, useEffect, useState } from 'react'
import { useMutateNotice } from '../hooks/useMutateNotices'
import useStore from '../store'
import { Notice } from '../types/types'
import { supabase } from '../utils/supabase'

export const NoticeItem: FC<Omit<Notice, 'created_at'>> = ({
  id,
  content,
  user_id,
}) => {
  const [userId, setUserId] = useState<string | undefined>('')
  const update = useStore((state) => state.updateEditedNotice)
  const { deleteNoticeMutation } = useMutateNotice()
  useEffect(() => {
    setUserId(supabase.auth.user()?.id)
  }, [])
  return (
    <li className="my-5 text-lg">
      <span className="my-5 text-lg">{content}</span>
      {userId === user_id && (
        <div className="float-right ml-20 flex">
          <PencilIcon
            className="cursor-pointer  mx-3 h-5 w-5"
            onClick={() => {
              update({
                id: id,
                content: content,
              })
            }}
          />

          <TrashIcon
            className="cursor-pointer mx-3 h-5 w-5"
            onClick={() => {
              deleteNoticeMutation.mutate(id)
            }}
          />
        </div>
      )}
    </li>
  )
}
