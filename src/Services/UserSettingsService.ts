import UserSettings from 'Types/UserSettings';
import ApiService from './ApiService';
import Axios from 'axios';
import { plainToClass } from 'class-transformer';

const USERSETTINGS_ENDPOINT = 'UserSettings';

class UserSettingsService extends ApiService<UserSettings> {

    constructor() {
        super(USERSETTINGS_ENDPOINT, UserSettings);
    }


    public async GetByOwnerId(): Promise<UserSettings> {
        const response = await Axios.get<UserSettings>(this.url, {
            headers: await this.GetHeaders(),
        });

        return plainToClass(this.classType, response.data);
    }
}

export default new UserSettingsService();