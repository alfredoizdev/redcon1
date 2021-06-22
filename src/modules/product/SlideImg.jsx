import Carousel from "react-bootstrap/Carousel";

const SlideImg = ({ images, mainImg }) => {
  return (
    <Carousel interval={null}>
         <Carousel.Item>
          <img className='d-block w-100' src={mainImg} alt='First slide' />
        </Carousel.Item>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img className='d-block w-100' src={img.src} alt='First slide' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SlideImg;
