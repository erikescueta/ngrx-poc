export interface IArticle {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class Article implements IArticle {
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(obj?: any) {
        this.id = obj.id;
        this.userId = obj.userId;
        this.title = obj.title;
        this.body = obj.body;
    }
}

export class ArticleResult implements IArticle {
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(obj?: any) {
        this.id = obj.id;
        this.userId = obj.userId;
        this.title = obj.title;
        this.body = obj.body;
    }
}
