import { Link } from "react-router-dom"
import CardModal from "../CardModal.jsx/Index"

export default function Card(props){
    return(
        <>
                <div key={props.idx} className="card shadow-xl">
                    <figure className="relative">
                        <Link to={`/product/${props.data.id}`}>
                            <img className="rounded-xl" src={props.data.image[0]} />
                        </Link>
                        <CardModal/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{props.data.name}</h2>
                        <p>Rp {props.data.price.toLocaleString('id-ID')}</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            
        </>
    )
}