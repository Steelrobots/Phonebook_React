import { faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePhonebooks, updateData } from "../action/action";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function PhoneItem({ user }) {
    const [isEdit, setIsEdit] = useState(false)
    const [newData, setNewData] = useState({ name: user.name, phone: user.phone })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleData = (id, contact) => {
        dispatch(updateData(id, contact))
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
    const toAvatar = () => {
        navigate('/avatar', { state: { id: user.id, avatar: user.avatar } })
    }
    if (isEdit) {
        return (
            <div className="container-item">
                <div className="container-image">
                    <img src={user.avatar == null ? `/Defaultavatar.png` : `../images/${user.avatar}`} alt='not source' className="avatar" />
                </div>
                <div className="list-edit" >
                    <input className='input' type="text" id="nameEdit" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                    <input className='input' type="text" id="phoneEdit" value={newData.phone} onChange={(e) => setNewData({ ...newData, phone: e.target.value })} />
                    <div className="btn-list">
                        <button className="btn" onClick={() => { handleData(user.id, newData) }}>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className="container-item" key={user.name}>
                <div className="container-image">
                    <button className="btn-avatar" onClick={toAvatar}>
                        <img src={user.avatar == null ? "/Defaultavatar.png" : `../images/${user.avatar}`} alt="avatar" className="avatar" />
                    </button>
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