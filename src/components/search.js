const Create = () => {

    return (
        <div className="Create">        
            <div className="justify-center">
                <h3 className="italic">Offender Search<br /></h3>
                <hr className="mb-4"/> 

                <form>
                    <label>First Name</label>
                    <input type="text" required />

                    <br/>

                    <label>Last Name</label>
                    <input type="text" required />

                    <br/>

                    <label>Sort Results By</label>
                    <select>
                        <option value="Name">Name</option>
                        <option value="Number">Number</option>
                        <option value="Status">Status</option>
                    </select>

                    <br/>

                    <button>Search</button>
                    <button>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default Create
