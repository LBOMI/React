function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);


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

   <span className='s-c_4_span' >
              
              
                  {/* 드롭다운 */}
                  <button type='button' onClick = {toggleDropdown} >
                  {/* {isOpen ? "Close Dropdown" : "Open Dropdown"} */}
                  
                  <span >  
                  <FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                  
                </span>
              
              <div ref={dropdownRef} className={`dropDown ${isOpen ? "open" : ""}`}>
                <div className='dropDown_1'>
                  <div className='dropDown_1_1'>
                    <span>
                      <a>캠핑</a>
                    </span>
                    <span><a>취미</a></span>
                    <span><a>핫플레이스</a></span>
                    <span><a>이벤트</a></span>
                  </div>
                </div>

              </div>

}
