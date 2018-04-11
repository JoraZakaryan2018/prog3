class Grass extends LivingCreature {


    constructor(x, y,hivand,timehiv) {
        super(x, y);
        this.multiply = 0;
        this.hivand = false;
        this.timehiv = 5;
    
    }
    // hivandanal(){
    //     for (var i in hivandArr) {
    //         if (this.y == hivandArr[i].y && this.x == hivandArr[i].x) {
    //             this.hivand = true;
                                           
    //         }
    //     }
    // }
    bazmanal() {
        if(this.hivand == false){
        this.multiply++;
        
        }
        else if(this.hivand == true){
            this.multiply =0;
            this.timehiv--;
            if(this.timehiv <=0){
                this.hivand =false;
                this.timehiv =0;
                console.log("ancav");
            }
           
        }
       
        
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak && this.multiply >= 1) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}


