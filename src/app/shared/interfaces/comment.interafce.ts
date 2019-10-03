import { IAuthor } from './author.interface';
import { ICommentList } from './comment-list.interface';

export interface IComment {
    id: string,
    createdTime: string;
    author: IAuthor;
    images: string[];
    comments?: ICommentList; 
}
