import { File } from './File.model';
import { Snippet } from './Snippet.model';

export interface Project {
	id: number;
	name: string;
	description: string;
	createdAt: string;
	modifiedAt: string;
	files?: Array<File>;
	snippets?: Array<Snippet>;
}
