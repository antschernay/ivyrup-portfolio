
const Intro = ({t}) => {

    return (
       
        <section className="flex justify-around items-center pt-16 w-scrren h-screen intro bg-cover bg-center">
            <div></div>
            <div className='w-96 ml-16'>
                <p className='logo text-7xl my-3'>
                    ivyrup 
                </p>
                <p className='text-5xl font-bold'>
                    {t('intro_text.1')} 
                </p>
                <p className='text-2xl my-3'>
                    {t('intro_text.2')} 
                </p>
                
                    
               
            </div>
            
            
        </section>
  
      );
}

export default Intro;
