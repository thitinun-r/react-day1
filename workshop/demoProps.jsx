import { createContext, useContext } from "react";
const DemoContext  = createContext("Demo Context")

const ComponentA = () => {

    return <ComponentB></ComponentB>;

}



const ComponentB = () => {

    return <ComponentC></ComponentC>;

}



const ComponentC = () => {
    const value = useContext(DemoContext)
    return <h3>{value}</h3>;

}



const DemoProps = () => {

    const myValue = "Demo With UseContext";


    return (
        <DemoContext.Provider value={myValue}>
            <ComponentA></ComponentA>
        </DemoContext.Provider>
    );

}


export default DemoProps