var React = require('react');
var Backbone = require('backbone');
var ReactBackbone = require('react.backbone');
var classNames = require('classnames');

var ToDoListItemComponent = React.createFactory(
  React.createBackboneClass({
    getInitialState: function() {
      return {
        description: this.props.toDoItem.get('description'),
        done: this.props.toDoItem.get('done')
      };
    },

    handleDeleteClicked: function(e) {
      this.props.toDoItem.destroy();
    },

    handleDoneChanged: function(e) {
      this.setState({
        done: e.target.checked
      });
      this.props.toDoItem.save({
        'done': e.target.checked
      });
    },

    render: function() {
      /* beautify ignore:start */
      return (
        <div className="todo-item">
          <div className="todo-list-col-left">
            <input checked={this.state.done}
                   className="todo-item__done" 
                   onChange={this.handleDoneChanged}
                   title="Done?"
                   type="checkbox" /> 
            <label className={classNames({
              'todo-item__label': !this.state.done,
              'todo-item__label--done': this.state.done})}>
              {this.state.description}
            </label>
          </div>
          <div className="todo-list-col-right">
            <button className="todo-item__action">Edit</button>
            <button className="todo-item__action--last"
                    onClick={this.handleDeleteClicked}>
              Delete
            </button>
          </div>
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoListItemComponent;