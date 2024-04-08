class Stack{
    constructor(){
        this.items=[];
    }
    add(element){
        return this.items.push(element);
    }
    remove(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty()
    {
        if(this.items.length===0)
        return true;
        else
        return false;
    }
    clear(){
        this.items= [];
    }
}
let stack=new Stack();
stack.add('a');
stack.add('b');
if(stack.isEmpty){
    console.log("Stack is empty");
}
else
{
    stack.remove();
}
console.log(stack.peek());
stack.clear();