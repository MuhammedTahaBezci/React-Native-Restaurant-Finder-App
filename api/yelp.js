import axios from "axios";

// Yelp API'sine isteklerde bulunmak için axios kütüphanesini içe aktar 
//(Import axios library for making requests to Yelp API)
export default axios.create({
    // Temel URL'yi ayarla (Set base URL)
    baseURL:'https://api.yelp.com/v3/businesses/',
    // Varsayılan başlıkları tanımla (Define default headers)
    headers:{
        Authorization:'Bearer POMfRvpeKp0HairTUA1iQxGkL2Clgk6kRwKvqoJsPu_oaqTal9EtkaF5UlmjYYZo9UG2_FA4XpcSTrxXDHXL7y4WE7UZ1jzHoXFLMkb03dnmIwWImgUF7XhnAcSNZnYx'
    }
})