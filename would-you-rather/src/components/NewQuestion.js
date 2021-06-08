

function NewQuestion() {
    return (
        <div>
            <div>
                <h2 className="form-label">Create a New Question</h2>
                <label className="form-label">Would You Rather...</label>
                <input className="form-control" placeholder="Enter Option One Text Here"></input>
            </div>
            <div>
                <label className="form-label">Or...</label>
                <input className="form-control" placeholder="Enter Option Two Text Here"></input>
                <button type="button" className="btn btn-primary pl-5">Submit</button>
            </div>
        </div>);
}

export default NewQuestion;
