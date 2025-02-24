import React from 'react'
import Option from '../components/Option.jsx'
import htmlSvg from '../assets/html.svg';
import cssSvg from '../assets/css.svg';
import jsSvg from '../assets/js.svg';
import accessibilitySvg from '../assets/accessibility.svg';

function Options() {
  return (
    <div className='flex gap-4 flex-col absolute top-[300px] left-[1600px]'>
        
<Option icon={<img src={htmlSvg}   alt="icon" className="w-[
56px] h-[
56px]" />} text='HTML'  darkMode={false} />
<Option icon={<img src={cssSvg}   alt="icon" className="w-[
56px] h-[
56px]" />} text='CSS'  darkMode={false} />
<Option icon={<img src={jsSvg}   alt="icon" className="w-[
56px] h-[
56px]" />} text='Javascript' darkMode={false}  /> 


<Option icon={<img src={accessibilitySvg}   alt="icon" className="w-[
56px] h-[
56px]" />} text='Acessibility' darkMode={false}  />
    </div>
  )
}

export default Options
