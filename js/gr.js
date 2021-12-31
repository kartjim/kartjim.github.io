var apiURL ="https://api.github.com/repos/can-dy-jack/hexo-theme-delicate/commits?per_page=5&sha=";

const app = Vue.createApp({
    data(){
        return{
            branches: ['master','gh-pages'],
            currentBranch: 'master',
            message: null,
        }
    },
    methods: {
        fecthData: function(){ // ajax,获取api数据
            let xhr = new XMLHttpRequest();
            var self = this; // 保存this，避免函数内的this指向错误
            xhr.open('GET',apiURL + this.currentBranch);
            xhr.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    self.message = JSON.parse(xhr.responseText);
                }
            }
            xhr.send();
        },
        formatData: function(m){
            let message = m.replace(/-\s\[x\]/g,' & ');
            return message;
        },
        formateDate: function(s){
            return s.slice(0,10);
        }
    },
    created: function() {
        this.fecthData();
    },
    watch: {
        currentBranch: "fecthData"
    }
}).mount('#demo')

