import {BookData} from "@/type";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
    let url = `${process.env.DB_HOST}/book`;
    if(q){
        url += `/search?q=${q}`;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}