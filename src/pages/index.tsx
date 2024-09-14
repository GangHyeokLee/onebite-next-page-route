import SearchableLayout from "@/components/searchable-layout";
import {ReactNode} from "react";
import BookItem from "@/components/book-item";
import books from "@/mock/books.json";

export default function Home() {
    return (
        <div className="d-flex flex-column" style={{gap: "20px"}}>
            <section>
                <h3 className="fw-bold mb-5">지금 추천하는 도서</h3>
                {books.map((book) => <BookItem key={book.id} {...book} />)}
            </section>
            <section>
                <h3 className="fw-bold mb-5">등록된 모든 도서</h3>
                {books.map((book) => <BookItem key={book.id} {...book} />)}
            </section>
        </div>
    );
}

Home.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}