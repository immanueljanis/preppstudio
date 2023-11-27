export default function CardModal(){
    return(
        <>
            <button className="btn bg-black bg-opacity-50 text-white outline-white absolute bottom-5 right-7" onClick={()=>document.getElementById('my_modal_1').showModal( )}>Quick View</button>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                <form method="dialog">
                    
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </>
    )
}