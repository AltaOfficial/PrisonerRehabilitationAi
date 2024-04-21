import React from 'react'

const Create = () => {
    return (
        <h3>Offender Search<br /></h3>
        <hr />

        <div className="Create">
        <form>
            <label>First Name</label>
            <input type="text" required />

            <label>Last Name</label>
            <input type="text" required />

            <label>Sort Results By</label>
            <select>
                <option value="Name">Name</option>
                <option value="Number">Number</option>
                <option value="Status">Status</option>
            </select>

            <button>Search</button>
            <button>Reset</button>
        </form>
        </div>
}

//export default Create
