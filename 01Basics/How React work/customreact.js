function customRender(ReactElement, mainContainer) {
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children

    for (const prop in ReactElement.props) {
        if (prop === 'children') {
            continue; 
        }
        domElement.setAttribute(prop, ReactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click Me'
}

const mainContainer = document.querySelector('#root')

customRender(ReactElement, mainContainer)