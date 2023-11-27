export default function RegisterForm(props){
    return(
        <>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">{props.label[0].toUpperCase() + props.label.slice(1)}</span>
                </label>
                <input type={`${props.type}`} ref={props.inputRef} placeholder={`Type ${props.label[0].toUpperCase() + props.label.slice(1)}`} className="input input-bordered input-primary w-full"/>
            </div>
        </>
    )
}