import React, { useState } from 'react';
import ColorPicker from 'material-ui-color-picker'

import Page from 'Types/Page';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from 'Store';
import Constants from 'Constants'
import UserSettingsService from 'Services/UserSettingsService';
import { UserSettingsActionCreators } from 'Store/UserSettings';


const UserSettings: Page = () => {

	const dispatch = useDispatch();
	const { userSettings } = useSelector((state: GlobalState) => state.userSettings);

	const [primary, setPrimary] = useState(userSettings?.primary ?? Constants.primary);
	const [secondary, setSecondary] = useState(userSettings?.secondary ?? Constants.secondary);
	const [tertiary, setTertiary] = useState(userSettings?.tertiary ?? Constants.tertiary);

	function handleClick() {
		UserSettingsService.GetByOwnerId().then(response => {
			dispatch(UserSettingsActionCreators.Update(response));
		})
	}

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
			<div>
				<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><button onClick={handleClick}>Submit</button>
			</div>
		</>
	);
};

export default UserSettings;
