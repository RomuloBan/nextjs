import React from 'react'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router';

const Page = () => {
    const router = useRouter();
    const { id } = router.query;
    return <h1>Note {id}</h1>
}

export default Page;