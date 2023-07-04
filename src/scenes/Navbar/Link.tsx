import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types";
type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;

}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // convert page name to lower case then remove any spaces from it acc. to the RegEx.
    return (
        <AnchorLink

            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? "text-Primary-500" : ""} 
    transition duration-500 hover:text-primary-300 `}
        >

            {page}

        </AnchorLink>
    )
}

export default Link