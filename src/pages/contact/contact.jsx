import React from 'react'
import style from './contact.module.css'

export default function Contact() {
  return (
    <>
      <div className={style.cont}>
        <div className={style.top}>
          <h1>GET IN TOUCH</h1>
          <div className={style.topdetail}>
          <div className={style.topsub}>
            <i className="fa-solid fa-location-dot"></i>
            <h2>Address</h2>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>6950 S. Jordan Road <br />
              Centennial, CO 80112</p>
            </div>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>6950 S. Jordan Road <br />
              Centennial, CO 80112</p>
            </div>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>6950 S. Jordan Road <br />
              Centennial, CO 80112</p>
            </div>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>6950 S. Jordan Road <br />
              Centennial, CO 80112</p>
            </div>
          </div>
          <div className={style.topsub}>
            <i className="fa-solid fa-phone"></i>
            <h2>Phone</h2>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>(+880)1905493909</p>
            </div>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>(+880)1905493909</p>
            </div>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>(+880)1905493909</p>
            </div>
            <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>(+880)1905493909</p>
            </div>
          </div>
          <div className={style.topsub}>
           <i className="fa-solid fa-envelope"></i>
           <h2>Email</h2>
           <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>rafisharkar144@gmail.com</p>
            </div>
           <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>rafisharkar144@gmail.com</p>
            </div>
           <div className={style.topsubdata}>
              <h3>Rafi Sharkar</h3>
              <p>rafisharkar144@gmail.com</p>
            </div>
          </div>
          </div>
          <div className={style.topsm}>
            <a href='https://www.facebook.com/rafi.sharkar.90/' ><i className="fa-brands fa-facebook"></i> </a>
            <a href='##' ><i className="fa-brands fa-whatsapp"></i> </a>
            <a href='https://www.instagram.com/rafi_sharkar_0777?fbclid=IwY2xjawGjpCtleHRuA2FlbQIxMAABHRL6qSGeIRz-AWUy6I1vN60A5lPRHj8KmBVkbTufaTDoKkAPoDMlU79zEw_aem_i4JRhAcB1Bozx5eRootBsg' ><i className="fa-brands fa-instagram"></i> </a>
            <a href='https://www.youtube.com/@rafi_sharkar_0777' ><i className="fa-brands fa-youtube"></i> </a>
          </div>
        </div>
        <div className={style.mid}>
          <div className={style.inst}>
            <h1>Message Us</h1>
            <p>If you wish to be considered for employment at Weifield, please do not send a message, here - instead, please complete Weifield's job application  and our Human Resources department will contact you after their review of your submitted information.</p>
            
          </div>
          <div className={style.inst}>
            <form>
              <input className='w-[340px] border-2 border-[#444] px-2  hover:border-[green] py-2 rounded-[9px] mb-4' type='text' placeholder='Enter Your Name'/><br />
              <input className='w-[340px] border-2 border-[#444] px-2  hover:border-[green] py-2 rounded-[9px] mb-4' type='text' placeholder='Enter Your Email'/><br />
              <input className='w-[340px] border-2 border-[#444] px-2  hover:border-[green] py-2 rounded-[9px] mb-4' type='text' placeholder='Enter Subject for message'/><br />
              <input className='w-[340px] border-2 border-[#444] px-2  hover:border-[green] py-2 rounded-[9px] mb-4' type='text' placeholder='Write Your message...'/> <br/>
              <input className='w-[140px] py-2 rounded-[9px] bg-[#333] hover:border-[green] text-white font-[700] hover:bg-[green]' type='submit' value='Send' />
            </form>
          </div>
        </div>
        <div className={style.buttom}>

        </div>

      </div>
    </>
  )
}
