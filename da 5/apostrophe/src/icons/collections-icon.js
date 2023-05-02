const collections = <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_28)">
<path d="M7.5 10.5H4V35C4 36.925 5.575 38.5 7.5 38.5H32V35H7.5V10.5Z" fill="#2F2F35"/>
<path d="M35.5 3.5H14.5C12.575 3.5 11 5.075 11 7V28C11 29.925 12.575 31.5 14.5 31.5H35.5C37.425 31.5 39 29.925 39 28V7C39 5.075 37.425 3.5 35.5 3.5ZM35.5 21L31.125 18.375L26.75 21V7H35.5V21Z" fill="#2F2F35"/>
</g>
<defs>
<clipPath id="clip0_1_28">
<rect width="42" height="42" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
const activeCollections = <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_28)">
<path d="M7.5 10.5H4V35C4 36.925 5.575 38.5 7.5 38.5H32V35H7.5V10.5Z" fill="#E29861"/>
<path d="M35.5 3.5H14.5C12.575 3.5 11 5.075 11 7V28C11 29.925 12.575 31.5 14.5 31.5H35.5C37.425 31.5 39 29.925 39 28V7C39 5.075 37.425 3.5 35.5 3.5ZM35.5 21L31.125 18.375L26.75 21V7H35.5V21Z" fill="#E29861"/>
</g>
<defs>
<clipPath id="clip0_1_28">
<rect width="42" height="42" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


export function CollectionsIcon({ active, setActive }) {
    return (
        <div onClick={() => setActive("collections")}>
            {active ? activeCollections : collections}
        </div>
    );
};
