import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const { faArrowDownZA, faArrowUpAZ, faUserPlus } = require("@fortawesome/free-solid-svg-icons");



function BtnAsc({ sort, setSort }) {
    return (
        <button onClick={() => { setSort('desc') }}>
            <FontAwesomeIcon icon={faArrowUpAZ} />
        </button>
    )
}
function BtnDesc({ sort, setSort }) {
    return (
        <button onClick={() => { setSort('asc') }}>
            <FontAwesomeIcon icon={faArrowDownZA} />
        </button>
    )
}
export default function SearchBar({ keyword, setKeyword, sort, setSort }) {
    const searchHandler = (event) =>{
        const {value} = event.target
        setKeyword(value)
    }
    return (
        <div className="all">
            {sort === 'asc' || sort.sort === 'asc' ? <BtnAsc sort={sort} setSort={setSort} /> : <BtnDesc sort={sort} setSort={setSort} />}
            <div className="nosubmit">
                <input className="nosubmit" type="search" value={keyword} onInput={searchHandler}/>
            </div>
            <Link to={"/add"}>
                <button>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </Link>
        </div>
    )
}