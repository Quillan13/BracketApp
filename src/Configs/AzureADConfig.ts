import { Configuration } from 'msal';

const AzureADConfig: Configuration = {
    auth: {
        clientId: process.env.REACT_APP_AZURE_AD_B2C_CLIENT_ID ?? '',
        authority: process.env.REACT_APP_AZURE_AD_B2C_AUTHORITY,
        redirectUri: process.env.REACT_APP_AZURE_AD_B2C_REDIRECT_URL,
        validateAuthority: false,
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
    },
};

export default AzureADConfig;