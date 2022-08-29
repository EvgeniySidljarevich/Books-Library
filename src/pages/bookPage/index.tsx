import { PageWrapper } from "../globalComponents/pageWrapper";
import { StarRating } from "../globalComponents/starRating";
import { config } from "../../locales/en";
import { MainContent, Image, GrayBtn, RedBtn, BookDescription } from "./styles";
import { useParams } from "react-router-dom";
import { useFilterBooks } from "../../hooks/useFilterBooks";
import { Data } from "../allBooksPage/redux/types/types";
import { useShowMore } from "../../hooks/useShowMore";

const { buttons, signatures, titles } = config;

export const BookPage = () => {
    const { filterData } = useFilterBooks();
    const params = useParams();
    const currentBook = filterData?.find((book: Data) =>
        book.id.includes(params.bookId!),
    );
    const text = currentBook?.description;
    const { slice, showMore } = useShowMore(text, 800, text?.length);
    const createText = () => ({ __html: slice });

    return (
        <PageWrapper inputDisabled={true}>
            <MainContent>
                <Image
                    src={currentBook?.imageUrl}
                    alt={signatures.allBooksPage.bookImageAlt}
                />
                <BookDescription>
                    <StarRating
                        value={3}
                        size="20"
                        onChange={""}
                        edit={false}
                    />
                    <h2>{currentBook?.name}</h2>
                    <h4>{currentBook?.author}</h4>
                    <p className="description">{`${currentBook?.length}, ${currentBook?.released}`}</p>
                    <RedBtn>{buttons.allBooksPage.order}</RedBtn>
                    <article>
                        <h4 className="article-title">{titles.bookPage}</h4>
                        <p
                            className="article-text"
                            dangerouslySetInnerHTML={createText() as any}
                        />
                        {text?.length === slice?.length || (
                            <GrayBtn onClick={showMore}>
                                {buttons.allBooksPage.showMore}
                            </GrayBtn>
                        )}
                    </article>
                </BookDescription>
            </MainContent>
        </PageWrapper>
    );
};
