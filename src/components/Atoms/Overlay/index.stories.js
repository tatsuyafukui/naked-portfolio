import React from 'react'
import {storiesOf} from '@storybook/react/dist/client'
import Overlay, {Front, Back} from './index'
import data from '../../../mock/data/scene'

storiesOf('Atoms/Overlay', module)
  .add(`Default`, () => (
    <Overlay style={{width: '300px', height: '200px'}}>
      <Back>
        <img src={data.scenesJson.image.publicURL} />
      </Back>
      <Front>
        <h1 style={{color: 'white'}}>Title</h1>
      </Front>
    </Overlay>
  ))
  .add('Background image reduction', () => (
    <Overlay style={{width: '300px', height: '300px'}}>
      <Back>
        <img src={data.scenesJson.image.publicURL} />
      </Back>
      <Front>
        <h1 style={{color: 'white'}}>Title</h1>
      </Front>
    </Overlay>
  ))
  .add('Multiple foreground text', () => (
    <Overlay style={{width: '300px', height: '200px'}}>
      <Back>
        <img src={data.scenesJson.image.publicURL} />
      </Back>
      <Front>
        <div>
          <h1 style={{color: 'white'}}>Title</h1>
          <p style={{color: 'white'}}>description</p>
        </div>
      </Front>
    </Overlay>
  ))
  .add('Background is color only', () => (
    <Overlay style={{width: '300px', height: '200px'}}>
      <Back>
        <div style={{backgroundColor: 'red'}} />
      </Back>
      <Front>
        <div>
          <h1 style={{color: 'white'}}>Title</h1>
          <p style={{color: 'white'}}>description</p>
        </div>
      </Front>
    </Overlay>
  ))
  .add('Ovarlay colors can be overridden', () => (
    <Overlay
      overlayStyle={{backgroundColor: 'rgba(3, 0, 39, 0.39)'}}
      style={{width: '300px', height: '200px'}}
    >
      <Back>
        <img src={data.scenesJson.image.publicURL} />
      </Back>
      <Front>
        <div>
          <h1 style={{color: 'white'}}>Title</h1>
          <p style={{color: 'white'}}>description</p>
        </div>
      </Front>
    </Overlay>
  ))
