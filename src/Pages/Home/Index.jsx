import Hero from "../../Components/Hero/Index"
import Card from "../../Components/Card/Index"
import { axiosInstance } from "../../Lib/AxiosInstance"
import { useState, useEffect } from "react"

export default function Home(){

    const [products, setProducts] = useState([])

    const onGetData = async () => {
        try {
            const response = await axiosInstance.get('/products')
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() =>{
        onGetData()  
    }, [])

    return(
        <>
            <Hero/>
                <section id="productList" className="px-4 py-4">
                    <div className="grid grid-cols-4 gap-2">
                        {
                            !products.length?
                                'Loading...'
                            :
                            products.map((item, index) => {
                                return(
                                    <>
                                        <Card data={item} idx={index}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </section>
        </>
    )
}