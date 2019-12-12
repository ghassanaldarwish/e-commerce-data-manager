import { Paths } from '../../PagesPathes/Admin/Paths';
import { Labels } from './Labels';

interface Common {
    title: string;
    linkTo: Paths;
}
export type NavbarOptions = DropdownOptions | SubDropdownOptions;

export interface Navbar extends Common {
    key: Labels;
    affiliate: boolean;
    nested: boolean;
    subItems: DropdownOptions[];
}

export interface DropdownOptions extends Common {
    key: Labels;
    nested: boolean;
    subItems?: SubDropdownOptions[];
}

export interface SubDropdownOptions extends Common {
    key: Labels;
}
