const home = <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 0.5L0 12.1667V35.5H9.6875V21.8889H21.3125V35.5H31V12.1667L15.5 0.5Z" fill="#2F2F35" />
</svg>

const activeHome = <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 0.5L0 12.1667V35.5H9.6875V21.8889H21.3125V35.5H31V12.1667L15.5 0.5Z" fill="#E29861" />
</svg>

export function HomeIcon({ active, setActive }) {
    return (
        <div onClick={() => {setActive("home")}}>
            {active ? activeHome : home}
        </div>
    );
};
