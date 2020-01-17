import Blue from '@material-ui/core/colors/blue';
import Orange from '@material-ui/core/colors/orange';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
	palette: {
		primary: {
			main: Blue[700],
		},
		secondary: {
			main: Orange[800],
		},
	},
});
