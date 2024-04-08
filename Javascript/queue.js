class Queue{
    constructor(){
        this.items=[];
        this.front=0;
        this.rear=0;
    }
    enqueue(item){
        this.items[rear]=item;
        this.rear++;
        return item+'inserted';
    }
    dequeue(){
        if (this.isEmpty()) {
            return 'Queue is empty' ;}
        else{
                const item=this.items[this.front]
                delete this.items[this.front]
                this.front++;
                return item;
            }
    }
    isEmpty(){
        return  this.front===this.rear?true:false;
    }
    

    peek(){
        if(!this.isEmpty()){
            return  items[this.front];
    }
        else
        {return "Queue is Empty"}
    }
}   
let queue = new Queue()
console.log(queue.enqueue(7));
console.log(queue.enqueue(8));
console.log(queue.dequeue());
console.log(queue.peek());
