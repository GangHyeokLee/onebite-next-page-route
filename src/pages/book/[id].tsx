import React from 'react'
import books from "@/mock/books.json";
import styles from "./[id].module.css";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import fetchBook from "@/lib/fetch-book";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const { id } = context.params!;
    console.log(id)
    const book = await fetchBook(Number(id));

    return {
        props: {
            book,
        }
    }
}

export default function Page({book}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if(!book) return "문제가 발생했습니다. 다시 시도하세요."
    const {
        id, title, subTitle, author, coverImgUrl, description, publisher
    } = book;

    return (
        <div className="d-flex flex-column" style={{gap: 10}}>
            <div style={{
                backgroundImage: `url('${coverImgUrl}')`,
            }} className={styles.cover_img_container}>
                <img src={coverImgUrl} alt={title}/>
            </div>
            <div className="fw-bold text-lg-start"> {title}</div>
            <div className="text-secondary">{subTitle}</div>
            <div className="text-secondary">{author} | {publisher}</div>
            <div className="bg-body-tertiary p-3 lh-base" style={{whiteSpace: "pre-line"}}>{description}</div>
        </div>
    )
}
