import { IPost } from "../Posts/interface";

export interface IAuthor {
    id: number;
    name: string;
    Posts?: IPost[];
}

export function createAuthor({id, name, Posts}: any): IAuthor {
    return {
        id, name, Posts
    };
}

export function createAuthors(data: any[]): IAuthor[] {
    return data.map(createAuthor);
}