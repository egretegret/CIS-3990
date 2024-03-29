const savedBookmark = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" id="bookmark"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>;
const unsavedBookmark = <svg xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    id="bookmark">
    <path fill="none"
        d="M0 0h24v24H0V0z"></path>
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"></path>
</svg>;


export function Bookmark({ saved }) {
    return (
        <div>
            {saved ? savedBookmark : unsavedBookmark}
        </div>
    );
};