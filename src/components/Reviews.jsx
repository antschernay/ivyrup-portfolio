import model1 from '../assets/img/model-1.jpg'
import model2 from '../assets/img/model_2.png'
import model3 from '../assets/img/model-3.jpg'
import model4 from '../assets/img/model-4.png'
import model5 from '../assets/img/model-5.png'
import model6 from '../assets/img/model-6.png'



const Reviews = ({t}) => {

    return (
       
            <section className="flex  items-center justify-center py-16" id='gallery'>
            <div className="w-4/5">
              <h1 className="text-4xl text-center font-bold text-slate-700">{t('gallery')}</h1>
              <div className="flex flex-wrap justify-center text-xl text-slate-800 pt-16 items-center">

                <div className=" w-96 shadow-md shadow-rose-200 rounded-xl m-2 overflow-hidden">
                  <img src={model1} alt='a woman with make up' className='rounded-md hover:transform hover:scale-115 duration-500 cursor-pointer'/>
                </div>  

                <div className="w-96 shadow-md shadow-rose-200 rounded-xl m-2 overflow-hidden">
                  <img src={model2} alt='a woman with make up' className='rounded-md hover:transform hover:scale-115 duration-500 cursor-pointer'/>
                </div>

                <div className="w-96 shadow-md shadow-rose-200 rounded-xl m-2 overflow-hidden">
                  <img src={model3} alt='a woman with make up' className='rounded-md hover:transform hover:scale-115 duration-500 cursor-pointer'/>  
                </div>

                <div className="w-96 shadow-md shadow-rose-200 rounded-xl m-2 overflow-hidden">
                  <img src={model4} alt='a woman with make up' className='rounded-md hover:transform hover:scale-115 duration-500 cursor-pointer'/>
                </div>

                <div className="w-96 shadow-md shadow-rose-200 rounded-xl m-2 overflow-hidden">
                  <img src={model5} alt='a woman with make up' className='rounded-md hover:transform hover:scale-115 duration-500 cursor-pointer'/>
                </div>

                <div className="w-96 shadow-md shadow-rose-200 rounded-xl m-2 overflow-hidden">
                  <img src={model6} alt='a woman with make up' className='rounded-md hover:transform hover:scale-115 duration-500 cursor-pointer'/>
                </div>
              </div>
            </div>
          </section>
     
      );
}

export default Reviews;
