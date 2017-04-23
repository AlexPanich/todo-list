import { connect } from 'react-redux';

import { toggleTodo, removeTodo, editTodo, checkAll} from '../actions/todo';
import { getSearchedTodos } from '../selectors/todo';

import TodoList from '../components/TodoList';

function mapStateToProps(state) {
    return {
        todos: getSearchedTodos(state)
    };
}

const mapDispatchToProps =  ({
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo,
    onEditTodo: editTodo,
    onCheckAll: checkAll
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
