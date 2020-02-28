import React, { useState } from 'react';
import ColorPicker from 'material-ui-color-picker'

import Page from 'Types/Page';
import { useSelector } from 'react-redux';
import { GlobalState } from 'Store';
import Constants from 'Constants'




const UserSettings: Page = () => {

	const { userSettings } = useSelector((state: GlobalState) => state.userSettings);

	const [primary, setPrimary] = useState(userSettings?.primary ?? Constants.primary);
	const [secondary, setSecondary] = useState(userSettings?.secondary ?? Constants.secondary);
	const [tertiary, setTertiary] = useState(userSettings?.tertiary ?? Constants.tertiary);

	//on submit send 3variables through api call
	return (
		<>
			<ColorPicker
				name='Primary'
				defaultValue='Primary'
				value={primary}
				onChange={setPrimary}
			/>
			<ColorPicker
				name='Secondary'
				defaultValue='Secondary'
				value={secondary}
				onChange={setSecondary}
			/>
			<ColorPicker
				name='Tertiary'
				defaultValue='Tertiary'
				value={tertiary}
				onChange={setTertiary}
			/>
		</>
	);
};

export default UserSettings;
