import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Constants from 'Constants'

export default function createTheme(primary: string = Constants.primary, secondary: string = Constants.secondary, tertiary: string = Constants.tertiary) {
	return createMuiTheme({
		palette: {
			primary: {
				main: primary,
			},
			secondary: {
				main: secondary,
			},
			tertiary: {
				main: tertiary
			},
		},
	});
}