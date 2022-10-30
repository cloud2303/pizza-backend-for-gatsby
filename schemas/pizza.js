
import PriceInput from "../components/PriceInput"
export default {
  name:"pizza",
  title:"Pizzas",
  type:"document",
  icon:()=>`🍕`,
  fields:[
   { 
    name:"name",
    title:"pizza 名字",
    type:"string",
    description:"pizza的名字"
  },
  {
    name:"slug",
    title:"Slug",
    type:"slug",
    options:{
      source:'name', //根据名字字段 动态生成  中文暂不支持
      maxLength:100
    }
  },{
    name:"image",
    title:"图片",
    type:"image",
    options:{
      hotspot:true
    },
    validation:(Rule)=>Rule.required()
  },
  {
    name:"price",
    title:"价格",
    type:"number",
    description:"pizza的价格",
    // inputComponent:PriceInput,
    validation:Rule=>Rule.min(1000)
  },
  {
    name:"toppings",
    title:"配料表",
    type:"array",
    of:[
      {type:'reference',to:[{type:'topping'}]}
    ]
  }
],
preview:{
  select:{
    title:"name",
    media:"image",
    toppings0:"toppings.0.name",
    toppings1:"toppings.1.name",
    toppings2:"toppings.2.name",
    toppings3:"toppings.3.name",
  },
  prepare:({title,media,...toppings})=>{
    return {title:`${title}`,
  media,subtitle:Object.values(toppings).filter(Boolean).join(",")}
  }
}
}