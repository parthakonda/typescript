class GetSet {
    constructor(private attr1?: string, private attr2?:string) {
    }

    get Attr1() {
      return this.attr1;  
    }

    set Attr1(value) {
        this.attr1 = value; 
    }
}

let gs = new GetSet();

gs.Attr1 = "string val";
console.log(gs.Attr1);