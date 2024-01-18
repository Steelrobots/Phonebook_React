import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export default function PhoneItem(){
    return(
        <div className="container-item">
            <div className="container-image">
            <Link>
                <img src="/Defaultavatar.png" alt="avatar" className="avatar"/>
                </Link>
            </div>
            <div className="list">
                <p>Andri Priyadi</p>
                <p>089695991757</p>
                <div className="btn-list">
                    <button className="btn">
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </button>
                    &nbsp;
                    <button className="btn">
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </button>
               
                </div>
            </div>


        </div>
    )
}