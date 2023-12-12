import { useState } from 'react';
import { Link } from 'react-scroll';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({t, languages}) => {

    const [showLanguages, setShowLanguages] = useState(false)

    return (
        <>
        <section className="flex w-full  justify-center absolute z-50">
            
            <ul className="flex text-xl cursor-pointer items-center text-neutral-900 py-10 font-bold">
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
            
        </section>
       
        </>
    )

}

export default Navigation;

