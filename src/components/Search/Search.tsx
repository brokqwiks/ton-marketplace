import classes from "./styles.module.scss";

interface Props {
    shownMobile: boolean;
}

export default function Search({ shownMobile }: Props) {
    return (
        <search className={`${classes.search} ${shownMobile ? "shown-mobile" : "hidden-mobile"}`}>
            <form autoComplete="off">
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="search" id="search" name="search" placeholder="Search your product" />
            </form>
        </search>
    );
}
