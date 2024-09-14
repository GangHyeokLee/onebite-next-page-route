import {PropsWithChildren} from "react";
import Link from "next/link";

export default function GlobalLayout({children}: PropsWithChildren) {
    return (
        <div className="container bg-white min-vh-100 mx-auto my-0 shadow-lg">
            <header className="h-25 fw-bold fs-5 lh-lg">
                <Link href={'/'} className="text-black text-decoration-none">📚 ONEBITE BOOKS</Link>
            </header>
            <main className="pt-3">
                {children}
            </main>
            <footer className="py-5 px-0">제작 @이강혁</footer>
        </div>
    );
}