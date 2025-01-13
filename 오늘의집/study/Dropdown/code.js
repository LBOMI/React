const ScrollHideHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  
  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handelClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)
    && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current){
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className='sticky-container' style={{height: 51.75}}>
    <div className='s-c_layout'
    style={{ position: "fixed",
      // top: 80,
      width: "100%",
      transition: "transform 0.3s ease",
      transform: isVisible ? "translateY(0)" :" translateY(-250%)",
      backgroundColor: "#fff",
      borderbottom: "1px solid #EAEDEF",
      zIndex: 1100}}>
          <div className='s-c_4'>
            <div  className='s-c_4_1'>
              <nav className='s-c_4_nav'>
                <span>
                  <div className='s-c_4_1_1'>
                    <a>  
                    <div className="s-c_4_1_1_2">
                      <p>
                      홈
                      </p>
                    </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_2'>
                    <a>
                      <div className='s-c_4_1_2_1'>
                        <p>추천</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_3'>
                    <a>
                      <div className='s-c_4_1_3_1'>
                        <p>#채널</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_4'>
                    <a>
                      <div className='s-c_4_1_4_1'>
                        <p>집들이</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_5'>
                    <a>
                      <div className='s-c_4_1_5_1'>
                        <p>집사진</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_6'>
                    <a>
                      <div className='s-c_4_1_6_1'>
                        <p>3D인테리어</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_7'>
                    <a>
                      <div className='s-c_4_1_7_1'>
                        <p>살림수납</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_8'>
                    <a>
                      <div className='s-c_4_1_8_1'>
                        <p>반려동물</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_9'>
                    <a>
                      <div className='s-c_4_1_9_1'>
                        <p>육아</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_10'>
                    <a>
                      <div className='s-c_4_1_10_1'>
                        <p>홈스토랑</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_11'>
                    <a>
                      <div className='s-c_4_1_11_1'>
                        <p>플랜테리어</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_12'>
                    <a>
                      <div className='s-c_4_1_12_1'>
                        <p>콜렉터블</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_13'>
                    <a>
                      <div className='s-c_4_1_13_1'>
                        <p>캠핑</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_14'>
                    <a>
                      <div className='s-c_4_1_14_1'>
                        <p>취미</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_15'>
                    <a>
                      <div className='s-c_4_1_15_1'>
                        <p>핫플레이스</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_16'>
                    <a>
                      <div className='s-c_4_1_16_1'>
                        <p>이벤트</p>
                      </div>
                    </a>
                  </div>
                </span>
              </nav>
              
              <span className='s-c_4_span' >
              
              
                  {/* 드롭다운 */}
                  <button type='button' onClick = {toggleDropdown} >
                  
                  <span >  
                  <FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                  </span>

              <div ref={dropdownRef} className={`dropDown ${isOpen ? "open" : ""}`}>
                <div className='dropDown_1'>
                
                 
               
                  <div className='dropDown_1_1'>
                  <span className='dropDown_1_1_0'><a>살림수납</a></span>
                  <span className='dropDown_1_1_1'><a>반려동물</a></span>
                  <span className='dropDown_1_1_2'><a>육아</a></span>
                  <span className='dropDown_1_1_3'><a>홈스토랑</a></span>
                  <span className='dropDown_1_1_4'><a>플랜테리어</a></span>
                  <span className='dropDown_1_1_5'><a>콜렉터블</a></span>
                    <span>
                      <a>캠핑</a>
                    </span>
                    <span><a>취미</a></span>
                    <span><a>핫플레이스</a></span>
                    <span><a>이벤트</a></span>
                 
                  </div>
                </div>

              </div>
              
            </div>
            
            {/* <div className='real_vertical'> */}
     
                <VerticalSlider />
             
             {/* </div> */}
          </div>
        </div>
        </div>
  )
}
