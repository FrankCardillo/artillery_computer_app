// Holds all the control panes and the fire button
// tells the control panes what to render, generates random numbers for some of them

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { count: 1 };
   
    handleCount(value) {
        this.setState((prevState) => ({count: prevState.count + value}));
    }
    handleCount(value) {
        this.setState({count: this.state.count + value});
    }
 
    render() {
        return(
            <div>
                Hello {props}
            </div>
        )
    }
}