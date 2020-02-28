import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default function CreateTheme(primary: string, secondary: string, tertiary: string) {
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