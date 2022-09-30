import './App.css';
import Accordion from './components/Accordion'
import Section from './components/Section'
import Content from './components/Content'
import Title from './components/Title'
import Description from './components/Description';
import illustration from './assets/illustration-woman-online-desktop.svg'
import box from './assets/illustration-box-desktop.svg'

function App() {
    return (
        <div className="container">
            <div className="img-container">
                <img src={illustration} alt="woman looking at a screen" />
            </div>
            <img id="box" src={box} alt="a red box" />
            <div className="accordion">
                <h1>FAQ</h1>
                <Accordion>
                    <Section>
                        <Title>
                            How many team members can I invite?
                        </Title>
                        <Content>
                            <Description city="paris" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            What is the maximum file upload size?
                        </Title>
                        <Content>
                            <Description city="lech" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            How do I reset my password?
                        </Title>
                        <Content>
                            <Description city="paris" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            Can I cancel my subscription?
                        </Title>
                        <Content>
                            <Description city="madrid" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            Do you provide additional support?
                        </Title>
                        <Content>
                            <Description city="madrid" />
                        </Content>
                    </Section>
                </Accordion>
            </div>

        </div>
    )
}

export default App;
