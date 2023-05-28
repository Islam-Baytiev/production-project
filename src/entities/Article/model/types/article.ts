export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}
export interface ArticleCodeBase {
    id: string;
    type: ArticleBlockType;
}
export interface ArticleCodeBlock extends ArticleCodeBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImageBlock extends ArticleCodeBase {
    type: ArticleBlockType.IMAGE
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArticleCodeBase {
    type: ArticleBlockType.TEXT
    title?: string;
    paragraphs: string[];
}
export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;
export enum ArticleType {
    'IT' = 'IT',
    SCIENCE ='SCIENCE',
    ECONOMICS = 'SCIENCE',
}
export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
