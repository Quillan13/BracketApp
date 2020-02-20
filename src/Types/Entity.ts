import { DateTime } from 'luxon';
import { Transform } from 'class-transformer';

import DateTimeTransform from 'Utils/Transforms/DateTime.transform';

export default class Entity {
	public id?: string;
	public ownerId?: string;

	@Transform(DateTimeTransform)
	public createdAt?: DateTime;

	constructor(id?: string, ownerId?: string, createdAt?: DateTime) {
		this.id = id;
		this.ownerId = ownerId;
		this.createdAt = createdAt;
	}
}
