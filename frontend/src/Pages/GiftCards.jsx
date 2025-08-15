import React from 'react'
import { useLocation } from 'react-router-dom';
import one from "../images/aloevera.jpg";
import two from "../images/basil.png"
import back from "../images/baakibackground.png";
import three from "../images/tulsii.webp"
import four from "../images/money.png"
import five from "../images/snake.jpg"
import six from "../images/jade.webp"
import seven from "../images/oeace.webp"
import eight from "../images/areca.webp"
import nine from "../images/lucky.webp"
import ten from "../images/spider.jpg"
import eleven from "../images/ficusss.webp"
import twelve from "../images/lavender.webp"
import thirteen from "../images/rubbber.webp"
import fourteen from "../images/fern.jpg"
import fifteen from "../images/cactus.avif"
import sixteen from "../images/orchidd.avif"
import seventeen from "../images/chrysan.webp"
import eighteen from "../images/rosee.webp"

import AddToCart from '../Components/AddToCart';


export default function GiftCards() {
    const giftsInfo = [
        {
            id: 1,
            gift_name: "Aloe Vera Plant",
            image: one,
            benefits: "Soothes skin, improves air quality, requires minimal care.",
            care: "Water sparingly, keep in bright indirect sunlight.",
            ideal_conditions: "Warm temperatures, well-drained soil.",
            price: 299
        },
        {
            id: 2,
            gift_name: "Basil Plant",
            image: two,
            benefits: "Rich in antioxidants, boosts immunity, used in cooking.",
            care: "Needs regular watering and direct sunlight.",
            ideal_conditions: "Warm climate, moist soil.",
            price: 199
        },
        {
            id: 3,
            gift_name: "Money Plant",
            image: four,
            benefits: "Purifies air, brings good luck, easy maintenance.",
            care: "Water when soil is dry, indirect sunlight.",
            ideal_conditions: "Indoor or semi-shaded area, well-drained soil.",
            price: 349
        },
        {
            id: 4,
            gift_name: "Tulsi Plant",
            image: three,
            benefits: "Medicinal properties, boosts immunity, repels insects.",
            care: "Needs daily watering and direct sunlight.",
            ideal_conditions: "Warm climate, rich soil.",
            price: 249
        },
        {
            id: 5,
            gift_name: "Jade Plant",
            image: six,
            benefits: "Symbol of prosperity, improves indoor air quality.",
            care: "Water sparingly, needs bright indirect sunlight.",
            ideal_conditions: "Well-drained soil, dry climate.",
            price: 399
        },
        {
            id: 6,
            gift_name: "Snake Plant",
            image: five,
            benefits: "Removes toxins from air, requires minimal care.",
            care: "Water occasionally, thrives in low light.",
            ideal_conditions: "Indoor, well-drained sandy soil.",
            price: 279
        },
        {
            id: 7,
            gift_name: "Peace Lily",
            image: seven,
            benefits: "Absorbs toxins, increases humidity, promotes restful sleep.",
            care: "Water weekly, prefers indirect sunlight.",
            ideal_conditions: "Indoor, moist soil.",
            price: 459
        },
        {
            id: 8,
            gift_name: "Areca Palm",
            image: eight,
            benefits: "Great air purifier, adds greenery to indoors.",
            care: "Requires indirect sunlight, keep soil moist.",
            ideal_conditions: "Warm and humid climate.",
            price: 599
        },
        {
            id: 9,
            gift_name: "Lucky Bamboo",
            image:nine,
            benefits: "Symbol of good fortune, requires minimal care.",
            care: "Keep roots in water, indirect light.",
            ideal_conditions: "Indoor, moderate humidity.",
            price: 349
        },
        {
            id: 10,
            gift_name: "Spider Plant",
            image: ten,
            benefits: "Removes pollutants, easy to maintain.",
            care: "Water regularly, prefers indirect sunlight.",
            ideal_conditions: "Moderate temperature, well-drained soil.",
            price: 229
        },
        {
            id: 11,
            gift_name: "Ficus Bonsai",
            image: eleven,
            benefits: "Symbol of harmony, great for indoor decor.",
            care: "Water when soil is dry, indirect sunlight.",
            ideal_conditions: "Indoor, humid climate.",
            price: 799
        },
        {
            id: 12,
            gift_name: "Lavender Plant",
            image: twelve,
            benefits: "Aromatic, reduces stress, repels insects.",
            care: "Requires full sunlight, water sparingly.",
            ideal_conditions: "Dry climate, well-drained soil.",
            price: 499
        },
        {
            id: 13,
            gift_name: "Fern Plant",
            image: fourteen,
            benefits: "Increases humidity, purifies air.",
            care: "Needs moist soil, indirect light.",
            ideal_conditions: "Cool, humid climate.",
            price: 359
        },
        {
            id: 14,
            gift_name: "Rubber Plant",
            image: thirteen,
            benefits: "Absorbs toxins, easy to maintain.",
            care: "Water occasionally, indirect sunlight.",
            ideal_conditions: "Indoor, warm climate.",
            price: 549
        },
        {
            id: 15,
            gift_name: "Cactus",
            image: fifteen,
            benefits: "Requires little maintenance, stores water.",
            care: "Needs full sun, water sparingly.",
            ideal_conditions: "Dry, arid climate.",
            price: 199
        },
        {
            id: 16,
            gift_name: "Orchid",
            image: sixteen,
            benefits: "Beautiful flowers, enhances indoor aesthetics.",
            care: "Requires indirect light, occasional watering.",
            ideal_conditions: "Warm, humid climate.",
            price: 699
        },
        {
            id: 17,
            gift_name: "Chrysanthemum",
            image: seventeen,
            benefits: "Air purifying, beautiful blooms.",
            care: "Needs sunlight, regular watering.",
            ideal_conditions: "Outdoor, well-drained soil.",
            price: 399
        },
        {
            id: 18,
            gift_name: "Rose Plant",
            image: eighteen,
            benefits: "Fragrant flowers, symbolizes love and beauty.",
            care: "Needs full sunlight, regular watering.",
            ideal_conditions: "Rich soil, outdoor.",
            price: 299
        },
        {
            id: 19,
            gift_name: "Pine Bonsai",
            image: "https://example.com/pine_bonsai.jpg",
            benefits: "Symbol of longevity, unique indoor plant.",
            care: "Water when dry, needs indirect sunlight.",
            ideal_conditions: "Cool, humid climate.",
            price: 899
        },
        {
            id: 20,
            gift_name: "Marigold Plant",
            image: "https://example.com/marigold.jpg",
            benefits: "Bright flowers, pest-repellent properties.",
            care: "Needs full sunlight, regular watering.",
            ideal_conditions: "Outdoor, fertile soil.",
            price: 249
        }
    ];
    
    

    let uselocation = useLocation();
    
    let currentId = uselocation.pathname.split('/')[2];
    let details = giftsInfo[currentId-1];

    
    return (
        <div className="min-h-screen flex justify-center items-center py-10 px-5 md:px-10"
        style={{ backgroundImage: `url(${back})` }}>
            <div className="bg-white rounded-[2rem] shadow-lg p-6 w-[40rem] text-center">
                <h1 className="text-[2.4rem] font-bold text-black-700 mb-6">{details.gift_name}</h1>
                <img src={details.image} alt={details.gift_name} className="w-full h-80 object-cover rounded-md mb-4" />
                <p className="text-gray-900 text-[1.6rem] m-[1rem]"><strong>Benefits:</strong> {details.benefits}</p>
                <p className="text-gray-900 text-[1.6rem] m-[1rem]"><strong>Care:</strong> {details.care}</p>
                <p className="text-gray-900 text-[1.6rem] m-[1rem]"><strong>Ideal Conditions:</strong> {details.ideal_conditions}</p>
                <p className="text-gray-900 text-[1.6rem] m-[1rem]"><strong>Price:</strong> ₹{details.price}</p>
                <button onClick={() => {AddToCart(details)}} className="bg-gradient-to-r from-[#51a644] to-[#2e7d32] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-[1.6rem] m-[1rem]">
                    Add To Cart
                </button>
            </div>
        </div>

  )
}
