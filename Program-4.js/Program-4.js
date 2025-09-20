function multiplies(){

    let a= (document.getElementById('a').value)
    let numbers=a.split(',')
    let mul={}

    for (let i = 1; i < 10; i++) {
        
        let count=0
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[j]%[i]==0){
                count=count+1
            }

            
        }
        mul[i]=count
        
    }
    document.getElementById('ans').innerText=JSON.stringify(mul)


}
