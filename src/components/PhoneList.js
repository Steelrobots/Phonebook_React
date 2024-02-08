import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadPage, loadPhonebooks } from "../action/action";
import PhoneItem from "./PhoneItem";
import { loadPage, loadPhonebooks } from "../reducers/API";
import { selectPhonebooks } from "../reducers/phonebook";

export default function PhoneList({ keyword, sort }) {
    const dispatch = useDispatch()
    const { phonebooks, page, pages} = useSelector(selectPhonebooks)
    const [isLoading, setIsLoading] = useState(false)

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLoading) {
            try {
                if (page < pages) {
                    setIsLoading(true)
                    const newPage = page + 1
                    dispatch(loadPage({ page: newPage, keyword, sort }))
                }
                else {
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)

            } finally {
                setIsLoading(false)
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [dispatch, pages, page, keyword, sort])

    useEffect(() => {
        
        const readData = async () => {
                try {

                    dispatch(loadPhonebooks({ keyword, sort }))
                } catch (error) {
                    console.log(error)

                } finally {
                    setIsLoading(false)
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