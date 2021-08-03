import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/createNewDairy.css';

const CreateNewDairy = () => {
    const history = useHistory();
    const [newDiary, setNewDiary] = useState({
        title: "",
        image: "",
        category: "Public",
        description: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log( name, value);
        if (e.target.name === "image") {
            setNewDiary({ ...newDiary, [name]: e.target.files[0]?.name });
        } else {
            setNewDiary({ ...newDiary, [name]: value });
        }
    }
    const handleCreateDiary = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9002/creatediary", newDiary).then((res) => {
            alert(res.data.message);
            //   setShowLogin(false);
              history.push("/profile");
        });
    }
    return (
        <div className="createDairy">
            <form className="mb-5">
                <h3 className="createDairyH3">Create Your Diary</h3>
                <div className="form-group mb-3">
                    <label className="mb-1">Diary Title</label>
                    <input
                        type="text"
                        name="title"
                        value={newDiary.title}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="mb-1">Select image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="mb-1">Select Category</label><br />
                    <select className="createDairySelect" value={newDiary.category} onChange={handleChange} name="category" id="category" >
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label className="mb-1">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        value={newDiary.description}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter description"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block w-100 btn-outline-light"
                    onClick={handleCreateDiary}
                >
                    Create Now
                </button>
            </form>
        </div>
    )
}
export default CreateNewDairy;