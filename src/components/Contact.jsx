import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contact = ({t}) => {

    return (
       
          <section className="flex  items-center justify-center bg-gradient-to-b from-white to-rose-200" id='contact'>
              <div className="w-11/12 ">
                <div className="flex flex-wrap xl:justify-between justify-center items-center text-slate-800 pt-44 pb-24">

                    <div className='text-center cursor-pointer group px-4 my-10 w-72'>
                      <a href='https://www.instagram.com/ivyrup.makeup/'>
                        <FontAwesomeIcon icon={faSquareInstagram} className='lg:text-5xl text-4xl text-rose-700 group-hover:text-rose-950'/>
                        <p className='mt-8 mb-4 text-md'>{t('instagram')}</p>
                        <p className='text-xl text-rose-700 font-bold group-hover:text-rose-950'>ivyrup.makeup</p>
                      </a>
                    </div>

                    <div className='text-center cursor-pointer group px-4 my-10 w-72'>
                       <a href='https://www.facebook.com/profile.php?id=100085615830315'>
                        <FontAwesomeIcon icon={faFacebook} className='lg:text-5xl text-4xl text-rose-700 group-hover:text-rose-950'/>
                        <p className='mt-8 mb-4 text-md'>{t('facebook')}</p>
                        <p className='text-xl text-rose-700 font-bold group-hover:text-rose-950'>Ivana Ruppeldt make-up</p>
                       </a>
                    </div>

                    <div className='text-center px-4 my-10 w-72 group cursor-pointer'>
                      <FontAwesomeIcon icon={faLocationDot} className='lg:text-5xl text-4xl text-rose-700 group-hover:text-rose-950'/>
                      <p className='mt-8 mb-4 text-md'>{t('location')}</p>
                      <p className='text-xl text-rose-700 font-bold group-hover:text-rose-950'>
                      {t('orava')}
                      </p>
                    </div>
                  
                    <div className='text-center cursor-pointer px-4 my-10 w-72 group'>
                      <FontAwesomeIcon icon={faPhone} className='lg:text-5xl text-4xl text-rose-700 group-hover:text-rose-950'/>
                      <p className='mt-8 mb-4 text-md'>{t('telephone')}</p>
                      <p className='text-lg text-rose-700 font-bold group-hover:text-rose-950'>
                        <a href='tel:+421 907 071 468'>+421 907 071 468</a>
                      </p>
                    </div>
                  
                    <div className='text-center cursor-pointer px-4 my-10 w-72 group'>
                      <FontAwesomeIcon icon={faEnvelope} className='lg:text-5xl text-4xl text-rose-700 group-hover:text-rose-950' />
                      <p className='mt-8 mb-4 text-md'>{t('email')}</p>
                      <p className='text-xl text-rose-700 font-bold group-hover:text-rose-950'>
                      <a href='mailto:ivyrup.beauty@gmail.com'>ivyrup.beauty@gmail.com</a>
                      </p>
                    </div>
                  
                    
                 
                </div>
                <div className='flex justify-center'>
                  <p className='pb-4 font-semibold text-slate-700'>created by tschan</p>
                </div>
              </div>
          </section>
     
      );
}

export default Contact;