/**
 * Created by simonbeelocal on 02/04/2017.
 * Something new
 */

function Branch(generation, dirn, goRight){
    this.swaySpeed = random(0.05,0.1);
    this.sway = 0;
    this.children=[];
    this.dirn = dirn.copy();
    this.dirn.rotate(goRight ? random(0, PI/6) : -random(0, PI/6));
    this.dirn.mult(random(0.7,0.9));

    if (generation < 10){
        this.children[0] = new Branch(++generation, this.dirn, true);
        this.children[1] = new Branch(generation, this.dirn, false);
    }

    this.show = function(branchStart){
        this.sway += this.swaySpeed;
        stroke(255);
        strokeWeight(this.dirn.mag() *0.1);
        var newDirn =  this.dirn.copy();
        newDirn.rotate(Math.sin(this.sway)*0.1);
        var newEnd = p5.Vector.add(branchStart, newDirn);
        line(branchStart.x, branchStart.y, newEnd.x, newEnd.y);
        if (this.children[0] != undefined) {
            this.children[0].show(newEnd);
            this.children[1].show(newEnd);
        }
    }
    return this;
}
