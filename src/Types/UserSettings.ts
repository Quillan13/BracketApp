import { DateTime } from 'luxon';

import Entity from './Entity';

export default class UserSettings extends Entity {
    public primary: string;
    public secondary: string;
    public tertiary: string;


    constructor(
        primary: string,
        secondary: string,
        tertiary: string,
        id?: string,
        ownerId?: string,
        createdAt?: DateTime,
    ) {
        super(id, ownerId, createdAt);

        this.primary = primary;
        this.secondary = secondary;
        this.tertiary = tertiary;
    }
}