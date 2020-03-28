import React from "react";
import {ImageName} from "../constants";

export interface IMilestone extends React.HTMLAttributes<HTMLElement> {
		image: ImageName;
		heading: string;
		reverse: boolean;
		content: string;
		link: string;
}
