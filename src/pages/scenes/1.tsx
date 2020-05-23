import React from 'react';
import SEO from '../../components/seo';
import CreativeRoadMap from '../../components/Organisms/CreativeRoadMap';
import SceneTemplate from '../../components/Templates/SceneTemplate';
import Scene from '../../components/Organisms/Scene';

const IndexPage = () => {
		return (
				<SceneTemplate>
						<SEO title="Home" />
						<Scene />
				</SceneTemplate>
		);
};

export default IndexPage;
