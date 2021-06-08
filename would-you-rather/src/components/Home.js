import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'


function Home() {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Unanswered Questions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Answered Questions</a>
                </li>
            </ul>
            <UnansweredQuestion />
            {/*<UnansweredQuestion /><AnsweredQuestion />*/}
        </div>

    );
}

export default Home;
