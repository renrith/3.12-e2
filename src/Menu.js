import React, { Component } from "react";

class Menu extends Component {

    componentDidUpdate() {
        console.log('updated menu!');
    }
    
    render() {
        const { menu } = this.props;

        return (
            <ul>
                {menu.map((item, index) => {
                    return (<li key={index}><a href={item.link}>{item.label}</a></li>);
                })}
            </ul>
        );
    }
}

export default Menu;