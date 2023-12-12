
import brush from '../assets/img/brush.png'
import cream from '../assets/img/cream.png'
import services from '../services.json'


const Services = ({t}) => {

  const language = t('language'); 
  const servicesInSelectedLanguage = services.makeup[language] || [];
  const proceduresInSelectedLanguage = services.procedures[language] || [];


    return (

      <section className="flex flex-col items-center justify-center py-32 " id='services'>
      <div className="w-4/5">
        <h1 className="text-4xl place-self-start text-slate-700 my-5 font-bold">{t('services')}</h1>
        <div className='flex justify-center mt-16 text-slate-700'>
         <article className='sm:w-11/12 md:w-4/5 lg:w-2/3'>
          <div className=''>
            <div className='flex items-center'>
              <img src={brush} width={40} alt='an icon of a make-up brush' className='mr-4'/>
            <p className='text-3xl font-bold'>{t('make-up')}</p>
            </div>
            {servicesInSelectedLanguage.map((service) => {
                return (
                  <div className='flex justify-between my-10 items-center'>
                    <div>
                      <p className='text-xl'>{service.name}</p>
                      <p className='text-md'>{service.description}</p>
                    </div>
                    <p className='text-xl pl-6'>{service.price}</p>
                  </div>
                )

            })}
          </div>
          <div>
          <div className='flex items-center'>
              <img src={cream} width={40} alt='an icon of a cream soap' className='mr-4'/>
              <p className='text-3xl font-bold'>{t('procedures')}</p>
            </div>
            {proceduresInSelectedLanguage.map((service) => {
                return (
                  <div className='flex justify-between my-10 items-center'>
                    <p className='text-xl'>{service.name}</p>
                    <p className='text-xl pl-6'>{service.price}</p>
                  </div>
                )

            })}
          </div>
          <div>

          </div>
         </article>
         </div>
        </div>
        
    </section>
        
        
       
      );
}

export default Services;

