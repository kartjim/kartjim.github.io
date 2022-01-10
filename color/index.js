const app = Vue.createApp({
    data(){
        return{
            colors: [
                {id:0, backgroundColor: 'red', name: '红',color: '#fff'},
                {id:1, backgroundColor: 'orange', name: '橙',color: '#121212'},
                {id:2, backgroundColor: 'yellow', name: '黄',color: '#121212'},
                {id:3, backgroundColor: 'green', name: '绿',color: '#fff'},
                {id:4, backgroundColor: 'cyan', name: '青',color: '#121212'},
                {id:5, backgroundColor: 'blue', name: '蓝',color: '#fff'},
                {id:6, backgroundColor: 'purple', name: '紫',color: '#fff'},
                {id:7, backgroundColor: '#ffffff', name: '精白',color: '#121212'},
                {id:8, backgroundColor: '#e9e7ef', name: '银白',color: '#121212'},
                {id:9, backgroundColor: '#f0f0f4', name: '铅白',color: '#121212'},
                {id:10, backgroundColor: '#e9f1f6', name: '霜色',color: '#121212'},
                {id:11, backgroundColor: '#f0fcff', name: '雪白',color: '#121212'},
                {id:12, backgroundColor: '#e3f9fd', name: '莹白',color: '#121212'},
                {id:13, backgroundColor: '#d6ecf0', name: '月白',color: '#121212'},
                {id:14, backgroundColor: '#fffbf0', name: '象牙白',color: '#121212'},
                {id:15, backgroundColor: '#f2ecde', name: '缟',color: '#121212'},
                {id:16, backgroundColor: '#fcefe8', name: '鱼肚白',color: '#121212'},
                {id:17, backgroundColor: '#fff2df', name: '白粉',color: '#121212'},
                {id:18, backgroundColor: '#f3f9f1', name: '荼白',color: '#121212'},
                {id:19, backgroundColor: '#e0eee8', name: '鸭卵青',color: '#121212'},
            ]
        }
    },
    methods: {
        rightClick: function(){
            console.table(this.colors);
        }
    },
})

app.mount('#app');


const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click',function(){
        if(card.childNodes.length == 1 ){
            navigator.clipboard
                .writeText(this.innerText)
                .then(()=>{
                    const div = document.createElement('div');
                    div.className = 'tooltip';
                    div.innerText = '复制成功!';
                    div.style.fontWeight = 'bold';
                    card.appendChild(div);
                })
        }else{
            card.childNodes[1].style.animation = 'none';
            setTimeout(() => {
                card.childNodes[1].style.animation = 'tooltipDis 1s ease-in-out forwards';
            }, 200);
            navigator.clipboard.writeText((card.innerText.replace('复制成功'),''));
        }
    })
})
