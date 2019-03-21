let obj=[
    {
        id:1,
        value:false,
        mess:'Hello'
    },
    {
        id:2,
        value:true,
        mess:'shiv'
    },
    {
        id:3,
        value:true,
        mess:'Sachin'
    },
    {
        id:4,
        value:false,
        mess:'Sheela'
    }
]


let m=obj.filter(data=>data.value);
console.log(m);