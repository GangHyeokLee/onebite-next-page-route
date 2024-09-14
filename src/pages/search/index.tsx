import {useRouter} from "next/router"
import React, {ReactNode} from 'react'
import SearchableLayout from "@/components/searchable-layout";

export default function Pagesearch() {
    const router = useRouter();

    const {q} = router.query;

    return (
        <h1>Search {q}</h1>
    )
}

Pagesearch.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}