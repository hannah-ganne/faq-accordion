import './App.css';
import Accordion from './components/Accordion'
import Section from './components/Section'
import Content from './components/Content'
import Title from './components/Title'
import Description from './components/Description';
import desktop from './assets/illustration-woman-online-desktop.svg'
import mobile from './assets/illustration-woman-online-mobile.svg'
import box from './assets/illustration-box-desktop.svg'

function App() {
    return (
        <div className="container">
            <div className="img-container">
                <img className="desktop" src={desktop} alt="woman looking at a screen" />
                <img className="mobile" src={mobile} alt="woman looking at a screen" />
            </div>
            <img id="box" src={box} alt="a red box" />
            <div className="accordion">
                <h1>FAQ</h1>
                <Accordion>
                    <Section>
                        <Title>
                            Can I use libraries/frameworks on these projects?
                        </Title>
                        <Content>
                            <Description question="1" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            How can I get help if I'm stuck on a challenge?
                        </Title>
                        <Content>
                            <Description question="2" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            Can I use these projects in my portfolio?
                        </Title>
                        <Content>
                            <Description question="3" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            Is there an official solution I can take a look at?
                        </Title>
                        <Content>
                            <Description question="4" />
                        </Content>
                    </Section>
                    <Section>
                        <Title>
                            Do I get a code review when I post my solution?
                        </Title>
                        <Content>
                            <Description question="5" />
                        </Content>
                    </Section>
                </Accordion>
            </div>

        </div>
    )
}

export default App;
