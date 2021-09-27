import axios from 'axios';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

type Todo = { title: ''; descr: '' };

const App: FC = () => {
    const initialState: Todo = { title: '', descr: '' };
    const [state, setState] = useState<Todo>(initialState);
    const [todos, setTodos] = useState<Todo[]>([]);

    const { title, descr } = state;

    const changeState = (e: ChangeEvent<HTMLInputElement>): void => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        axios
            .post('http://localhost:3001/todos/add', state)
            .catch((err) => {
                throw new Error(err);
            })
            .then((res) => console.log(res.data))
            .then(() => {
                axios
                    .get('http://localhost:3001/todos/')
                    .then((res) => setTodos(res.data))
                    .catch((err) => {
                        throw new Error(err);
                    });
            });
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={changeState}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="descr"
                        placeholder="descr"
                        value={descr}
                        onChange={changeState}
                    />
                </div>

                <button type="submit">Send</button>
            </form>

            <ol>
                {todos.map((todo, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>
                        <h3>{todo.title}</h3>
                        <p>{todo.descr}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default App;
