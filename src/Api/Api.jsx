import { Component } from 'react';

export default class Api extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            data: {}
        };
    }

    fetchData = () => {
        const { count } = this.state;
        fetch(`https://fakestoreapi.com/products/${count}`)
            .then((res) => res.json())
            .then((dataa) => this.setState({ data: dataa }))
            .catch((error) => console.error("Error fetching data:", error));
    };

    componentDidMount() {
        this.fetchData(); // Fetch data when the component first mounts
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.fetchData(); // Fetch data only if count has changed
        }
    }

    handleprev = () => {
        this.setState((prevState) => ({
            count: prevState.count > 1 ? prevState.count - 1 : 1 // Prevent negative count
        }));
    };

    handlenext = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        console.log('data', this.state.data);
        return (
            <>
                <div style={{ border: '1px solid', padding: '10px', maxWidth: '400px' }}>
                    {this.state.data.id ? (
                        <>
                            <h1>{this.state.data.id}</h1>
                            <img src={this.state.data.image} alt="" width={50} />
                            <h3>{this.state.data.title}</h3>
                            <p>{this.state.data.description}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <button onClick={this.handleprev}>Prev</button>&emsp;
                    <button onClick={this.handlenext}>Next</button>
                </div>
            </>
        );
    }
}
