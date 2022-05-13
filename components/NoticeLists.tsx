import { FC } from 'react'
import { GetQueryNotices } from '../hooks/getQueryNotices'
import { NoticeItem } from './NoticeItem'
import { Spinner } from './Spinner'

export const NoticeLists: FC = () => {
  const { data: notices, status } = GetQueryNotices()
  if (status === 'loading') return <Spinner />
  if (status === 'error') return <p>{'Error'}</p>

  return (
    <ul className="my-5">
      {notices?.map((notice) => (
        <NoticeItem key={notice.id} id={notice.id} content={notice.content} user_id={notice.user_id} />
      ))}
    </ul>
  )
}
