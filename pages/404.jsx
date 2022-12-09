import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'

const NotFound = () => {

    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    },[])
  return (
    <div className='not-found'>
        <h1>Ooooops...</h1>
        <h2>The Page cannot be found</h2>
        
        <Link href="/" className='not-found-a'>Go Back Home</Link>
    </div>
  )
}

export default NotFound