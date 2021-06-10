

function Results() {
    return (
        <div className="list-group pt-5">
            <h5 className="mb-1">Results</h5>
            <div className="list-group-item list-group-item-action" aria-current="true">
                <h3>Your Vote</h3>
                <p className="mb-1">Would you rather be a rockstar.</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
            </div>
            <div className="list-group-item list-group-item-action" aria-current="true">
                <h3>Your Vote</h3>
                <p className="mb-1">Would you rather be a rapper.</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>


            </div>
        </div>
    );
}

export default Results;
