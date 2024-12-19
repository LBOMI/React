import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
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
                <img src='body_icon\오늘의집 아이콘1.avif'></img>
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
                        <img src='lookfor_picture\lookfor1.avif'  style={{width: 172.67, height: 230}}></img>
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
                        <img src='lookfor_picture\lookfor2.avif'  style={{width: 172.67, height: 230}}></img>
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
                        <img src='lookfor_picture\lookfor3.gif' style={{width: 172.67, height: 230}} ></img>
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
                        <img src='lookfor_picture\lookfor4.avif' style={{width: 172.67, height: 230}} ></img>
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
                        <img src='lookfor_picture\lookfor5.avif' style={{width: 172.67, height: 230}} ></img>
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
                        <img src='lookfor_picture\lookfor6.avif' style={{width: 172.67, height: 230}} ></img>
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
          <div className='B_lookfor2_1h'>
            <div className='B_lookfor2_1'>
              <div className='B_lookfor2_1_1'>
                <strong>이주의 집들이! 발굴하러 가볼까요?</strong>
              </div>
            </div>
            <div className='B_lookfor_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='B_lookfor2_2'>
            <div className='B_lookfor2_2_1'>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이1.avif' style={{height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                    <button type='button'>
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>식물과 컬러로 포인트! </span>
                    공간 디자이너 부부와 아이가 사는 집
                  </p>
                </div>
                <a></a>
              </div>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이2.avif' style={{height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                    <button type='button'>
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>블랙&그레이톤으로 </span>
                    정돈된 호텔의 무드를 느낄 수 있는 집
                  </p>
                </div>
                <a></a>
              </div>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이3.webp' style={{width: 268 ,height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                    <button type='button'>
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>공간 분위기 바꾸기? </span>
                    가구&소품 재배치로 어렵지 않게 완성!
                  </p>
                </div>
                <a></a>
              </div>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이4.avif' style={{height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                    <button type='button'>
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>30평대 같은 </span>
                    대면형 주방을 실현한, 18평 신희타 리모델링기
                  </p>
                </div>
                <a></a>
              </div>
            </div>
          </div>
        </div>
        <div className='Categroy_'>
          <div className='Category_1h'>
            <div className='Category_1h_1'>
              <div className='Category_1h_1_1'>
                <strong>카테고리별 상품 찾기</strong>
              </div>
            </div>
            <div className='Category_1h_2'></div>
          </div>
          <div className='Category_C'>
            <div className='Category_C_1'>
              <div className='Category_C_1_1'>
                <ul>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\크리스마스.avif'></img>
                        </div>
                        <span>크리스마스</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\가구.avif'></img>
                        </div>
                        <span>가구</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\패브릭.avif'></img>
                        </div>
                        <span>패브릭</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\가전,디지털.avif'></img>
                        </div>
                        <span>가전.디지털</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\주방용품.avif'></img>
                        </div>
                        <span>주방용품</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\식품.avif'></img>
                        </div>
                        <span>식품</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\데코,식물.avif'></img>
                        </div>
                        <span>데코,식물</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\조명.avif'></img>
                        </div>
                        <span>조명</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\수납,정리.avif'></img>
                        </div>
                        <span>수납,정리</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\생활용품.avif'></img>
                        </div>
                        <span>생활용품</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\생필품.avif'></img>
                        </div>
                        <span>생필품</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\유아,아동.avif'></img>
                        </div>
                        <span>유아, 아동</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\반려동물.avif'></img>
                        </div>
                        <span>반려동물</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\캠핑,레저.avif'></img>
                        </div>
                        <span>캠핑,레저</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\공구,DIY.avif'></img>
                        </div>
                        <span>공구,DIY</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\인테리어시공.avif'></img>
                        </div>
                        <span>인테리어시공</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\렌탈,구독.avif'></img>
                        </div>
                        <span>렌탈,구독</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\장보기.avif'></img>
                        </div>
                        <span>장보기</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='Category_C_1_1_ul_li'>
                      <a>
                        <div className='Category_C_1_1_ul_li_a_1'>
                          <img src='Category\혼수,신혼.avif'></img>
                        </div>
                        <span>혼수,신혼</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='Category_C_1_2'>
                <button type='button'>
                  <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                </button>
              </div>
              <div className='Category_C_1_3'>
              <button type='button'>
                  <span><FontAwesomeIcon icon={faChevronRight} /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='Todaydeal'>
          <div className='Todaydeal_h'>
            <div className='Todaydeal_h_1'>
              <div className='Todaydeal_h_1_1'>
                <strong>오늘의 딜</strong>
              </div>
            </div>
            <div className='Todaydeal_h_2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='Todaydeal_C'>
            <div className='Todaydeal_C_1'>
              <div className='Todaydeal_C_1_1'>
                <ul>
                  <li>
                    <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_1'>
                                <div className='Todaydeal_C_1_1_li_1_1_1_1_1_1'>
                                  <picture>
                                    <source></source>
                                    <img src='Todaydeal\2024BEST.avif'></img>
                                  </picture>
                                </div>
                              </div>
                              <img src='Todaydeal\Todaydeal_1.avif'></img>
                              <button type='button'>
                                <svg></svg>
                                <svg></svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>아이러브베베</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>[최종17,910원/82초고평량]시그니앙 골드퍼플 70매 20팩 캡형 아기물티슈</span>
                            </h1>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg></svg>
                                <strong>4.9</strong>
                                리뷰 630
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>42
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>22,900</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div2'>
                              <p>
                                <svg style={{width: 24, height:24}} viewBox='0 0 24 24'></svg>
                                <strong>4.9</strong>
                                리뷰 630
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span4'>
                              <img src='Todaydeal\오늘출발.png'></img>
                            </span>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span5'>평일 21:00까지 결제시</span>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                              <svg>
                                <g></g>
                              </svg>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div3'>
                              <img src='Todaydeal\card-promotion-badge.png'></img>
                              <span>최대 10% 결제할인</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </li>
                  <li> <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              
                              <img src='Todaydeal\Todaydeal_2.avif'></img>
                              <button type='button'>
                                <svg></svg>
                                <svg></svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>헤드앤숄더</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>두피 케어! 헤드앤숄더 특가 모음딜</span>
                            </h1>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg></svg>
                                <strong>4.8</strong>
                                리뷰 5,739
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>28
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>37900 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div2'>
                              <p>
                                <svg style={{width: 24, height:24}} viewBox='0 0 24 24'></svg>
                                <strong>4.8</strong>
                                리뷰 5,739
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                              <svg>
                                <g></g>
                              </svg>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div3'>
                              <img src='Todaydeal\card-promotion-badge.png'></img>
                              <span>최대 15% 결제할인</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div></li>
                  <li> <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                            
                              <img src='Todaydeal\Todaydeal_3.avif'></img>
                              <button type='button'>
                                <svg></svg>
                                <svg></svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>한빛카페트</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>[쿠폰] 러그/카페트 특가 모음전(사이잘룩/타일/워셔블/사계절러그)</span>
                            </h1>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg></svg>
                                <strong>4.7</strong>
                                리뷰 91,504
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>40
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>8,900 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div2'>
                              <p>
                                <svg style={{width: 24, height:24}} viewBox='0 0 24 24'></svg>
                                <strong>4.7</strong>
                                리뷰 91,504
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                              <svg>
                                <g></g>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </article>
                    </div></li>
                  <li> <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              
                              <img src='Todaydeal\Todaydeal_4.avif'></img>
                              <button type='button'>
                                <svg></svg>
                                <svg></svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>네이처리빙</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>네이처리빙 빨래바구니 외 수납/생활/주방 인기템</span>
                            </h1>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg></svg>
                                <strong>4.7</strong>
                                리뷰 391,566
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>64
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>17,900 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div2'>
                              <p>
                                <svg style={{width: 24, height:24}} viewBox='0 0 24 24'></svg>
                                <strong>4.7</strong>
                                리뷰 391,566
                              </p>
                            </div>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                              <svg>
                                <g></g>
                              </svg>
                            </span>
                          
                          </div>
                        </div>
                      </article>
                    </div></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className='Todaydeal_C_1_2'>
                <button type='button'>
                  <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                </button>
              </div>
              <div className='Todaydeal_C_1_3'>
                <button type='button'>
                  <span><FontAwesomeIcon icon={faChevronRight} /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='UserReview'>
          <div className='UserReview_h'>
            <div className='UserReview_h1'>
              <div className='UserReview_h1_1'>
                <strong>유저들의 인테리어 시공 리뷰</strong>
              </div>
            </div>
            <div className='UserReview_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='UserReview_c'>
            <div className='UserReview_c_1'>
              <div className='UserReview_c_1_1'>
                <div className='UserReview_c_1_1_1'>
                  <img src='UserReview\유저리뷰_1.avif' style={{width:365, height:244}}></img>
                  <div className='UserReview_c_1_1_1_1'>
                    <div className='UserReview_c_1_1_1_1_1'></div>
                  </div>
                </div>
                <div className='UserReview_c_1_1_2'>
                  <p className='UserReview_c_1_1_2_p1'>디자인코드인테리어</p>
                  <p className='UserReview_c_1_1_2_p2'>제가 여러 업체 실측&상담을 한 끝에 디자인 코드를 선택했습니다
