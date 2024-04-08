import Tags from "./Tags";

const MyCard = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Tags text={props.tagText} bgColor={props.tagColor} />
                    
                </div>
            </div>
        </>
    );
};

export default MyCard;