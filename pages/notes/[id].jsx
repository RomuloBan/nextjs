/** @jsx jsx */ /** @jsxRuntime classic */ 
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotePage = () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>
  )
}

export default NotePage;