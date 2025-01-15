import {CORE_CONCEPTS} from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import Section from "../Section/Section";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core concepts">
            <ul>
                {CORE_CONCEPTS.map((concept, index) => (
                    <CoreConcept key={concept.title} {...concept} />
                ))}
            </ul>
        </Section>

    )
}
