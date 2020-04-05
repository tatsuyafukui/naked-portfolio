import React from 'react';
import {storiesOf} from '@storybook/react';
import MediaObjectLayout from './index';
import Image from "../Img";
import {ImageName} from "../../../constants";
import Button from "../Button";
import Heading from "../Heading";
import Txt from "../Txt";

storiesOf(`Atoms/MediaObjectLayout`, module)
.add(`default`, () => (
		<MediaObjectLayout>
				<div>
						<Image imageName={ImageName.rocketImage}/>
				</div>
				<p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
				<p>表示されてはだめ表示されてはだめ表示されてはだめ表示されてはだめ</p>
		</MediaObjectLayout>
))
.add(`sectionタグ指定`, () => (
		<MediaObjectLayout tag={'section'}>
				<div>
						<Image imageName={ImageName.rocketImage}/>
				</div>
				<p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
		</MediaObjectLayout>
))
.add(`タイトル、説明、ボタン`, () => (
		<MediaObjectLayout>
				<div>
						<Image imageName={ImageName.rocketImage}/>
				</div>
				<div>
						<Heading>タイトル</Heading>
						<Txt>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</Txt>
						<Button>ボタン</Button>
				</div>
		</MediaObjectLayout>
))
