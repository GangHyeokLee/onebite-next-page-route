import {BookData} from "@/type";

export default async function fetchBook(id: number): Promise<BookData | null> {
    const url = `${process.env.DB_HOST}/book/${id}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return await response.json();
    }catch (error){
        console.error(error);
        return null;
    }
};