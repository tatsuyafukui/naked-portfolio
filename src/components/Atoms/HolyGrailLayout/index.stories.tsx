import React from 'react';
import HolyGrailLayout, {
  HolyGrailTop,
  HolyGrailRight,
  HolyGrailLeft,
  HolyGrailBottom,
  HolyGrailMain,
} from './index';
import { storiesOf } from '@storybook/react';
import { withStyle } from '../../utils/decorators';
import {Top} from '../../Templates/IndexTemplate';
const dammy = require('../../../mock/images/img01.png');

storiesOf(`Atoms/HolyGrailLayout`, module).add(`default`, () => (
  <HolyGrailLayout>
    <HolyGrailTop>
      <header style={{ minHeight: '50px', backgroundColor: 'red' }}>
        header
      </header>
    </HolyGrailTop>
    <HolyGrailRight>
      <nav style={{ minHeight: '100px', backgroundColor: '#aaa' }}>right</nav>
    </HolyGrailRight>
    <HolyGrailLeft>
      <aside style={{ minHeight: '150px', backgroundColor: '#aaa' }}>
        left
      </aside>
    </HolyGrailLeft>
    <HolyGrailMain>
      <main style={{ minHeight: '300px', backgroundColor: 'yellow' }}>
        main
      </main>
    </HolyGrailMain>
    <HolyGrailBottom>
      <footer style={{ minHeight: '50px', backgroundColor: 'blue' }}>
        footer
      </footer>
    </HolyGrailBottom>
  </HolyGrailLayout>
))
.add(`TOP画面`, () => (
  <HolyGrailLayout>
    <HolyGrailTop>
      <header style={{ minHeight: '50px', backgroundColor: 'red' }}>
        header
      </header>
      <Top image={dammy} />
    </HolyGrailTop>
    <HolyGrailMain>
      <main style={{ minHeight: '300px', backgroundColor: 'yellow' }}>
        main
      </main>
    </HolyGrailMain>
    <HolyGrailBottom>
      <footer style={{ minHeight: '50px', backgroundColor: 'blue' }}>
        footer
      </footer>
    </HolyGrailBottom>
  </HolyGrailLayout>
))
