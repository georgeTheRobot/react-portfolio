import React from 'react';
import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Charles Muiruri",
            title: "Senior Developer",
            img: "assets/charles.jpeg",
            icon: "assets/twitter.png",
            desc:
                "Working with George was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach.",
        },
        {
            id: 2,
            name: "Claud Watari",
            title: "Senior Back-end Developer",
            img:"assets/kamau.jpeg",
            icon: "assets/youtube.png",
            desc:
                "My new site created by George just launched. He has done a great job of creating exactly what I wanted. Easy to work with and very responsive. He met all of my expectations and had a lot of insight regarding marketing tools I didn't know existed.",
            featured: true,
        },
        {
            id: 3,
            name: "Wayne Gakuo",
            title: "Senior Developer",
            img: "assets/wayne.jpeg",
            icon: "assets/youtube.png",
            desc:
                "Fantastic work! I am just impressed by his service quality and working strategy. I hired him for the development of my online store and he has satisfied me to the full by delivering the exceptional solution. He has a great expertise, is dedicated, attentive, talented and care much about client needs. Highly recommended.",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
