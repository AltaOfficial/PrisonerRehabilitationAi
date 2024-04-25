import { Button } from '@radix-ui/themes';
import { useState } from 'react';

const Search = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sortType, setSortType] = useState("Name");

    // send a request to our backend api
    const searchForInmates = (event) => {
        event.preventDefault();
        fetch("https://prisoner-rehabilitation-ai-api.vercel.app/api/fetch", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            sortType: sortType
        })
        }).then(response => response.text())
        .then(data => {
            props.setData(data);
        });
    };

    const resetFields = () => {
        setFirstName("");
        setLastName("");
        setSortType("Name");
    }

    return (
        <div className="Create">        
            <div className="justify-center">
                <h3 className="italic">Offender Search<br /></h3>
                <hr className="mb-4"/> 

                <form onSubmit={(e) => searchForInmates(e)}>
                    <label>First Name</label>
                    <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

                    <br/>

                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                    <br/>

                    <label>Sort Results By</label>
                    <select required value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        <option value="Name">Name</option>
                        <option value="Number">Number</option>
                        <option value="Status">Status</option>
                    </select>

                    <br/>

                    <Button onClick={searchForInmates}>Search</Button>
                    <Button onClick={resetFields}>Reset</Button>
                </form>
            </div>
        </div>
    )
}

export default Search
