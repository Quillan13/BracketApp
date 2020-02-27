import UserSettings from 'Types/UserSettings';
import ApiService from './ApiService';

const USERSETTINGS_ENDPOINT = 'UserSettings';

class UserSettingsService extends ApiService<UserSettings> {
    constructor() {
        super(USERSETTINGS_ENDPOINT, UserSettings);
    }
}

export default new UserSettingsService();