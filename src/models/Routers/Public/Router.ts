import { Sources } from '../../FilesSources/Public/Sources';
import { Paths } from '../../PagesPathes/Public/Paths';

export interface Router {
    auth: boolean;
    source: Sources;
    path: Paths;
}
