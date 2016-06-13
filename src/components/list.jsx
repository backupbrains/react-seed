var React = require('react');
var ListItem = require('./list-item.jsx');


var ingredients = [
    {'id': 1, "text": "ham"},
    {'id': 2, "text": "cheese"}
];


var List = React.createClass({
    render: function () {
        return <ul>
            {this.renderContent()}
        </ul>
    },

    renderContent: function () {
        return ingredients.map(function(item){
            return <ListItem
                key={item.id}
                ingredient={item.text}>
            </ListItem>
        })
    }



});



module.exports = List;