import { TransformationType } from 'class-transformer';
import { DateTime } from 'luxon';

export default function DateTimeTransform(value: any, obj: any, transformationType: TransformationType): any {
	if (value === null || value === undefined) return value;

	switch (transformationType) {
		case TransformationType.PLAIN_TO_CLASS:
		case TransformationType.CLASS_TO_CLASS:
			return DateTime.fromISO(value);

		case TransformationType.CLASS_TO_PLAIN:
			return (value as DateTime).toISO();

		default:
			return value;
	}
}
