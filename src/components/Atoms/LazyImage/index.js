import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export const LazyImage = ({src, alt, className, placeHolder, ...props}) => {
  const [imageSrc, setImageSrc] = useState(placeHolder)
  const [imageRef, setImageRef] = useState()

  useEffect(() => {
    let observer
    let didCancel = false

    if (imageRef && imageSrc === placeHolder) {
      if (window.IntersectionObserver) {
        observer = new window.IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(imageRef)
      } else {
        setImageSrc(src)
      }
    }
    return () => {
      didCancel = true
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [imageSrc, imageRef])

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      {...props}
    />
  )
}

export default LazyImage

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
}

LazyImage.defaultProps = {
  placeHolder:
    'data:imageplaceHolder/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=',
}
