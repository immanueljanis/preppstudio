import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {axiosInstance} from '../../Lib/AxiosInstance' 
import { CiShare2, CiHeart  } from "react-icons/ci";

export default function Product(){
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    const getProduct = async () => {
        try {
            const response = await axiosInstance.get(`/products/${params.id}`)
            setProduct(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <>
            <div className="flex">
                <div className="flex content-start">
                    {
                        product.image.map((item, index) => {
                            return(
                                <img key={index} src={`${item}`} className="w-96 rounded-lg m-2" alt={`${item}`} />
                            )
                        })
                    }
                </div>
                <div className="content-end mt-2 mx-4">
                    <h3 className="uppercase text-xl font-medium">{product.name}</h3>
                    <h3 className="text-xl font-medium">Rp {product.price.toLocaleString('id-ID')}</h3>
                    <h5>Select Size</h5>
                    {
                        product.size.map((item, index) => {
                            return(
                                <p key={index} className="btn btn-outline uppercase mr-4 mt-2">{item}</p>
                            )
                        })
                    }
                    <div>
                        <button className="bg-primary w-full font-bold text-white uppercase mt-3 rounded-lg h-12">Add To Bag</button>
                        <div className="flex mt-3 gap-2 h-12">
                            <button className="btn btn-outline w-64 font-bold uppercase rounded-lg"><CiHeart className="text-xl"/> Add To Wishlist</button>
                            <button className="btn btn-outline"><CiShare2 className="text-xl"/></button>
                        </div>
                    </div>
                    
                    <p className="mt-3 underline">Details</p>
                    <div className="mt-2 opacity-80 text-l">
                        <h3 className="uppercase font-bold">{product.name}</h3>
                        <h3><b>Material :</b> {product.material}</h3>
                        <h3><b>Body Length x Chest x Shoulder</b></h3>
                        <h3>S : 66 cm x 52 cm x 50 cm <br/>
                            M : 68 cm x 54 cm x 52 cm <br/>
                            L : 70 cm x 56 cm x 54 cm <br/>
                            XL : 72 c, x 58 cm x 54 cm <br/>
                            XXL : 74 cm x 60 cm x 56 cm <br/>
                            <b>Toleransi size hingga ± 1 cm.</b></h3>

                        {/* <h3 className=" mt-6 w-64">Warna yang terlihat pada gambar mungkin tidak 100% sama dengan produk yang sebenarnya, disebabkan karna proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.
                        Untuk pembelian online, mohon pertimbangkan toleransi perbedaan warna dan ukuran produk yang dipesan. Apabila setelah barang diterima terdapat perbedaan yang dianggap terlalu jauh dan tidak dapat diterima, silahkan ajukan penukaran barang melalui Customer Service kami.
                        Mohon buat video unboxing mulai dari sebelum paket dibuka. Tanpa video unboxing, mohon maaf kami tidak dapat menerima complaint (terutama atas kekurangan jumlah barang).</h3> */}
                    </div>
                </div>
            </div>
        </>
    )
}