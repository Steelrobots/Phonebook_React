import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Avatar(){
    return(
        <div className="container-avatar">
            <h1>Change Avatar</h1>
            <form>
                <div className="ava-input">
                    <label htmlFor="avatar">avatar</label>
                  <input type="file" name="avatar" className="ava-form" placeholder="choose file"/>
                </div>
                <button type="submit"><FontAwesomeIcon icon="fa-light fa-floppy-disk" /></button>
                <Link to={'/'}><FontAwesomeIcon icon="fa-solid fa-rotate-left" /></Link>
            </form>

            <div className="preview">
                <img src={"http:/localhost:3001/images/" + (state.avatar? state.avatar : "Defaultavatar.png")} alt="avatar"/>
            </div>
        </div>
    )
}