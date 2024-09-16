import SearchableLayout from "@/components/searchable-layout";
import {ReactNode} from "react";
import BookItem from "@/components/book-item";
import {InferGetStaticPropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

export const getStaticProps = async () => {
    // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
    const [allBooks, recoBooks] = await Promise.all([
        fetchBooks(),
        fetchRandomBooks()
    ])
    return {
        props: {
            allBooks,
            recoBooks,
        },
        revalidate: 3,
    }
};

export default function Home({allBooks, recoBooks}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>한입북스</title>
                <meta property="og:image" content="/thumnail.png"/>
                <meta property="og:title" content="한입북스"/>
                <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요." />
            </Head>
            <div className="d-flex flex-column" style={{gap: "20px"}}>
                <section>
                    <h3 className="fw-bold mb-5">지금 추천하는 도서</h3>
                    {recoBooks.map((book) => <BookItem key={book.id} {...book} />)}
                </section>
                <section>
                    <h3 className="fw-bold mb-5">등록된 모든 도서</h3>
                    {allBooks.map((book) => <BookItem key={book.id} {...book} />)}
                </section>
            </div>
        </>
    );
}

Home.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}