import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './App.css';


function Header() {
  return (
    <header>
      <div className='sticky-container' style={{height: 80.75}}>
        <div className='sticky-container_1'>
         <div className='sticky-container_1-1'>
          <div className='logo'>
            <div className='logo_O'>
            <img src="오늘의 집 logo.jpg" width="71" height="28" fill="none"></img>
            </div>
          </div>

          <div className='logo_N'>
            <div className='logo_N_1' style={{width: 71, height:54}}>커뮤니티</div>
            <div className='logo_N_1' style={{width: 40.52, height:54}}>쇼핑</div>
            <div className='logo_N_1' style={{width: 107.94, height:54}}>인테리어/생활</div>
          </div>

         
         <div className='sticky-container_2'>
          <div className='sticky-container_input'>
            <div className='sticky-container_input_1'>
              <span className='sticky-container_input_icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
              <input type='text' placeholder='통합검색' autoComplete='off' aria-autocomplete='list' ></input>
              <div className='sticky-container_input_2'></div>
            </div> 
            </div>
          <div className='s-c_shoppingCart'>
            <span className='s-c_shoppingCart_icon'><FontAwesomeIcon icon={faCartShopping}/></span>
          </div>

          <div className='s-c_3'>
            <div className='s-c_3_1'>
              <a className='s-c_3_1_login'>로그인</a>
              <a className='s-c_3_1_signUp'>회원가입</a>
              <a className='s-c_3_1_signUp'>고객센터</a>
            </div>
            <span style={{lineHeight: 0}}>
              <button role='button' type='button' className='s-c_3_button'>
                <span className='s-c_3_button_p'>글쓰기</span>
                <span className='s-c_3_button_icon'><FontAwesomeIcon icon={faChevronDown} /></span>
                </button>   
            </span>
            </div>
          </div>
         </div>
      </div>
      </div>
      <div className='sticky-container' style={{height: 51.75}}>
        <div className='s-c_layout'>
          <div className='s-c_4'>
            <div  className='s-c_4_1'>
              <nav className='s-c_4_nav'>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_3_p'>홈</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>추천</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>#채널</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>집들이</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>집사진</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>3D인테리어</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>살림수납</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>반려동물</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>육아</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>홈스토랑</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>플랜테리어</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>콜렉터블</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>캠핑</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>취미</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>핫플레이스</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span className='s-c_4_1_1'>
                  <div className='s-c_4_1_2'>
                    <a className='s-c_4_1_a'>
                      <div className='s-c_4_1_3'>
                        <p className='s-c_4_1_4_p'>이벤트</p>
                      </div>
                    </a>
                  </div>
                </span>
              </nav>
              <span className='s-c_4_1_5'>
                  <button type='button' className='s-c_4_1_5_b'>
                  <span className='s-c_4_1_5_b_icon'><FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                </span>
            </div>
            <div className='s-c_4_2'>
              <div className='s-c_4_2_1'>
                <span className='s-c_4_2_1_s'>
                  <div className='s-c_4_2_1_1'>
                    <div className='s-c_4_2_1_1_1'>
                      <div className='s-c_4_2_1_1_1_1'>
                        <a className='s-c_4_2_1_1_1_1_a'>
                          <div className='s-c_4_2_1_1_1_1_a_1'>
                            <span className='s-c_4_2_1_1_1_1_a_1_s'></span>
                            <span className='s-c_4_2_1_1_1_1_a_1_s2'>
                              <span className='s-c_4_2_1_1_1_1_a_1_s2_1'></span>
                            </span>
                            <span className='s-c_4_2_1_1_1_1_a_1_s3'></span>
                          </div>
                        </a>
                      </div>
                      <div>
                        <div>

                        </div>
                      </div>
                    </div>
                    <button type='button' className='s-c_4_2_1_1_b'>
                      <span className='s-c_4_2_1_1_b_s'><FontAwesomeIcon icon={faChevronDown} /></span>
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}
function Body() {
  return (
    <section>
      <div className='B_mains'>
        <div className='B_main'>
          <div className='B_main1'>
            <section>
              <a>
                <img className='B_main_section_a_img' src='오늘의집 main picture.avif'></img>
                <div className='B_main1_1'>
                  <p className='B_main1_1_p'>아이 있는 집 맞나요? 모던함이 돋보이는 집</p>
                  <span className='B_main1_1_s'>
                    <img className='B_main1_1_img'></img>
                    <span className='B_main1_1_span_span'>눈누</span>
                  </span>
                </div>
              </a>
            </section>
          </div>
          <div className='B_main2'>
            <section >
              <div className='B_main2_1'>
                <div className='B_main2_1_1'>
                  <div className='B_main2_1_1_1'>
                    <div className='B_main2_1_1_1_1'>
                      <a>
                        <div></div>
                        <div></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='B_main2_1_2'>
                  <span className='B_main2_1_2s'>
                    <span className='B_main2_1_2ss'></span>
                  </span>
                </div>
                <div className='B_main2_1_3'>
                  <div className='B_main2_1_3_1'>
                    <button type='button' className='B_main2_1_3_1_button'>
                      <span className='B_main2_1_3_1_button_span'></span>
                    </button>
                  </div>
                  <div className='B_main2_1_3_2'>
                    <button type='button' className='B_main2_1_3_1_button'>
                      <span className='B_main2_1_3_1_button_span'></span>
                    </button>
                  </div>
                  <span className='B_main2_1_3s'>
                    <span className='B_main2_1_3ss'></span>
                    <span className='B_main2_1_3ss1'></span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='B_nav'>
          <div className='B_nav_1'>
            <div className='B_nav_2' >
              <a >
                <img src='오늘의집 아이콘1.avif'></img>
                <span>연말빅세일</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\오늘의딜.png'></img>
                <span>오늘의딜</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\집들이.avif'></img>
                <span>집들이</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\행운출첵.avif'></img>
                <span>행운출첵</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\살림살이.png'></img>
                <span>살림살이</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\취향의발견.png'></img>
                <span>취향의발견</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\오마트.png'></img>
                <span>오마트</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\빠른배송.png'></img>
                <span>빠른배송</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\리모델링.avif'></img>
                <span>리모델링</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\입주청소.avif'></img>
                <span>입주청소</span>
              </a>
            </div>
          </div>
          
        </div>
        <div className='B_lookfor'>
          <div className='B_lookfor_h'>
            <div className='B_lookfor_h1'>
              <div className='B_lookfor_h1_1'>
                <strong>이런 사진 찾고 있나요?</strong>
              </div>
              <div className='B_lookfor_h1_2'>
                <span>좋아하실만한 인테리어 콘텐츠를 추천드려요</span>
              </div>
            </div>
            <div className='B_lookfor_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='B_lookfor_h3'>
            <div className='B_lookfor_h3_1'>
              <div className='B_lookfor_h3_1_1'>
                <ul>
                  <li>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <img src='lookfor_picture\lookfor1.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img></img>
                            </div>
                            <span>사이노리</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                  <path></path>
                                  <path></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                  </li>
                  <li>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <img src='lookfor_picture\lookfor2.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img></img>
                            </div>
                            <span>사이노리</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                  <path></path>
                                  <path></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                  </li>
                  <li>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <img src='lookfor_picture\lookfor3.gif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img></img>
                            </div>
                            <span>사이노리</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                  <path></path>
                                  <path></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                  </li>
                  <li>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <img src='lookfor_picture\lookfor4.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img></img>
                            </div>
                            <span>사이노리</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                  <path></path>
                                  <path></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                  </li>
                  <li>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <img src='lookfor_picture\lookfor5.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img></img>
                            </div>
                            <span>사이노리</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                  <path></path>
                                  <path></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                  </li>
                  <li>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <img src='lookfor_picture\lookfor6.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img></img>
                            </div>
                            <span>사이노리</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                  <path></path>
                                  <path></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className='B_lookfor_h3_2'>
                <button>
                  <span></span>
                </button>
              </div>
              <div className='B_lookfor_h3_3'>
                <button>
                  <span><FontAwesomeIcon icon={faChevronRight} /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='B_lookfor2'>
          <div className='B_lookfor2_1'>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default function TodaysHouse() {
  function Entire(){

  }
  return (
   <div className='entire'>
    <Header />
    <Body />
    </div>
     
    
  )
};
