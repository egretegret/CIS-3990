const profile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42px" height="42px">    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 8.8105469 14.392578 C 5.9935469 15.016578 3 16.385 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 16.385 18.006453 15.016578 15.189453 14.392578 C 14.459453 15.363578 13.308 16 12 16 C 10.692 16 9.5405469 15.363578 8.8105469 14.392578 z" fill="#2F2F35"/></svg>
const activeProfile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42px" height="42px">    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 8.8105469 14.392578 C 5.9935469 15.016578 3 16.385 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 16.385 18.006453 15.016578 15.189453 14.392578 C 14.459453 15.363578 13.308 16 12 16 C 10.692 16 9.5405469 15.363578 8.8105469 14.392578 z" fill="#E29861"/></svg>

export function ProfileIcon({ active, setActive }) {
    return (
        <div onClick={() => setActive("profile")}>
            {active ? activeProfile : profile}
        </div>
    );
};

