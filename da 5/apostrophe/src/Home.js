import { Poem } from './components/Poem';
import { poems } from './data';


export function Home() {
    return (
        <div>
            {poems.map(p => <Poem title={p.title}
                author={p.author}
                poem={p.poem} />)}
        </div>

    );
}