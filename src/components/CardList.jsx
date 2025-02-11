import { pets } from "../data/data"
import Choose from "./Choose"

function CardList() {
    return (
        <div className="container mt-3 justify-content-center bg-body-light">
            <div className="row justify-content-center g-3" >
                {pets.map(pet => (
                    <Choose
                        key={pet.id}
                        src={new URL(pet.image, import.meta.url).href}
                        name={pet.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardList
