import { useParams } from "react-router-dom";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.jpg";

function QAPics() {
    const { id } = useParams();
    let pic; //undefined

    if (Number(id) === 1) {
        pic = pic1;
    } else if (Number(id) === 2) {
        pic = pic2;
    }

    return (
        <>
            <h3> This is picture number: {id} </h3>
            {pic && <img src={pic}/>}
        </>
    )
}

export default QAPics;