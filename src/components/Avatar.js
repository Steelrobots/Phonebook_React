import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateAvatar } from "../action/action";

export default function Avatar() {
    const dispacth = useDispatch()
    const navigate = useNavigate()
    const { state } = useLocation()
    const [selectImage, setSelectImage] = useState()

    const imageSet = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectImage(e.target.files[0])
        }
    };

    const submit = () => {
        const formData = new FormData()
        formData.append('avatar', selectImage)
        dispacth(updateAvatar(state.id, formData))
        navigate('/')
    }
    return (
        <div className="container-avatar">
            <h1>Change Avatar</h1>
            <form onSubmit={submit}>
                <div className="ava-input">
                    <label htmlFor="avatar">avatar</label>
                    <input type="file" accept='image/*' name="avatar" className="ava-form" placeholder="choose file" onChange={imageSet} />
                </div>
                <button type="submit"><FontAwesomeIcon icon="fa-light fa-floppy-disk" /></button>
                <Link to={'/'}><FontAwesomeIcon icon="fa-solid fa-rotate-left" /></Link>
            </form>
            {(selectImage ? (<div className="preview">
                <img src={URL.createObjectURL(selectImage)} alt="avatar" />
            </div>) : (
                <div className="preview">
                    <img src={"http:/localhost:3001/images/" + (state.avatar ? state.avatar : "Defaultavatar.png")} alt="avatar" />
                </div>)
            )}
        </div>
    )
}