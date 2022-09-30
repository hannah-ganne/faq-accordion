# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

<img width="1438" alt="Screenshot 2022-09-30 at 22 19 07" src="https://user-images.githubusercontent.com/48105337/193350080-d05f8c1f-999e-445c-8c1e-913181831c88.png">

### Links

- Live Site URL: [FAQ Accordion Demo](https://hannah-ganne.github.io/faq-accordion)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- CSS Flexbox

### What I learned

I tried to apply the concept of compound components of React development to build this accordion, for maximum reusability.
Users of this component can change and reposition title and content as they wish.

```js
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
  </Accordion>
```

### Useful resources

- [Build reusable react](https://scrimba.com/learn/reusablereact) - This reusable react course by Cassidy Williams on Scrimba helped me understand compound components. 
