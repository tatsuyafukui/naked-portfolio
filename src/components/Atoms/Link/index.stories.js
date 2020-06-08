import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "./index";

storiesOf(`Atoms/Link`, module)
  .add(`内部リンク`, () => <Link to={'/'}>リンク</Link>)
  .add(`外部リンク`, () => <Link to={'https://prog-8.com'}>リンク</Link>)
