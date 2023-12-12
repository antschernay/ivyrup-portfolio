import portrait from '../assets/img/kachna.png'

const About = ({t}) => {

    return (
       
        <section className="flex items-center justify-center py-32" id='about'>
          <div className="w-11/12 md:w-4/5">
              <h1 className="text-4xl place-self-start text-slate-700 my-5 font-bold">{t('about')}</h1>
              <div className="bg-gradient-to-br from-rose-200 to-rose-50 rounded-xl lg:flex justify-around items-center p-16 lg:p-24">
               
              <div className="md:px-16 lg:px-3 ">
                <figure className='flex justify-center'>
                        <img src={portrait} alt='portrait' width='500px' className='mb-7 lg:mb-0 shadow-lg shadow-rose-300'></img>
                    </figure>
                  
               </div>
                  <div className="lg:w-5/12 md:px-16 lg:px-3 text-xl text-slate-700 leading-relaxed text-justify">
                    <p className='my-6'>
                      {t('about_info.1')} 
                    </p>
                    <p className='my-6'>
                      {t('about_info.2')}
                    </p>
                    <p className='my-6'>
                      {t('about_info.3')}
                    </p>
                    
                  </div>
                
             
               </div>
            
                
             
            </div>
        </section>
  
      );
}

export default About;