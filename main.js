function calculation(){

    this.demoAsync=async function(value1,value2){
        return await new Promise((resolve)=>{
            
            let sum=value1 + value2;
            return resolve(sum);

        });
    }

}

function main(){

    this.funcCall=async function(value1,value2){

        let calculationObj=new calculation();
        let sum=await calculationObj.demoAsync(value1,value2);

        console.log(sum);

    }

    this.funcCall1=async function(value1,value2)
    {
        let calculationObj=new calculation();
        let sum=await calculationObj.demoAsync(value1,value2);

        return sum;
    }

}

let mainObj=new main();
    mainObj
    .funcCall(2,2)
    .then(x=> x);

    mainObj
    .funcCall1(3,5)
    .then((x)=> console.log(x));



class test {

    async demo(){
        return await new Promise((resolve)=>{

            return resolve(console.log("Test Done"));
        });
    }

}

let testObj=new test();
    testObj.demo().then((x)=>x);