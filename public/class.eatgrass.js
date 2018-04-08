class Xotaker extends LivingCreature {
    constructor(x, y, energy) {
        super(x, y);
        this.energy = energy;
        this.mahxot = 0;
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
        var norVandak2 = random(this.yntrelVandak(0));
        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahxot = 0;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak1 = random(this.yntrelVandak(1));

        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 2;

            for (var i in grassArr) {
                if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x)
                    grassArr.splice(i, 1);

            }
            this.energy = 5;
            this.mahxot++;
        }

        else {
            this.sharjvel();
        }
    }

    bazmanal() {

        this.stanalNorKordinatner();

        var norVandak1 = random(this.yntrelVandak(0));

        if (norVandak1 && this.mahxot >= 5) {
            var norXotaker1 = new Xotaker(norVandak1[0], norVandak1[1]);
            xotakerArr.push(norXotaker1);
            matrix[norVandak1[1]][norVandak1[0]] = 2;
            this.mahxot = 0;
        }
    }
    mahanal() {

        for (var i in xotakerArr) {
            if (xotakerArr[i].energy <= 0) {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);

            }
        }
    }
}