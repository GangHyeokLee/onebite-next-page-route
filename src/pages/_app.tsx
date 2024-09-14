import type {AppProps} from "next/app";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter();

    useEffect(() => {
        router.prefetch('/test');
    }, []);


    const onClickButton = () => {
        router.push("/text");
    };

    return <>
        <header>
            <Link href={"/"}>Index</Link>
            &nbsp;
            <Link href={"/search"} prefetch={false}>Search</Link>
            &nbsp;
            <Link href={"/book/1"}>book/1</Link>
            <div>
                <button onClick={onClickButton}>/test 페이지로 이동</button>
            </div>
        </header>
        <Component {...pageProps} />
    </>;
}
