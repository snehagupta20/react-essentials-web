import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

const coreConcepts=[
    {
        image: componentsImg,
        title:"Components",
        description:"The core UI builduing block - compose the user intergface by combining multiple components ",
    },
    {
        image:jsxImg,
        title:"JSX",
        description:"Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
    },
    {
        image:propsImg,
        title:"Props",
        description:"Make components configurable (and therefore reusable) by passing the input data to them"
    },
    {
        image:stateImg,
        title:"State",
        description:"React-managed data which, when changed, chauses the component to re-render & the UI to update."
    }

];

export const EXAMPLES={
    components:{
        title:"Components",
        description:"Components are the builduing blocks of react applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output",
        code: 
`function Welcome(){
    return <h1>Hello world</h1>;
}`,
    },
    jsx:{
        title:"JSX",
        description:"JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content). ",
        code: `
<div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
</div>`,
    },
    props:{
        title:"Props",
        description:"Components accept arbitary inputs called props. They are like function arguments.",
        code:`
function Welcome(props){
    return <h1> Hello, {props.name} </h1>
}`,
    },
    state:{
        title:"State",
        description:"State allows React components to change their output over time in response to user actions, network responses, and anything else.",
        code:`
function Counter(){
    const [isVisible, setIsVisible] = useState(false);

    function handleClick(){
        setIsVisible(true);
    }

    return(
        <div>
            <button onClick={handleClick}>Show Details</button>
            {isVisible && <p>Amazing details!</p>}
        </div>
    );
}`,
    },
};
export default coreConcepts;