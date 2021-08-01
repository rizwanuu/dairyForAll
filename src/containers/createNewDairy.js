import '../css/createNewDairy.css';

const CreateNewDairy = () => {
    return (
        <div className="createDairy">
            <form className="mb-5">
                <h3 className="createDairyH3">Create Your Diary</h3>
                <div className="form-group mb-3">
                    <label className="mb-1">Diary Title</label>
                    <input
                        type="text"
                        name="title"
                        // value={user.title}
                        // onChange={handleChange}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="mb-1">Select image</label>
                    <input
                        type="file"
                        name="title"
                        accept="image/*"
                        // value={user.title}
                        // onChange={handleChange}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="mb-1">Select Category</label><br />
                    <select className="createDairySelect" name="loginProfile" id="loginProfile" >
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label className="mb-1">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        // value={user.description}
                        // onChange={handleChange}
                        className="form-control"
                        placeholder="Enter description"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block w-100 btn-outline-light"
                // onClick={handleLogin}
                >
                    Create Now
                </button>
            </form>
        </div>
    )
}
export default CreateNewDairy;