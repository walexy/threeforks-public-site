import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  // large,
  className = ''
}) => {
  // if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <div className="flex flex--2col flex--hero">
          <div className="col-1">
            <h1 className="PageHeader--Title">{title}</h1>
            {subtitle && (
              <Content className="PageHeader--Subtitle col-2" src={subtitle} />
            )}
          </div>
          <div className="col-2">
            <svg className="hero-illustration " 
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <use xlinkHref={`/images/a19-icons.svg#foodHero`} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
