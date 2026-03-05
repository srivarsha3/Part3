const obj=[
    {"name":"wipro",lastPrice:200,currPrice:250},
    {"name":"Deloitte",lastPrice:300,currPrice:390}
]
function calc(obj){
    console.log(obj.lastPrice)
    obj.growth=obj.currPrice-obj.lastPrice
    obj.perGrowth=(obj.growth*100)/obj.lastPrice
    console.log(obj)
}
calc(stock[0])
calc(stock[1])