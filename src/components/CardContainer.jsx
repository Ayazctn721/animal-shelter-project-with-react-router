function CardContainer({ children }) {
    return (
        <div className="container mt-3 justify-content-center bg-body-light">
            <div className="row justify-content-center g-3" >{children}</div>
        </div>
    );
}

export default CardContainer;