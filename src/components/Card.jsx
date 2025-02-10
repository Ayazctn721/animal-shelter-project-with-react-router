
function Card({ src, name }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card" id="card">
                <img className="card-img-top" src={src} alt="image" />
                <div className="card-body m-1" id="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                    <hr />
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat et aliquam ex facere, reprehenderit labore, exercitationem sed impedit, sapiente inventore id? Sapiente, saepe esse quidem eius veniam enim dolorum.</p>
                </div>
                <div className="bg-light">
                    <button className="btn btn-primary d-block mx-auto my-2 ">Adopt</button>
                </div>
            </div >

        </div>
    )
}

export default Card;
