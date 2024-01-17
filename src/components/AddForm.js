

export default function AddForm(){
    return(
        <form>
            <div className="container-add">
            <input type="text" id="name" />
            <input type="text" id="phone" />
            </div>
            <div>
                <button type="submit">save</button>
                <button >cancel</button>
            </div>
        </form>
    )
}