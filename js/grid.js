const app = Vue.createApp({
    data(){
        return {
            mee1:[
                "绝对单位 - 百分比 - fr",
                "repeat()",
                "auto-fill",
                "minmax()",
                "auto",
                "可以设置网格线名称"
            ],
            h3: [
                "grid-template-columns grid-template-rows",
                "row-gap column-gap -> gap",
                "justify-items 属性,align-items 属性,place-items 属性",
                "justify-content 属性，align-content 属性，place-content 属性",
                "grid-auto-columns 属性，grid-auto-rows 属性",
                "grid-template 属性，grid 属性",
                "grid-column-start 属性，grid-column-end 属性，grid-row-start 属性，grid-row-end 属性",
                "grid-column 属性，grid-row 属性",
                "grid-area 属性",
                "justify-self 属性，align-self 属性，place-self 属性"
            ]
        }
    }
}).mount('#grid');