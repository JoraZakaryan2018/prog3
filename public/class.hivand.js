class Hivand extends LivingCreature {


    constructor(x, y) {
        super(x, y);
        this.multiply = 0;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {

        this.stanalNorKordinatner();
        var norVandak1 = random(this.yntrelVandak(1));
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak3 = random(this.yntrelVandak(7));


        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 6;

        } else if (norVandak1) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 6;
            for (var i in grassArr) {
                if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x) {
                    grassArr[i].hivand = true;
                    
                   
            //          if(grassArr[i].timehiv <=0){
            //      grassArr[i].hivand = false;
            //     grassArr[i].timehiv = 0;
            //     console.log("ancav");

            //  }
                }
            }
        }



        else if (norVandak3) {
            matrix[this.y][this.x] = 7;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 6;

        }

    }
    hivandanal() {
        // for (var i in grassArr) {
        //     if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
        //         grassArr[i].hivand = true;
        //     }
        //     //  if(grassArr[i].timehiv >=0){
        //     //     grassArr[i].hivand ==false;
        //     //     grassArr[i].timehiv =0;
        //     //     console.log("ancav");

        //     //  }
        // }
    }
}


