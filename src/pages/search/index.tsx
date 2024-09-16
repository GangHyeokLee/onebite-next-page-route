import React, {ReactNode, useEffect, useState} from 'react'
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
// import {GetServerSidePropsContext, InferGetStaticPropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import {useRouter} from "next/router";
import {BookData} from "@/type";
import Head from "next/head";

// export const getStaticProps = async (context: GetServerSidePropsContext) => {
//     const {q} = context.query;
//
//     const books = await fetchBooks(q as string);
//
//     return {
//         props: {
//             books
//         }
//     }
// }


export default function Pagesearch() {

    const router = useRouter();
    const q = router.query.q;
    const [books, setBooks] = useState<BookData[]>([]);

    const fetchSearchResult = async () =>{
        const data = await fetchBooks(q as string);
        setBooks(data);
    }

    useEffect(() => {
        if(q){
            fetchSearchResult();
        }
    }, [q]);

    return (
        <>
            <Head>
                <title>한입북스 - 검색결과</title>
                <meta property="og:image" content="/thumnail.png"/>
                <meta property="og:title" content="한입북스"/>
                <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요." />
            </Head>
            <div>
                {books.map((book) => <BookItem key={book.id} {...book} />)}
            </div>
        </>
    )
}

Pagesearch.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}