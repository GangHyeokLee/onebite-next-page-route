import {ChangeEvent, PropsWithChildren, KeyboardEvent, useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function SearchableLayout({children}: PropsWithChildren) {

    const [search, setSearch] = useState("");
    const router = useRouter();

    const q = router.query.q;

    useEffect(() => {
        setSearch(q?.toString() || "");
    }, [q]);

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        if (!search || q === search) return;
        router.push(`/search?q=${search}`);
    }


    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            onSubmit();
        }
    };

    return (
        <div>
            <div className="d-flex flex-row mb-5" style={{gap: '10px'}}>
                <input className="form-control flex-grow-1"
                       type="text"
                       placeholder="검색어를 입력하세요."
                       value={search}
                       onChange={onChangeSearch}
                       onKeyDown={onKeyDown}
                />
                <button className="btn btn-primary text-nowrap" onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    );
};