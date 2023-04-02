import './styles/Home.css'
import { Poem } from './components/Poem';
import { poems } from './data';


export function Home() {
    return (
        <div className='Home'>
            {poems.map(p => <Poem title={p.title}
                author={p.author}
                poem={p.poem} />)}
        </div>

    );
}