
const ComponentA = (props) => {

    return <ComponentB value={props.value}></ComponentB>;

}



const ComponentB = (props) => {

    return <ComponentC value={props.value}></ComponentC>;

}



const ComponentC = (props) => {

    return <h3>{props.value}</h3>;

}

const DemoProps = () => {

    const myValue = "Hello from main";

    return <ComponentA value={myValue}></ComponentA>;

}


export default DemoProps