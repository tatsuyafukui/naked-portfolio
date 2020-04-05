import React from "react";
import renderer from "react-test-renderer";
import Button, {buttonFactory} from "./index";
import {ButtonType} from "../../../constants";

describe("Button", () => {
		it("renders correctly", () => {
				const tree = renderer
				.create(<Button>ボタン</Button>)
				.toJSON();
				expect(tree).toMatchSnapshot()
		});
});

describe("Button factory", () => {

		it("className base", () => {
				const Button = buttonFactory(ButtonType.base);
				const classArray = renderer
				.create(<Button>button</Button>)
				.toJSON()
				.props
				.className
				.split(' ');
				expect('base').toMatch(classArray[1])
		});

		it("className primary", () => {
				const PrimaryButton = buttonFactory(ButtonType.primary);
				const classArray = renderer
				.create(<PrimaryButton>button</PrimaryButton>)
				.toJSON()
				.props
				.className
				.split(' ');
				expect('primary').toMatch(classArray[1])
		});

		it("className secondary", () => {
				const SecondaryButton = buttonFactory(ButtonType.secondary);
				const classArray = renderer
				.create(<SecondaryButton>button</SecondaryButton>)
				.toJSON()
				.props
				.className
				.split(' ');
				expect('secondary').toMatch(classArray[1])
		});

		it("className warning", () => {
				const WarningButton = buttonFactory(ButtonType.warning);
				const classArray = renderer
				.create(<WarningButton>button</WarningButton>)
				.toJSON()
				.props
				.className
				.split(' ');
				expect('warning').toMatch(classArray[1])
		});

		it("className danger", () => {
				const DangerButton = buttonFactory(ButtonType.danger);
				const classArray = renderer
				.create(<DangerButton>button</DangerButton>)
				.toJSON()
				.props
				.className
				.split(' ');
				expect('danger').toMatch(classArray[1])
		});

});
