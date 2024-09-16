import {BookData} from "@/type";

export default async function fetchRandomBooks():Promise<BookData[]> {
    const url = `${process.env.NEXT_PUBLIC_DB_HOST}/book/random`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return await response.json();
    }catch (error){
        console.error(error);
        return [];
    }
}