import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
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
          </div>
        </div>
        <div></div>
        <div></div>
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
