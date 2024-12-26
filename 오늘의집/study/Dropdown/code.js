<span className='s-c_4_span' >
              
              
                  {/* 드롭다운 */}
                  <button type='button' onClick = {toggleDropdown}>
                  {/* {isOpen ? "Close Dropdown" : "Open Dropdown"} */}
                  
                  <span >  
                  <FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                  
                </span>
                {isOpen && (
              <div className={`dropDown ${isOpen ? "open" : ""}`}>
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

              </div>)}
