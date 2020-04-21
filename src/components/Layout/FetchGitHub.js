import React from "react";

export default class FetchGitHub extends React.Component {

    state = {
        loading: true
    }
    async componentDidMount() {
        var i = 0
        const repository_url = "https://api.github.com/users/ripudamansinghthind/repos"
        const response = await fetch (repository_url);
        const data = await response.json();
        var fullnames = []
        var descriptions = []
        console.log(data)
        for(i=0; i < data.length; i++) {
        fullnames += data[i].name + "\n"
        descriptions += data[i].description + '\n'
        }
        this.setState({person: data[0], loading: false, fullname: fullnames, desc: descriptions })
    }
    render() {
        return (
            <div>
            <div>{this.state.fullname}</div>
            <div>{this.state.desc}</div>
            </div>
        );
    }
}