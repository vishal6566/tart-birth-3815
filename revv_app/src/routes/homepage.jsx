import { useEffect, useState } from "react"
import "./homepage.css"
export default function HomePage() {
    const image1 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp";
    const image2 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp";
    const image3 = "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp";
    const [selectedImage, setSelectedImage] = useState(0)
    const [allImages, setAllImages] = useState([image1, image2, image3])
    useEffect(() => {
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1 : 0)
        }, 3000)

    }, [])
    return (

        <div >
            <div className="banner">
                <div >
                    <div className="heading">
                        <div><h1 >Rentals</h1>
                        <p>For hours & days</p></div>
                        <span className="triangle"></span>
                        <div>
                            <h1>Subscription</h1><p>For months & years</p>
                        </div>


                    </div>
                    <div className="midsection">
                        <img src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="" />
                        <h1>Car Rental in Hyderabad</h1>
                    </div>
                </div>
                <div>
                    <img src={allImages[selectedImage]} alt="" />
                   
                </div>
            </div>


        </div>
    )
}