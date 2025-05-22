import React, { useState } from "react";

import './Carousel.css';

const images = [
    { src: "/HongKong.webp", alt: "Hong Kong", index: 1 },
    { src: "/italy.webp", alt: "Italy", index: 2 },
    { src: "/japan.webp", alt: "Japan", index: 3 },
    { src: "/Namibia.jpg", alt: "Namibia", index: 4 },
];

const Carousel = () => {
    const [gallery, setGallery] = useState(images);

    const updateGalleryClasses = (index) => {
        return `gal-item gal-item-${index + 1}`;
    };

    const handleControl = (direction) => {
        let newGallery = [...gallery];
        if (direction === "previous") {
            newGallery.unshift(newGallery.pop());
        } else {
            newGallery.push(newGallery.shift());
        }
        setGallery(newGallery);
    };
    return (
        <div className="gal">
            <div className="gal-container">
                {gallery.map((img, index) => (
                    <img
                        key={index}
                        className={updateGalleryClasses(index)}
                        src={img.src}
                        alt={img.alt}
                    />
                ))}
            </div>
            <div className="gal-controls">
                <button onClick={() => handleControl("previous")}>❮</button>
                <button onClick={() => handleControl("next")}>❯</button>
            </div>
        </div>
    );
};

export default Carousel;