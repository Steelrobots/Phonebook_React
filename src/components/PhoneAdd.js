import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPhonebooks } from "../reducers/API";
// import { addPhonebooks } from "../action/action";


export default function PhoneAdd() {
    const [add, setAdd] = useState({ name: '', phone: '' })
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const AddData = (e) => {
        e.preventDefault()
        dispatch(addPhonebooks(add))
        navigate('/')
    }
    return (
        <div className="container">
            <form onSubmit={AddData}>
                <div className="container-add">
                    <input type="text" id="name" required onChange={(e) => setAdd({ ...add, name: e.target.value })} />
                    <input type="text" id="phone" required onChange={(e) => setAdd({ ...add, phone: e.target.value })}/>
            </div>
                <div className="btn-add">
                    <button type="submit"><p>save</p></button>
                    <Link to="/">cancel</Link>
                </div>
            </form>
        </div>
    )
}