//ye customrender kam kese karega
function customRender(reactElement,container){
    /*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
      if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement={
    type: 'a',
    props: {
        href:'http://google.com',
        target:'_blank'
    },
    children: 'click me to go on google'

}//matlab react use kese dekhega jese hum koi fuction me tag dete he to react pehle tree generate karega


const mainContainer=document.querySelector('#root')
//ab aap use inject karo
customRender(reactElement,mainContainer)