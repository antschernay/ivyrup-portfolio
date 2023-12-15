import portrait from '../assets/img/kachna.png'




const About = ({t}) => {

    return (
       
      <section className="flex items-center justify-center " id='about'>
          <div className="w-full bg-gradient-to-br from-rose-100 to-rose-50 py-8">
              <div className="p-16 lg:p-24">
              <h1 className="text-4xl text-slate-700 my-5 font-bold text-center">{t('about')}</h1>
              <div className="lg:flex justify-around items-center ">
                <div className="md:px-16 lg:px-3 py-12">
                  <figure className='flex justify-center'>
                      <img src={portrait} alt='portrait' width='500px' className='mb-7 lg:mb-0'></img>
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
            
                
            
            </div>
        </section>
  
      );
}

export default About;