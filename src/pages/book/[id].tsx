import React from 'react'
import styles from "./[id].module.css";
import {GetServerSidePropsContext, InferGetStaticPropsType} from "next";
import fetchBook from "@/lib/fetch-book";
import {useRouter} from "next/router";

export const getStaticProps = async (context: GetServerSidePropsContext) => {

    const {id} = context.params!;
    const book = await fetchBook(Number(id));

    if(!book){
        return {
            notFound: true,
        }
    }

    return {
        props: {
            book,
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {params: {id: "1"}},
            {params: {id: "2"}},
            {params: {id: "3"}},
        ],
        fallback: true,
    }
}

export default function Page({book}: InferGetStaticPropsType<typeof getStaticProps>) {

    const router = useRouter();
    if(router.isFallback){
        return "로딩중입니다.";
    } else if(!book){
        return "문제가 생겼습니다. 다시 시도하세요.";
    }
    const {
        title, subTitle, author, coverImgUrl, description, publisher
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
