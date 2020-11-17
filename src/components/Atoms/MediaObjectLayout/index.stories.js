import React from 'react'
import {storiesOf} from '@storybook/react'
import MediaObjectLayout from './index'
import imgData from '../../../../__mocks__/data/gatsby-img.json'
import Img from 'gatsby-image'

storiesOf('Atoms/MediaObjectLayout', module)
  .add('Specify left as summary', () => (
    <MediaObjectLayout>
      <div style={{height: '100px', width: '100px'}}>
        <Img fluid={imgData.square.childImageSharp.fluid} />
      </div>
      <div>
        <p>
          Explanatory text. Explanatory text.Explanatory text. Explanatory text.
        </p>
        <p>
          Explanatory text. Explanatory text.Explanatory text. Explanatory
          text.Explanatory text. Explanatory text.
        </p>
      </div>
    </MediaObjectLayout>
  ))
  .add('Specify right as summary', () => (
    <MediaObjectLayout summary='right'>
      <div style={{height: '100px', width: '100px'}}>
        <Img fluid={imgData.book.childImageSharp.fluid} />
      </div>
      <div>
        <h2>Reference site title</h2>
        <p>
          Explanatory text. Explanatory text.Explanatory text. Explanatory text.
        </p>
      </div>
    </MediaObjectLayout>
  ))
  .add('Specify top as summary', () => (
    <MediaObjectLayout summary='top'>
      <div style={{width: '500px'}}>
        <Img fluid={imgData.summaryLarge.childImageSharp.fluid} />
      </div>
      <div>
        <h2>Reference site title</h2>
        <p>
          Explanatory text. Explanatory text.Explanatory text. Explanatory text.
        </p>
        <p>URL</p>
      </div>
    </MediaObjectLayout>
  ))
