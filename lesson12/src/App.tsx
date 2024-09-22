import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

import { useState } from "react";

function App() {
    const [count, setCount] = useState<number>(1);

    return (
        <>
            <Heading title="Hello World" />
            <Section title="Sektion">
                <input id="cbTest" type="checkbox" />
                <label htmlFor="cbTest">Test</label>
            </Section>
            <Counter setCount={setCount}>Count is {count}</Counter>
            <List
                items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
                render={(item: string) => <span className="bold">{item}</span>}
            />
        </>
    );
}

export default App;
