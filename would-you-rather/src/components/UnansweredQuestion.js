import UnansweredPoll from './UnansweredPoll'


function UnansweredQuestion() {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Would You Rather</h5>
                </div>
                <p className="mb-1">...be a rock...</p>
                <button type="button" className="btn btn-primary pl-5">View Poll</button>

            </a>
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Would You Rather</h5>
                </div>
                <p className="mb-1">...be a rock...</p>
                <button type="button" className="btn btn-primary pl-5">View Poll</button>

            </a>
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Would You Rather</h5>
                </div>
                <p className="mb-1">...be a rock...</p>
                <button type="button" className="btn btn-primary pl-5">View Poll</button>

            </a>

            <UnansweredPoll />
        </div>
    );
}

export default UnansweredQuestion;
