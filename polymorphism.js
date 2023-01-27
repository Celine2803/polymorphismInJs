class Car{
    constructor(name){
        this.name=name;
    }
    drives(){
        console.log("The Car speed is good");
    }
}
class Train extends Car{
    drives(){
        console.log("The Train is also good");
    }
}

let train=new Train();
train.drives()