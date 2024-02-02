import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateAvatar } from "../action/action";
import { faArrowRotateLeft, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "../../public/Defaultavatar.png"

export default function Avatar() {
    const dispatch = useDispatch()
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
        dispatch(updateAvatar(state.id, formData))
        navigate('/')

    }

    return (
        <div className="container-avatar">
            <h1>Change Avatar</h1>
            <form onSubmit={submit}>
                <div className="ava-input">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" accept='image/*' name="avatar" className="ava-form" placeholder="choose file" onChange={imageSet} />
                </div>
                <button type="submit" className="ava-btn"><FontAwesomeIcon icon={faFloppyDisk} /></button>
                <Link to={'/'} ><button className="back-btn"><FontAwesomeIcon icon={faArrowRotateLeft} /></button></Link>
            </form>
            {(selectImage ? (<div className="preview">
                <img src={URL.createObjectURL(selectImage)} alt="avatar" />
            </div>) : (
                <div className="preview">
                    <img src={"http://localhost:3001/images/" + (state.avatar == null ? 'Defaultavatar.png' : `${state.avatar}`)} alt="Avatar" />
                </div>)
            )}
        </div>
    )
}

const HandeImageUpload = () => {
    const imageRef = useRef()
    const [defaultImage, setDefaultImage] = useState(defaultAvatar)

    const showOpenDialog = () => {
        imageRef.current.click()
    }
    const handleChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectImage(e.target.files[0])
        }
    };

}