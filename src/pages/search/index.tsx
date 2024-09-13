import { useRouter } from "next/router"
import React from 'react'

export default function Pagesearch() {
  const router = useRouter();

  const { q } = router.query;

  return (
    <h1>Search {q}</h1>
  )
}
