import { MainContent, BooksContainer, ShowBtn } from "./styles";
import { config } from "../../locales/en";
import { PageWrapper } from "../globalComponents/pageWrapper";
import { BookFoolCard } from "./components/bookFoolCard";
import { useFilterBooks } from "../../hooks/useFilterBooks";
import { Data } from "./redux/types/types";
import { useShowMore } from "../../hooks/useShowMore";
import { useBooksIntoLS } from "../../hooks/useBooksIntoLS";

const { titles, text, buttons } = config;

export const AllBooksPage = () => {
    const { filterData } = useFilterBooks();
    const { slice, showMore } = useShowMore(filterData, 4, 4);
    useBooksIntoLS();

    return (
        <PageWrapper inputDisabled={false}>
            <MainContent>
                <h2>{titles.allBooksPage.pageTitle}</h2>
                <BooksContainer display={filterData?.length ? "grid" : "flex"}>
                    {filterData?.length ? (
                        slice?.map((book: Data) => (
                            <BookFoolCard book={book} key={book.id} />
                        ))
                    ) : (
                        <p className="alt-text">{text.allBooksPage.notFound}</p>
                    )}
                </BooksContainer>
                {filterData?.length === slice?.length || (
                    <ShowBtn onClick={showMore}>
                        {buttons.allBooksPage.showMore}
                    </ShowBtn>
                )}
            </MainContent>
        </PageWrapper>
    );
};
