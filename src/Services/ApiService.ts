import Axios from 'axios';
import { plainToClass, classToPlain } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

import Entity from 'Types/Entity';
import AuthService from 'Services/AuthService';

export default class ApiService<TEntity extends Entity> {
	protected readonly url: string;

	protected readonly classType: ClassType<TEntity>;

	constructor(endpoint: string, classType: ClassType<TEntity>) {
		this.url = `${process.env.REACT_APP_API_BASE_URL}/${endpoint}`;
		this.classType = classType;
	}

	public async Get(): Promise<TEntity[]> {
		const response = await Axios.get<TEntity[]>(this.url, {
			headers: await this.GetHeaders(),
		});

		return plainToClass(this.classType, response.data);
	}

	public async GetById(id: string): Promise<TEntity> {
		const response = await Axios.get(this.CreateUrlWithId(id), {
			headers: await this.GetHeaders(),
		});

		return plainToClass(this.classType, response.data);
	}

	public async Delete(id?: string): Promise<void> {
		if (id === undefined) throw new Error('Cannot delete an entity without an id');

		await Axios.delete(this.CreateUrlWithId(id), {
			headers: await this.GetHeaders(),
		});
	}

	public async Create(data: TEntity): Promise<TEntity> {
		const response = await Axios.post<TEntity>(this.url, classToPlain(data), {
			headers: await this.GetHeaders(),
		});

		return plainToClass(this.classType, response.data);
	}

	public async Update(entity: TEntity): Promise<TEntity> {
		if (entity.id === undefined) throw new Error('Cannot update an entity without an id');

		await Axios.put(this.CreateUrlWithId(entity.id), entity, {
			headers: await this.GetHeaders(),
		});

		return entity;
	}

	protected async GetHeaders(): Promise<any> {
		return {
			'Content-Type': 'application/json',
			Authorization: `bearer ${await this.GetAccessToken()}`,
		};
	}

	protected async GetAccessToken(): Promise<string> {
		const { accessToken } = await AuthService.GetAccessToken();

		return accessToken;
	}

	protected CreateUrlWithId(id: string): string {
		return `${this.url}/${id}`;
	}
}
