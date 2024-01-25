
import { useState } from "react";
import SearchBar from "./SearchBar";
import PhoneList from "./PhoneList";


export default function PhoneBox() {

    const [keyword, setKeyword] = useState('');
    const [sort, setSort] = useState('asc')
    return (
        <>
            <SearchBar keyword={keyword} setKeyword={setKeyword} sort={sort} setSort={setSort} />
            <PhoneList keyword = {keyword} sort = {sort} />

        </>
    )
}