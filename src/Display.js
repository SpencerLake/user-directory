import './styles/display.css'

function Display() {
    return(
    <div className="girth">
        <div className="display">
            <div className="display-title">
                <h1 className="page-number">1/25</h1>
                <h1 className="title">Marion Santori</h1>
            </div>
            <br></br>
            <div className="display-content">
                    <div className="content">
                        <p className="content-title">From:</p>
                        <p>Liverpool, United Kingdom</p>
                    </div>
                    <div className="content">
                        <p className="content-title">Job Title:</p>
                        <p>Research Associate</p>
                    </div>
                    <div className="content">
                        <p className="content-title">Employer:</p>
                        <p>Skinix</p>
                    </div>
                    <br></br>
                    <p className="content-title">Favorite Movies:</p>
                    <ol>
                        <li className="ordered-list">Fathom</li>
                        <li className="ordered-list">Strange Magic</li>
                        <li className="ordered-list">Martian Child</li>
                    </ol>
            </div>
        </div>
        <div className="buttons">
            <div>
                <a className="direction-buttons">&lt; Previous</a>
            </div>
            <div>
                <button className="data-buttons">Edit</button>
                <button className="data-buttons">Delete</button>
                <button className="data-buttons">New</button>
            </div>
            <div>
                <a className="direction-buttons">Next &gt;</a>
            </div>
        </div>
    </div>
    )
}


export default Display