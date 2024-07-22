//------Arrow, this keywork and object----------

//this keyword is used to refering the current context
const user = {
    userName: "kunal",
    price: 199,

    welocomMsg : function(){
        console.log(`Welcome ${this.userName} to the website`)
    }

}

user.welocomMsg