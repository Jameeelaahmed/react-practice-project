// !CORECONCEPTS
import { CORE_CONCEPTS } from "../data.js";
// !CORECONCEPTS

// ! CORE CONCEPT
import { CoreConcept } from "./coreConcept/CoreConcept.jsx";
// ! CORE CONCEPT

// !SECTION
import Section from "./Section.jsx";
// !SECTION

export default function CoreConcepts() {
    return (
    <Section id="core-concepts">
        <ul>
            {CORE_CONCEPTS.map((concepItem) => (
            <CoreConcept key={concepItem.title} {...concepItem}></CoreConcept>
            ))}
        </ul>
    </Section>
    );
}
