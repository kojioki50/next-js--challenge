/* eslint-disable react/display-name */

import { useRouter } from 'next/router'
import { FC, memo, ReactNode } from 'react'

type Props = {
  disabled?: boolean
}
export const BackButton: FC<Props> = memo((props) => {
  const router = useRouter()
  const { disabled = false } = props

  return (
    <>
      <button
        className="my-5 px-3 py-2 text-xl rounded border border-black-500"
        disabled={disabled}
        onClick={() => router.back()}
      >
        Back
      </button>
    </>
  )
})
