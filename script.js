function printForecast(arr)
{
    for(let i=0 ; i<arr.length ; i++)
    {
        console.log(`${arr[i]} in ${i+1} days... `);
    }
}
const arr = [17 , 21 , 23];
printForecast(arr);