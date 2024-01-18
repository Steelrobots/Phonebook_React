import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const { faArrowDownZA, faArrowUpAZ, faUserPlus } = require("@fortawesome/free-solid-svg-icons");



function BtnAsc() {
    return (
        <button>
            <FontAwesomeIcon icon={faArrowUpAZ} />
        </button>
    )
}
function BtnDesc() {
    return (
        <button>
            <FontAwesomeIcon icon={faArrowDownZA} />
        </button>
    )
}
export default function SearchBar() {
    return (
        <div className="all">
            <BtnAsc />
            <form className="nosubmit">
                <input className="nosubmit" type="search" placeholder="Search..." />
            </form>
            <Link to={"/add"}>
            <button>
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
            </Link>
        </div>
    )
}