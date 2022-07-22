import { IComments } from './Comment';

export interface IMoment {
  id?: number;
  title: string;
  description: string;
  image: string;
  create_at?: string;
  update_at?: string;
  comments?: IComments[];
}
