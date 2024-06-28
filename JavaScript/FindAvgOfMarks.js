let marks=[85,97,44,37,76,60];
let sum=0,avg=0;
for(let i=0;i<marks.length;i++)
    {
        sum=sum+marks[i];
    }
avg=sum/marks.length;
console.log("Average of marks  is : ",avg);