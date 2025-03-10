function SimpleSlider() {
  const [currentIndex, setCurrentIndex ] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    afterChange: (current) => setCurrentIndex(current),
  };

  return (
    <div className='B_main20'>
                <Slider {...settings}>
                  <div>
                    <img src='AD\광고1.jpeg'></img>
                  </div>
                  <div>
                    <img src='AD\광고2.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고3.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고4.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고5.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고6.avif'></img>
                  </div>
                </Slider>
                
                <div style={{
                  fontSize: 13,
                  height: 25,
                  borderRadius: 13,
                  backgroundColor: "rgba(33, 38, 41, 0.5)",
                  fontWeight: 700,
                  display:" inline-flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  wordWrap: "normal",
                  lineHeight: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                  color: "#ffffff",
                  boxSizing: "border-box",
                  padding: "4px 8px 4px 10px",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: "10px",
                  right: "10px"
                }}>
                  {currentIndex + 1}/6 
                   <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
        
  );
}
