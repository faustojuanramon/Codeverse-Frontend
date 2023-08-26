import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Folder } from 'src/models/Folder.model';
import { Project } from 'src/models/Project.model';
import { Snippet } from 'src/models/Snippet.model';
import { File } from 'src/models/File.model';
import { User } from 'firebase/auth';

@Injectable({
	providedIn: 'root',
})
export class FetchService {
	constructor(private router: Router) {}

	urlBase = 'https://codeverse-backend-5r4pfy3niq-uc.a.run.app/';

	makeRequest = async (
		url: string,
		method: string = 'GET',
		body: Record<string, string> | null
	): Promise<any> => {
		const requestOptions: RequestInit = {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: body ? JSON.stringify(body) : undefined,
		};

		try {
			const response = await fetch(
				`${this.urlBase}${url}`,
				requestOptions
			);

			if (!response.ok) {
				throw new Error('Request failed');
			}

			const data = await response.json();
			return data;
		} catch (error) {
			// console.error(error);
			throw error;
		}
	};

	//  ========================================USUARIO========================================
	createUser = async (uid: string, name: string, email: string): Promise<any> => {
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ uid: uid, name: name, email: email }),
		};

		const response = await fetch(`${this.urlBase}users/`, config);

		if (!response.ok) {
			throw new Error('Request failed');
		}
		const data = await response.json();
		return data;
	};
}
