import {BookData} from "@/type";
import Link from "next/link";
import {bottom} from "@popperjs/core";

export default function BookItem({id, title, subTitle, description, author, publisher, coverImgUrl}: BookData) {
    return (
        <Link href={`/book/${id}`} className="d-flex py-5 px-2 text-black text-decoration-none" style={{gap:"15px",  borderBottom:"solid 1px rgb{20, 20, 20}"}}>
            <img src={coverImgUrl} alt={title} className="w-25"/>
            <div>
                <div className="fw-bold"> {title}</div>
                <div style={{wordBreak:"keep-all"}}>{subTitle}</div>
                <br/>
                <div className="text-secondary">{author} | {publisher}</div>
            </div>
        </Link>
    );
}