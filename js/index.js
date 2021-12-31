const listApp = Vue.createApp({
    data(){
        return{
            h2: 'Vue 学习项目列表',
            linkList: [
                {id: 0, title: 'vue-markdown编辑器', link: './pages/markdown.html'},
                {id: 1, title: 'github-repo API', link: './pages/github-repo.html'},
                {id: 2, title: 'TodoList', link: './todo/todoList.html'}
            ]
        }
    }
})

listApp.mount('#list');
