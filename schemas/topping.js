export default {
  name:"topping",
  title:"Topping",
  type:"document",
  icon:()=>`🌶️`,
  fields:[
   { 
    name:"name",
    title:"配料名字",
    type:"string",
    description:"配料的名字"
  },
  {
    name:"vegetarian",
    title:"素食",
    type:"boolean",
    description:"topping 是否是素食",
    options:{
      layout:"checkbox"
    }
  
  }
],
preview:{
  select:{
    name:"name",//左边的名称是给prepare里面的fields用的
    vegetarian:"vegetarian",
  },
  prepare:(fields)=>({
    title:`${fields.name} ${fields.vegetarian ? '🌱' : ''}`,
  })
}
}