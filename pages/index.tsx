import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { Layout } from '../components/Layout'
import { useMutateAuth } from '../hooks/useMutateAuth'

const Auth: NextPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMutateAuth()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      loginMutation.mutate()
    } else {
      registerMutation.mutate()
    }
  }

  return (
    <Layout title={'Home'}>
      {'Please Log in or Sign up'}
      <form onSubmit={handleSubmit}>
        <div className="my-5 text-center">
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="my-3 px-2 py-3 text-lg rounded text-center cursor-pointer font-medium  bg-black text-indigo-500 hover:text-red-500"
          >
            change mode ?
          </span>
        </div>
        <div>
          <input
            type="text"
            required
            className="my-3 rounded-md border border-blue-300 placeholder-black-500 focus:outline-none"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <input
            type="password"
            required
            className="my-3 rounded-md border border-blue-300 placeholder-black-500 focus:outline-none"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 my-3 text-lg font-medium text-white hover:bg-red-700"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </Layout>
  )
}

export default Auth
