import React, {ReactNode} from 'react'
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";


export default function Pagesearch() {

    return (
        <div>
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    )
}

Pagesearch.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}