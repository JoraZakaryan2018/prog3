



class KerparS {
    constructor(x, y, energy) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy =0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.multiply++;
        this.energy++;
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak3 = random(this.yntrelVandak(1));

        if (norVandak2 || norVandak3) {
            if (norVandak2) {
                matrix[this.y][this.x] = 0;
                this.y = norVandak2[1];
                this.x = norVandak2[0];
                matrix[this.y][this.x] = 5;
            }
            if (norVandak3) {
                matrix[this.y][this.x] = 1;
                this.y = norVandak3[1];
                this.x = norVandak3[0];
                matrix[this.y][this.x] = 5;
            }
        }
    }
    bazmanal() {
        this.stanalNorKordinatner();

        var norVandak1 = random(this.yntrelVandak(0));
        var norVandak2 = random(this.yntrelVandak(1));
        var norVandak3 = random(this.yntrelVandak(1));

        if (norVandak1) {
            var norXotaker1 = new Grass(norVandak1[0], norVandak1[1]);
            grassArr.push(norXotaker1);
            matrix[norVandak1[1]][norVandak1[0]] = 1;

        }
       
        if (norVandak2) {
            var norXotaker1 = new Xotaker(norVandak2[0], norVandak2[1]);
            xotakerArr.push(norXotaker1);
            matrix[norVandak2[1]][norVandak2[0]] = 2;
        }

        if (norVandak3) {
            if (this.multiply >= 5) {
                var norXotaker1 = new Gishatich(norVandak3[0], norVandak3[1]);

                gishatichArr.push(norXotaker1);
                matrix[norVandak3[1]][norVandak3[0]] = 3;
                this.multiply = 0;
            }
        }
    }
  
    
}


