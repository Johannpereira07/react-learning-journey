
const container=document.querySelector('#root');

function customRender(reactElement,root){
    const newElement=document.createElement(reactElement.type);
    for(prop in reactElement.props){
        console.log(prop);
        newElement.setAttribute(prop,reactElement.props[prop]);
    }
    newElement.innerHTML=reactElement.children;
    root.appendChild(newElement);
}

const reactElement={
    type:'a',
    props:{
        href:"https://codevita.tcsapps.com/",
        target:"_blank"
    },
    children:'register here',
}


customRender(reactElement,container);
