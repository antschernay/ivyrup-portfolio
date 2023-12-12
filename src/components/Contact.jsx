import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Contact = ({t}) => {

    return (
       
          <section className="flex  items-center justify-center bg-gradient-to-b from-white to-rose-200" id='contact'>
              <div className="w-11/12 ">
                <div className="flex flex-wrap xl:justify-between justify-center items-center text-slate-800 pt-44 pb-24">

                    <div className='text-center cursor-pointer group px-4 my-10 w-72'>
                      <a href='https://www.instagram.com/ivyrup.makeup/'>
                        <FontAwesomeIcon icon={faSquareInstagram} className='xl:text-6xl text-5xl text-rose-700 group-hover:text-rose-950'/>
                        <p className='mt-8 mb-4 text-md'>{t('instagram')}</p>
                        <p className='text-xl text-rose-700 font-bold group-hover:text-rose-950'>ivyrup.makeup</p>
                      </a>
                    </div>

                    <div className='text-center cursor-pointer group px-4 my-10 w-72'>
                       <a href='https://www.facebook.com/profile.php?id=100085615830315'>
                        <FontAwesomeIcon icon={faFacebook} className='xl:text-6xl text-5xl text-rose-700 group-hover:text-rose-950'/>
                        <p className='mt-8 mb-4 text-md'>{t('facebook')}</p>
                        <p className='text-xl text-rose-700 font-bold group-hover:text-rose-950'>Ivana Ruppeldt make-up</p>
                       </a>
                    </div>

                    <div className='text-center px-4 my-10 w-72'>
                      <FontAwesomeIcon icon={faLocationDot} className='xl:text-6xl text-5xl text-rose-700'/>
                      <p className='mt-8 mb-4 text-md'>{t('location')}</p>
                      <p className='text-xl text-rose-700 font-bold'>
                      {t('orava')}
                      </p>
                    </div>
                  
                    <div className='text-center px-4 my-10 w-72'>
                      <FontAwesomeIcon icon={faPhone} className='xl:text-6xl text-5xl text-rose-700'/>
                      <p className='mt-8 mb-4 text-md'>{t('telephone')}</p>
                      <p className='text-lg text-rose-700 font-bold'>
                        +421 907 071 468
                      </p>
                    </div>
                  
                    <div className='text-center px-4 my-10 w-72'>
                    
                      <FontAwesomeIcon icon={faEnvelope} className='xl:text-6xl text-5xl text-rose-700' />
                      <p className='mt-8 mb-4 text-md'>{t('email')}</p>
                      <p className='text-xl text-rose-700 font-bold'>
                        ivyrup.beauty@gmail.com
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