import { useEffect } from "react";
import "./Slider.scss";
import { useState } from "react";


function mod(n, m) {
    return ((n % m) + m) % m;
  }
  

function Slider({ images }) {
  const [imageIndex, SetImageIndex] = useState(null);
  useEffect(() => {
    console.log(imageIndex);
  }, [imageIndex]);
  return (
    <div className="slider">
      {imageIndex !== null && (
        <>
          {" "}
          <div className="fullSlider">
            <div
              className="arrow"
              onClick={() => {
                SetImageIndex(mod((imageIndex - 1) ,images.length));
              }}
            >
              <img src="/arrow.png" alt="" />
            </div>
            <div className="imgContainer">
              <img src={images[imageIndex]} alt="" />
            </div>
            <div
              className="arrow"
              onClick={() => {
                SetImageIndex(mod((imageIndex + 1) , images.length));
              }}
            >
              <img src="/arrow.png" className="right" alt="" />
            </div>
            <div className="close" onClick={() => SetImageIndex(null)}>
              X
            </div>
          </div>
        </>
      )}
      <div className="bigimage">
        <img src={images[0]} alt="" onClick={() => SetImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => SetImageIndex(index+1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
