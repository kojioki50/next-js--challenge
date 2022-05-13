import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabase'
import { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter()
  const RoutePath = async () => {
    const user = supabase.auth.user()
    if (user && pathname === '/') {
      push('/home')
    } else if (!user && pathname !== '/') {
      await push('/')
    }
  }
  supabase.auth.onAuthStateChange((event, _) => {
    if (event === 'SIGNED_IN' && pathname === '/') {
      push('/home')
    }
    if (event === 'SIGNED_OUT') {
      push('/')
    }
  })
  useEffect(() => {
    RoutePath()
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
