import {useState} from "react";
import {EXAMPLES} from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import TabButton from "../TabButton/TabButton";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    const handleClick = (selectedButton) => {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <div><p>Please select a topic.</p></div>;

    if (selectedTopic) {
        tabContent = (
            <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </>
        )
    }

    return (
        <>
            <Section id="examples" title="Examples">
                <Tabs
                    buttons={
                        <>
                            <TabButton onClick={() => handleClick('components')}
                                       isSelected={selectedTopic === 'components'}>Components</TabButton>
                            <TabButton onClick={() => handleClick('jsx')}
                                       isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                            <TabButton onClick={() => handleClick('props')}
                                       isSelected={selectedTopic === 'props'}>Props</TabButton>
                            <TabButton onClick={() => handleClick('state')}
                                       isSelected={selectedTopic === 'state'}>State</TabButton>
                        </>
                    }
                    ButtonsContainer="menu">
                    {tabContent}
                </Tabs>
            </Section>
        </>
    )
}
