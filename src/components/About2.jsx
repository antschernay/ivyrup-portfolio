import portrait from '../assets/img/kachna.png'
import services from '../assets/img/about_process.jpg'
import products from '../assets/img/products.jpg'

const About = ({t}) => {

    return (
       
        <section className="flex flex-col items-center justify-center py-32" id='about'>
          <div className="w-11/12 md:w-4/5">
              <h1 className="text-4xl place-self-start text-slate-700 my-5 font-bold">{t('about')}</h1>
              <div className="bg-gradient-to-r from-rose-50 to-rose-200 rounded-xl">
                <div className='lg:flex xl:flex justify-around px-10 pt-16 pb-10 items-center'>
                  <div className="py-10 md:px-16 lg:px-3 lg:w-1/3">
                    <p className='text-xl text-slate-700 leading-relaxed text-justify'>
                      Volám sa Ivana a venujem sa vizáži. 
                      Začala som absolvovaním rôznych kurzov a školení a v tejto oblasti som sa našla, veľmi ma táto práca baví a to ma motivuje, aby som sa stále ďalej vzdelávala a sledovala nové trendy.
                      
                    </p>
                    
                  </div>
                  <figure className='flex justify-center'>
                    <img src={portrait} alt='portrait' width='400px' className=''></img>
                  </figure>
                </div>
                <div className='lg:flex justify-around p-10 items-center'>
                <figure className='flex justify-center'>
                 <img src={products} alt='make up' width='580px' className='' ></img>
               </figure>
               <div className="pt-10 md:px-16 lg:px-3 lg:w-1/3">
                 <p className='text-xl text-slate-700 leading-relaxed text-justify'>
                 Pri líčení používam overené a kvalitné produkty profesionálnych značiek. Rada Vás nalíčim na akúkoľvek príležitosť, ako napríklad, svadba, oslava, ples, stužková či fotenie. 
                 </p>
               
               </div>
               
               </div>
              <div className='lg:flex justify-around px-10 pb-16 pt-10 items-center'>
                <div className="pb-10 md:px-16 lg:px-3 lg:w-1/3">
                  <p className='text-xl text-slate-700 leading-relaxed text-justify'>
                  Väčšinou pracujem ako mobilná vizážistka, čo znamená, že Vás rada prídem nalíčiť priamo domov. Ušetrí Vám to čas pri prípravách a ja zasa spoznám nové miesta.
                  </p>
                
                </div>
                <figure className='flex justify-center'>
                  <img src={services} alt='make up' width='400px' className='' ></img>
                </figure>
                </div>
               
                
              </div>
            </div>
        </section>
  
      );
}

export default About;