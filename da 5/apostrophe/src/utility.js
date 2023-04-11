import { allPoems } from "./data";

export function getPoem(title) {
    return allPoems.find(e => e.title == title);
}