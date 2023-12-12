import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGripLines, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({t, languages}) => {

    const [showLanguages, setShowLanguages] = useState(false)

    const [isMobile, setIsMobile] = useState(false);
    const [menuIsShown, setMenuIsShown] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 675);
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
        
        {!isMobile ? (
            <section className="w-full absolute">
            <ul className="flex justify-center text-xl cursor-pointer items-center text-neutral-900 py-10 font-bold">
                <li className="px-3 mx-2 hover:text-rose-700">
                    <Link to='about' spy={true} smooth={true} duration={800} offset={100}>{t('about')}</Link>
                </li>
                <li className="px-3 mx-2 hover:text-rose-700">
                    <Link to='services' spy={true} smooth={true} duration={800} offset={100}>{t('services')}</Link>
                </li>
                <li className="px-3 mx-2 hover:text-rose-700">
                    <Link to='gallery' spy={true} smooth={true} duration={800} offset={100}>{t('gallery')}</Link>
                </li>
                
                <li className="px-3 mx-2 hover:text-rose-700">
                    <Link to='contact' spy={true} smooth={true} duration={800} offset={100}>{t('contact')}</Link>
                </li>
                <li className="px-3 mx-2 hover:text-rose-700" onClick={() => setShowLanguages(!showLanguages)}>{t('language')}
                    <FontAwesomeIcon icon={faCaretDown} className='px-1 text-sm'/>
                    {showLanguages && (
                        <ul className="absolute bg-white border border-gray-300 mt-2 rounded-lg shadow-lg p-2">
                            {languages.map((language) => (
                                <li
                                    key={language.code}
                                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-slate-500"
                                    onClick={() => {
                                    i18next.changeLanguage(language.code)
                                    setShowLanguages(false);
                                    }}
                                >
                                    {language.name}
                                </li>
                            ))}
                     </ul>
                    )}
                    
                </li>
                
            </ul>
            </section>)
            : 
            <>
                <div className='absolute'>
                    <div className='p-7 cursor-pointer hover:text-rose-700' onClick={()=> setMenuIsShown(!menuIsShown)}>
                        <FontAwesomeIcon className='text-2xl' icon={faGripLines} />
                    </div>
                </div>

            
            </>
       
         }

          
<div className={`h-screen bg-neutral-50 fixed z-50 transition-all duration-500 ease-in-out ${menuIsShown ? 'opacity-100' : 'opacity-0'} ${menuIsShown ? 'w-1/2' : 'w-0'}`}>

           
             <ul className="text-xl cursor-pointer items-center text-neutral-500 font-semibold px-5">
                <li className="mb-36 mt-5 hover:text-rose-700" onClick={()=> {setMenuIsShown(!menuIsShown); setShowLanguages(false)}}>
                    <FontAwesomeIcon className='text-xl' icon={faXmark} />
                </li>
               
                <Link to='about' spy={true} smooth={true} duration={800} offset={100}>
                    <li className="my-3 bg-rose-100 py-2 px-4 shadow-sm hover:bg-gradient-to-r from-rose-500 to-rose-200 hover:text-white rounded-lg ">
                        {t('about')}
                        </li>
                </Link>
               
                
                <Link to='services' spy={true} smooth={true} duration={800} offset={100}>
                    <li className="my-3 bg-rose-100 py-2 px-4 shadow-sm hover:bg-gradient-to-r from-rose-500 to-rose-200 hover:text-white rounded-lg ">
                        {t('services')}
                        </li>
                </Link>
                
                
                <Link to='gallery' spy={true} smooth={true} duration={800} offset={100}>
                    <li className="my-3 bg-rose-100 py-2 px-4 shadow-sm hover:bg-gradient-to-r from-rose-500 to-rose-200 hover:text-white rounded-lg ">
                        {t('gallery')}
                    </li>
                </Link>
                
                
            
                <Link to='contact' spy={true} smooth={true} duration={800} offset={100}>
                    <li className="my-3 bg-rose-100 py-2 px-4 shadow-sm hover:bg-gradient-to-r from-rose-500 to-rose-200 hover:text-white rounded-lg">
                        {t('contact')}
                    </li>
                </Link>
                
                <li className="my-3 bg-rose-100 py-2 px-4 shadow-sm hover:bg-gradient-to-r from-rose-500 to-rose-200 hover:text-white rounded-lg" onClick={() => setShowLanguages(!showLanguages)}>{t('language')}
                    <FontAwesomeIcon icon={faCaretDown} className='px-1 text-sm'/>
                    {showLanguages && (
                        <ul className="absolute bg-neutral-50 mt-2 p-2 text-start">
                            {languages.map((language) => (
                                <li
                                    key={language.code}
                                    className="py-2 hover:text-rose-700 cursor-pointer text-slate-500"
                                    onClick={() => {
                                    i18next.changeLanguage(language.code)
                                    setShowLanguages(false);
                                    }}
                                >
                                    {language.name}
                                </li>
                            ))}
                    </ul>
                    )}
                    
             </li>
             
            </ul>
         </div>
         
            
       
       
        </>
    )

}

export default Navigation;


