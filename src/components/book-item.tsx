import {BookData} from "@/type";
import Link from "next/link";

export default function BookItem({id, title, subTitle, author, publisher, coverImgUrl}: BookData) {
    return (
        <Link href={`/book/${id}`} className="d-flex py-5 px-2 text-black text-decoration-none" style={{gap:"15px",  borderBottom:"solid 1px rgb{20, 20, 20}"}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={coverImgUrl} alt={title} style={{height:100}} />
            <div>
                <div className="fw-bold"> {title}</div>
                <div style={{wordBreak:"keep-all"}}>{subTitle}</div>
                <br/>
                <div className="text-secondary">{author} | {publisher}</div>
            </div>
        </Link>
    );
}