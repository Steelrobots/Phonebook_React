import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhonebooks } from "../action/action";
import PhoneItem from "./PhoneItem";

export default function PhoneList({ keyword, sort }) {
    const dispatch = useDispatch()
    const { phonebooks} = useSelector(state => state.contacts)


    useEffect(() => {
        const readData = async () => {
            try {
                dispatch(loadPhonebooks({ keyword, sort }))
            } catch (error) {
                console.log(error)

            }
        }
        readData()
    }, [dispatch, keyword, sort])
    return (
        <div className="mainList" id="main-data">
            {!!phonebooks && phonebooks.length > 0 && phonebooks.map((user) => (
                <PhoneItem key={user.id} user={user} />
            ))}
        </div>
    )

}