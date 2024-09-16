import React, {ReactNode, useEffect, useState} from 'react'
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
// import {GetServerSidePropsContext, InferGetStaticPropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import {useRouter} from "next/router";
import {BookData} from "@/type";

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
        <div>
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    )
}

Pagesearch.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}