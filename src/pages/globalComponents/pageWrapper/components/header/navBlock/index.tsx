import { NavigationBlock } from "./styles";
import { config } from "../../../../../../locales/en";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { links } = config;

export const Navigation = () => {
    const myBooks = useSelector((state: any) => state.myBooks);
    const books = {
        boughtBooks: myBooks.boughtBooks,
        waitingBooks: myBooks.waitingBooks,
    };

    return (
        <NavigationBlock>
            <Link to="/fox-library/all-books">
                {links.homePage.header.allBooks}
            </Link>
            <Link to="/fox-library/your-order" state={books}>
                {links.homePage.header.yourOrder}
            </Link>
        </NavigationBlock>
    );
};
