import { useEffect, useState } from "react"
import { Select } from '@chakra-ui/react'

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
                    <div className="inputSection">
                        <Select placeholder="Select City" size='lg'>
                            <option value='Bangalore'>Bangalore</option>
                            <option value='Hyderabad'>Hyderabad</option>
                            <option value='Mumbai'>Mumbai</option>
                            <option value="Delhi-NCR">Delhi_NCR</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                        </Select>
                        <div className="date">
                            <div>
                                <input type="date" />
                                <input type="time" />
                            </div>
                            <div>
                            <input type="date" />
                                <input type="time" />
                            </div>
                        </div>

                    </div>
                  <div className="btn">
                  <button>Search</button>
                  </div>
                    
                 
                   
                </div>
                <div>
                    <img src={allImages[selectedImage]} alt="" />

                </div>
            </div>
         <div className="homePage_midsection">
            <div className="titleDiv">
                <h1 className="title">Features</h1>
                <div className="titleBody">
                    <div><img style={{width:"100%"}} src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/WhatsApp+Image+2022-08-05+at+1.11.06+PM.jpeg" alt="" /></div>
                    <div><img src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png" alt="" /></div>
                    <div><img src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png" alt="" /></div>
                </div>
            </div>
            <div className="titleDiv">
                <h1 className="title">Sanitized & safe cars</h1>
                <div className="titleBody">
                    <div className="ssc"><img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png" alt="" /></div>
                    <div className="ssc"><img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg" alt="" /></div>
                    <div className="ssc"><img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg" alt="" /></div>
                    <div className="ssc"><img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg" alt="" /></div>
                </div>
            </div>
            <div className="titleDiv">
                <h1 className="title">Why Revv?</h1>
                <div className="whyrevv">
                   <div>
                    <dix><img style={{width:"80%"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png" alt="" /></dix>
                   <dix><h1 className="h1r">Home delivery & return</h1>
                   <p className="pr">On-time doorstep service, at your <br />preferred location and time.
                    </p></dix>
                   </div>
                   <div>
                    <dix><img style={{width:"80%"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png" alt="" /></dix>
                   <dix><h1 className="h1r">Flexsible pricing plans</h1>
                   <p className="pr">Choose 'Unlimited kms' or 'with fuel'<br />plans
                    </p></dix>
                   </div>
                   <div>
                    <dix><img style={{width:"80%"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png" alt="" /></dix>
                   <dix><h1 className="h1r">Well maintained cars</h1>
                   <p className="pr">Regular service & maintainces; Inspected before eace trip <br />preferred location and time.
                    </p></dix>
                   </div>
                </div>
            </div>
            <div className="titleDiv">
                <h1 className="title">FAQs</h1>
                <div className="faqd">
                    <div><h1 className="h1r">Is there a speed limit?</h1>
                    <p className="pr">Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</p></div>
                    <div><h1 className="h1r">Can I extend/ cancel/ modify?</h1>
                    <p className="pr">Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy.</p></div>
                    <div><h1 className="h1r">Booking criteria & documents?</h1>
                    <p className="pr">Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for “Light Motor Vehicles”, which is min. 1 year old at the time of starting the trip.</p></div>
                    <div><h1 className="h1r">Are there any restricted areas?</h1>
                    <p className="pr">Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take Revv cars. Customer will be fully liable for any damages incurred to the car in that region.</p></div>
     
                </div>
                
            </div>
            <div className="titleDiv">
                <h1 className="title">Happy customers</h1>
                <div className="cusdiv">
                    <div><h1 style={{fontSize:"18px",fontWeight:"bold",borderBottom:"1px solid grey",paddingBottom:"20px",paddingLeft:"10px"}}>Sanjib Sarkar</h1>
                    <p style={{padding:"20px"}}>Very good service. I could not expect that I can get a car at 4.30 in the morning. Even they have paid for fuel which I filled more. Very transparent ❤️</p></div>
                    <div> <div><h1 style={{fontSize:"18px",fontWeight:"bold",borderBottom:"1px solid grey",paddingBottom:"20px",paddingLeft:"10px"}}>Arijit Sarkar</h1>
                    <p style={{padding:"20px"}}>Sanitized car was provided. The delivery and pickup boy was very polite and helpful. This company is honest with their customers</p></div></div>
                    <div> <div><h1 style={{fontSize:"18px",fontWeight:"bold",borderBottom:"1px solid grey",paddingBottom:"20px",paddingLeft:"10px"}}>Vijay S</h1>
                    <p style={{padding:"20px"}}>Booked for 4 days for a family trip. Car was water washed and sanitized when I recieved it. Trip and the process were very comfortable and hassle-free. Best self-drive car service provider. I strongly recommend Revv. Looking forward to using Revv car again</p></div></div>
                    <div> <div><h1 style={{fontSize:"18px",fontWeight:"bold",borderBottom:"1px solid grey",paddingBottom:"20px",paddingLeft:"10px"}}>Rohit Ray</h1>
                    <p style={{padding:"20px"}}>The app is as user friendly as the policies. The process is as easy as nursury rhyme. Nicely maintaied cars</p></div></div>
                </div>
                
            </div>
            <div className="titleDiv">
                <h1 className="title">Our journey so far</h1>
                <div className="journeydiv">
                    <div  >
                        <img style={{width:"20%",margin:"0px 15px"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/revvers.png" alt="" />
                        <h1 style={{margin:"0px 15px",fontWeight:"bold"}}>1 Mn +</h1>
                        <p style={{margin:"0px 15px"}}>Happy Revvers</p>
                    </div>
                    <div>
                        <img style={{width:"20%"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/cities.png" alt="" />
                        <h1 style={{margin:"0px 15px",fontWeight:"bold"}}>22+ cities</h1>
                        <p style={{margin:"0px 15px"}}>Across India</p>
                    </div>
                    <div>
                        <img style={{width:"20%"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/travel.png" alt="" />
                        <h1 style={{margin:"0px 15px",fontWeight:"bold"}}>50 Mn +</h1>
                        <p style={{margin:"0px 15px"}}>Kms travelled</p>
                    </div>
                    <div>
                        <img style={{width:"20%"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/review.png" alt="" />
                        <h1 style={{margin:"0px 15px",fontWeight:"bold"}}>4.8 / 5</h1>
                        <p style={{margin:"0px 15px"}}>20K+ reviewers</p>
                    </div>
                   
                </div>
                
            </div>
         </div>

        </div>
    )
}