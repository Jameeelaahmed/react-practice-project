import "./Examples.css"
import Section from "../Section"
import TabButton from "../TabButtons/TabButton"
import { EXAMPLES } from "../../data"
import { useState } from "react"
export default function Examples(){
    const [selectedTopic, setselectedTopic] = useState("");
  function handleSelect(selectedButton) {
    setselectedTopic(selectedButton);
  }

  let tabContent = <p>PLease Select a Topic</p>;
  if (selectedTopic) {
    tabContent= (
      <Section id="tab-content">
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </Section>
    );
  }
    return(
        <Section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            onSelect={() => handleSelect("components")}
            buttonName={EXAMPLES.components.title}
            isSelected={selectedTopic==='components'}
          ></TabButton>
          <TabButton
            onSelect={() => handleSelect("jsx")}
            buttonName={EXAMPLES.jsx.title}
            isSelected={selectedTopic==='jsx'}
          ></TabButton>
          <TabButton
            onSelect={() => handleSelect("props")}
            buttonName={EXAMPLES.props.title}
            isSelected={selectedTopic==='props'}
          ></TabButton>
          <TabButton
            onSelect={() => handleSelect("state")}
            buttonName={EXAMPLES.state.title}
            isSelected={selectedTopic==='state'}
          ></TabButton>
        </menu>
        {tabContent}
      </Section>
    )
}