모든면에서 다 좋았지만!
정해진 예산에 최대한으로 맞춰 도와주셨구
무엇보다 소통이 정말 잘됐습니다
전체공사라 의논할게 정말 많았는데 밤낮 가리지않고
소통을 잘 해주셔서 정말 만족스러운 결과물이 나왔습니다
제 지인들께도 무조건 추천 할꼬에욧</p>
                </div>
                <a></a>
              </div>
              <div className='UserReview_c_1_2'>
              <div className='UserReview_c_1_2_1'>
                  <img src='UserReview\유저리뷰_2.avif' style={{width:365, height:244}}></img>
                  <div className='UserReview_c_1_2_1_1'>
                    <div className='UserReview_c_1_2_1_1_1'></div>
                  </div>
                </div>
                <div className='UserReview_c_1_2_2'>
                  <p className='UserReview_c_1_2_2_p1'>요즘인테리어</p>
                  <p className='UserReview_c_1_2_2_p2' >저희는 구축 아파트를 계약해서 무조건 올수리 인테리어를 생각했던 예비 신혼 부부입니다 여러 업체를 상담했지만 인테리어는 처음이라 판단이 잘 안섰는데 현실적으로 실현 가능한 인테리어를 고민해주시고 소통도 가장 잘된다고 느꼈던 권지헌 대표님과 최종 계약을 진행했습니다 결과적으로는 기대하던 것 보다도 훨씬 인테리어가 잘 나와서 너무나도 만족스럽습니다☺️ 우선 권지헌 대표님과  진행하면서 가장 만족스러웠던 점은 소통이었습니다 저희가 업체 선정을 일찍해서 첫미팅부터 공사 완성까지 약 5-6개월 정도가 걸렸는데 그 기간동안 단 한번도 연락 문제없이 바로바로 피드백을 주시고 더 나은 의견이 있으면 반영해서 수정해주셔서 더 좋은 인테리어가 나올 수 있었던 것 같습니다 그리고 대표님께서 젊은 감각을 가지고 해주셔서 그런지 타업체 분들 보다도 제가 원하는 그림을 대충 설명드려도 너무도 정확하고 빠르게 파악해주시고 제 취향에 맞게 인테리어적으로 제안도 많이 해주셔서 어려웠던 인테리어를 끝까지 잘 마무리할 수 있었습니다 정말 공사들어가는 그날 그날 바꾼 부분들 마저도 완벽했어요!! 공사뿐만 아니라 공사를 끝내고도 인테리어 업체의 역할이 중요하다고 생각하는데 그 부분에서도 너무 완벽하셨습니다🥲 문제가 있는 부분들은 그때 그때 다 처리해주시고 입주청소업체와도 문제가 있어서 혼란스러운 상황도 있었는데 그 부분들도 다 잘 처리할 수 있도록 도와주셨어요 대표님뿐만 아니라 공사해주시는 공사 팀 분들의 실력도 물론 출중하셔서 진짜 솔직히 거의 문제가 될 부분도 없었어요..아직은 가구가 덜 들어와서 조금 부족해보일 수 있지만 인테리어 자체를 너무 완벽하게 해주셔서 앞으로 채울 모습들이 더 기대가 됩니다 집 준비하면서 다른 신경쓸 것도 많아서 업체랑의 문제가 많으면 더 힘들었을텐데 대표님과 진행한 덕분에 잘 마무리할 수 있었구요 앞으로 주변에 인테리어 고민하시면 무조건 추천드릴 예정이에요 저희의 첫 집을 맡길 수 있어서 정말 감사했습니다~!</p>
                </div>
                <a></a>
              </div>
              <div className='UserReview_c_1_3'>
                <div className='UserReview_c_1_3_1'>
                  <img src='UserReview\유저리뷰_3.avif' style={{width:365, height:244}}></img>
                  <div className='UserReview_c_1_3_1_1'>
                    <div className='UserReview_c_1_3_1_1_1'></div>
                  </div>
                </div>
                <div className='UserReview_c_1_3_2'>
                  <p className='UserReview_c_1_3_2_p1'>ABLY_design</p>
                  <p className='UserReview_c_1_3_2_p2'>구○빈 팀장님께서 소통도 원할히 잘 해주시고 젊은 감각으로  이런저런 부자재들을 트렌디한 것으로 잘 추천해주셨습니다. 첫 미팅때부터 3D 도면 준비해서 설명해주시니 이해도 잘 되고 저희 예산에 최대한 맞춰주시려고 애쓰셨습니다. 공사 후에도 A/S 요청 편히 받아주시고 최대한 불편함 없도록 신경써 주셨습니다. </p>
                </div>
                <a></a>
                </div>
            </div>
          </div>
        </div>
        <div className='Exhibition'>
          <div></div>
          <div></div>
        </div>
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
