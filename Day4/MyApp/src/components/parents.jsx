import child from "./child";

const parents = (props) =>{
    return (
        <div>
            <h2>Parent Component</h2>
            <child message = {props.message} />
        </div>
    )
}

export default parents;