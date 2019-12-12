import { Paths } from '../../PagesPathes/Public/Paths';
import { Category, SubCategory, SubSubCategory } from '../../Categories/Categories';

interface Common {
    title: string;
    linkTo?: Paths;
}
export type NavbarOptions = DropdownOptions | SubDropdownOptions;

export interface Navbar extends Common {
    key: Category;
    affiliate: boolean;
    nested: boolean;
    subItems?: DropdownOptions[];
}

export interface DropdownOptions extends Common {
    key: SubCategory;
    nested: boolean;
    subItems?: SubDropdownOptions[];
}

export interface SubDropdownOptions extends Common {
    key: SubSubCategory;
}
