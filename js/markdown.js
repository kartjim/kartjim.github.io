const app = Vue.createApp({
    data() {
        return {
            input: `
# 标题
## 标题
### 标题
#### 标题

---
文本样式

**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~  ~划线~
> 引用文本

* 列表
* 列表
* 列表


- 项目
* 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

---
链接和图片
[link-delicate](http://localhost:4000/delicate)

![测试-付款码](https://i.loli.net/2021/12/01/X1pkv9ShmeDWZ25.jpg)

---
表格

| Column 1 | Column 2      |
|:--------:| -------------:|
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
---
            `
        }
    },
    computed: {
        compiledMarkdown() {
            return marked(this.input, {
                sanitize: true
            });
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value;
        }, 300)
    }
})

app.mount('#editor');