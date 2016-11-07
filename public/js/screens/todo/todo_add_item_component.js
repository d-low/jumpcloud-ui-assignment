'use strict';

var React = require('react');
var ReactBackbone = require('react.backbone');

var ToDoAddItemComponent = React.createFactory(
  React.createBackboneClass({
    getInitialState: function() {
      return {
        description: ''
      };
    },

    handleInputChange: function(e) {
      this.setState({
        description: e.target.value
      });
    },

    handleInputKeyDown: function(e) {
      if (e.which !== 13) {
        return;
      }

      this.addItem();
    },

    handleButtonClick: function(e) {
      e.preventDefault();
      this.addItem();
    },

    addItem: function() {
      if (this.state.description) {
        this.props.toDoCollection.create({
          done: false,
          description: this.state.description
        }, {
          wait: true
        });

        this.setState({
          description: ''
        });
      }
    },

    render: function() {
      /* beautify ignore:start */
      return (
        <div className="todo-list__add-item">
          <div className="todo-list-col-left">
            <input className="todo-list__add-item__input" 
                   placeholder="Enter a new todo"
                   onChange={this.handleInputChange}
                   onKeyDown={this.handleInputKeyDown}
                   type="text"  
                   value={this.state.description}/>
          </div>
          <div className="todo-list-col-right">
            <button className="todo-list__add-item__action" onClick={this.handleButtonClick}>
              Add 
            </button>
          </div>
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoAddItemComponent;