var React = require('react');
var Backbone = require('backbone');
var ReactBackbone = require('react.backbone');
var classNames = require('classnames');

var ToDoListItemComponent = React.createFactory(
  React.createBackboneClass({
    getInitialState: function() {
      return {
        description: this.props.toDoItem.get('description'),
        done: this.props.toDoItem.get('done'),
        edit: false,
        updatedDescription: this.props.toDoItem.get('description'),
        view: true
      };
    },

    handleCancelClicked: function() {
      this.setState({
        edit: false,
        view: true,
        updatedDescription: this.state.description
      });
    },

    handleDeleteClicked: function() {
      this.props.toDoItem.destroy();
    },

    handleDescriptionChanged: function(e) {
      this.setState({
        updatedDescription: e.target.value
      });
    },

    handleDescriptionKeyDown: function(e) {
      if (e.which !== 13) {
        return;
      }

      this.updateItem();
    },

    handleEditClicked: function() {
      this.setState({
        edit: true,
        updatedDescription: this.state.description,
        view: false
      });
    },

    handleDoneChanged: function(e) {
      this.setState({
        done: e.target.checked
      });
      this.props.toDoItem.save({
        'done': e.target.checked
      });
    },

    handleSaveClicked: function() {
      this.updateItem();
    },

    updateItem: function() {
      if (this.state.updatedDescription) {
        this.props.toDoItem.save({
          'description': this.state.updatedDescription
        });
        this.setState({
          edit: false,
          description: this.state.updatedDescription,
          view: true
        });
      }
    },

    render: function() {
      /* beautify ignore:start */
      return (
        <div className={classNames({
          'todo-item--edit': this.state.edit,
          'todo-item--view': this.state.view })}>
          <div className="todo-item__view">
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
              <button className="todo-item__action"
                      onClick={this.handleEditClicked}>
                  Edit
              </button>
              <button className="todo-item__action--last"
                      onClick={this.handleDeleteClicked}>
                Delete
              </button>
            </div>
          </div>
          <div className="todo-item__edit">
            <div className="todo-list-col-left">
              <input className="todo-item__edit__input" 
                     onChange={this.handleDescriptionChanged}
                     onKeyDown={this.handleDescriptionKeyDown}
                     type="text" 
                     value={this.state.updatedDescription}/>
            </div>
            <div className="todo-list-col-right">
              <button className="todo-item__action"
                      onClick={this.handleSaveClicked}>
                Save
              </button>
              <button className="todo-item__action--last"
                      onClick={this.handleCancelClicked}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoListItemComponent;