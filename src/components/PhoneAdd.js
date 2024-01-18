import { Link } from "react-router-dom";


export default function PhoneAdd() {
    return (
        <div  className="container">
        <form>
            <div className="container-add">
                <input type="text" id="name" />
                <input type="text" id="phone" />
            </div>
            <div className="btn-add">
                <button type="submit"><p>save</p></button>
                <Link to="/">cancel</Link>
            </div>
        </form>
        </div>
    )
}