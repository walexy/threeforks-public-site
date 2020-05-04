import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          // src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <div className="PageHeader--Video">
          <div className='embed-container'>
            <iframe src='https://player.vimeo.com/video/413777672' frameBorder='0' allow="autoplay; fullscreen" allowFullScreen></iframe>
          </div>
        </div>
          <div className="flex flex-2col">
            <h1 className="PageHeader--Title">{title}</h1>
            {subtitle && (
              <Content className="PageHeader--Subtitle" src={subtitle} />
            )}
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
