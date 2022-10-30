

export default {
  name:"person",
  title:"吃披萨大师",
  type:"document",
  icon:()=>`🧑`,
  fields:[
   { 
    name:"name",
    title:"名字",
    type:"string",
    description:"名字"
  },
  {
    name:"slug",
    title:"Slug",
    type:"slug",
    options:{
      source:'name', //根据名字字段 动态生成  中文暂不支持
      maxLength:100
    }
  },
  {
    name:"description",
    title:"描述",
    type:"text",
    description:"自我介绍"
  },
  {
    name:"image",
    title:"图片",
    type:"image",
    options:{
      hotspot:true
    }
  },
],
}