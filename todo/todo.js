// console.warn('请注意，如果你的 web 浏览器设置为阻止第三方数据/Cookie，则不能正常使用，因为 localStorage 数据将无法保存。');

// localStorage
const STORAGE_KEY = "todos-0.0.1";
const todoStorage = {
    fetch() {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        todos.forEach((todo, index) => {
            todo.id = index;
        });
        // todoStorage.uid用于设置id
        todoStorage.uid = todos.length;
        return todos;
    },
    save(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};

// visibility filters
const filters = {
    all(todos) {
        return todos;
    },
    active(todos) {
        return todos.filter((todo) => !todo.completed);
    },
    completed(todos) {
        return todos.filter((todo) => todo.completed);
    }
}

var todoApp = Vue.createApp({
    data() {
        return {
            // 页首信息
            name: "Todo List",
            // 页脚信息
            footer: "Kart·Jim's TodoList site.",
            // 存放的todo事件（JSON）
            todos: todoStorage.fetch(),
            // 存放用户输入的新的todo事项
            newTodo: "",
            editedTodo: null,
            //visibility: "all"
        }
    },
    watch: {
        // 添加、删除、改变状态时都需要改变todos，所以放在监听事件里更好
        todos: {
            // 立即执行 handler()
            handler(todos) {
                todoStorage.save(todos);
            },
            // 监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，
            // 只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
            deep: true
        }
    },

    computed: {
        // 结合前面已定义的方法filters，计算已经完成的项目个数等
        // filteredTodos() {
        //     return filters[this.visibility](this.todos);
        // },
        remaining() {
            return filters.active(this.todos).length;
        },
        completedLength() {
            return filters.completed(this.todos).length;
        }
    },
    methods: {
        addTodo() {
            // newTodo不能为空，同时去掉前后空格之后也不能为空。
            var value = this.newTodo && this.newTodo.trim();
            // 如果newTodo为空，则直接返回，不进行后续操作，即不进行新建todo事件操作。
            if (!value) return;
            // 新建todo事件
            // 存放进todos - watch会监听todos，当todos变化时，会自动进行后续操作
            this.todos.push({
                id: todoStorage.uid++,
                title: value,
                completed: false
            });
            // 新建事件成功之后，需要把input上的内容清除
            this.newTodo = "";
        },
        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        removeCompleted() {
            this.todos = filters.active(this.todos);
        }
    },
})
todoApp.mount('#todo-app');