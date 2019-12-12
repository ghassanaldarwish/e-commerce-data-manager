import { Sources } from '../../FilesSources/Admin/Sources';
import { Paths } from '../../PagesPathes/Admin/Paths';

export interface Router {
    auth: boolean;
    source: Sources;
    path: Paths;
}
