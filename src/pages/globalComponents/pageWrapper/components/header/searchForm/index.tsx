import {ChangeEvent} from "react";
import { FormContainer } from "./styles";
import { config } from "../../../../../../locales/en";
import {useDispatch, useSelector} from "react-redux";
import {actionGetInputValue} from "../../../../../allBooksPage/redux/actions";

const { signatures } = config;
type Props = {disabled: boolean};

export const SearchForm = ({ disabled }: Props) => {
    const dispatch = useDispatch();
    const value = useSelector(
        (state: { [key: string]: any }) => state.books.inputValue,
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionGetInputValue(event.target.value));
    };

    return (
        <FormContainer>
            <input
                value={value}
                onChange={handleChange}
                type="search"
                placeholder={signatures.startPage.header.inputPlaceholder}
                disabled={disabled}
            />
        </FormContainer>
    );
};
