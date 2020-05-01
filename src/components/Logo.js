import React from 'react'
import './Logo.css'

export default () => (
  <svg className="logo svgicon" 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <use className="svgicon-theIcon" xlinkHref={`/images/a19-icons.svg#trinityForksLogo`} />
  </svg>
)
