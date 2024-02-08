import { faArrowRotateLeft, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { deletePhonebooks, updateAvatar, updateData } from "../action/action";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deletePhonebooks, updateAvatar, updateData } from "../reducers/API";


export default function PhoneItem({ user }) {
    const [isEdit, setIsEdit] = useState(false)
    const [newData, setNewData] = useState({ name: user.name, phone: user.phone })
    const [selectImage, setSelectImage] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputFile = useRef(null)

    const showFileUpload = () => {
        inputFile.current.click()
    }
    const imageSet = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files[0])
            setSelectImage(e.target.files[0])
        }
    };
    useEffect(() => {

        if (selectImage) {
            const dataNew = new FormData();
            dataNew.append("avatar", selectImage);
            dispatch(updateAvatar({ id: user.id, formData: dataNew }));
        }

    }, [selectImage]);
    const handleData = (id, contact) => {
        dispatch(updateData({ id: user.id, contact: newData }))
        setIsEdit(false)
    }
    const submit = (user) => {
        confirmAlert({
            title: `Konfirmasi`,
            message: `Apakah anda yakin ingin menghapus data ${user.name} ?`,
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => dispatch(deletePhonebooks({ id: user.id }))
                },
                {
                    label: 'Tidak'
                }
            ]

        })
    }
    if (isEdit) {
        return (
            <div className="container-item">
                <div className="container-image">
                    <button className="btn-avatar" onClick={showFileUpload}>
                        <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'Defaultavatar.png' : `${user.avatar}`)} className="avatar" alt="avatar" />
                    </button>
                    <input type="file" accept='image/*' name="avatar" id='file' ref={inputFile} style={{ display: "none" }} onChange={imageSet} />
                </div>
                <div className="list-edit" >
                    <input className='input' type="text" id="nameEdit" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                    <input className='input' type="text" id="phoneEdit" value={newData.phone} onChange={(e) => setNewData({ ...newData, phone: e.target.value })} />
                    <div className="btn-list">
                        <button className="btn" onClick={() => { handleData(user.id, newData) }}>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </button>
                        <button className="btn" onClick={() => { setIsEdit(false) }}>
                            <FontAwesomeIcon icon={faArrowRotateLeft} />
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className="container-item" key={user.id}>
                <div className="container-image">
                    <button className="btn-avatar" onClick={showFileUpload}>
                        <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'Defaultavatar.png' : `${user.avatar}`)} className="avatar" alt="avatar" />
                    </button>
                    <input type="file" accept='image/*' name="avatar" id='file' ref={inputFile} style={{ display: "none" }} onChange={imageSet} />
                </div>
                <div className="list">
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <div className="btn-list">
                        <button className="btn" onClick={() => setIsEdit(!isEdit)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        &nbsp;
                        <button className="btn" onClick={() => submit(user)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>

                    </div>
                </div>


            </div>
        )
    }
}