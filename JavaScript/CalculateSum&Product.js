let n=prompt("Enter the number");
let arr=[];
for(let i=1;i<n;i++)
    {
        arr[i-1]=i;
    }
    console.log(arr);
    let add=arr.reduce((result,current)=>{
        return result+current;
    })
    console.log(`Addition of array is : ${add}`);
    let product=arr.reduce((result,current)=>
    {
        return result*current;
    })
    console.log(`Product of array is : ${product}`);