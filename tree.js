/**
 * Created by simonbeelocal on 02/04/2017.
 */

new p5();

var root;
var children;
var leaves;


function restartTree(){
    children = [];
    leaves = [];
    root = [];
    root[0]= createVector(width/2, height);
    root[1]= createVector(width/2, height-50);
    var dirn = p5.Vector.sub(root[1],root[0]);
    this.children[0] = new Branch(0, dirn, true);
    this.children[1] = new Branch(0, dirn, false);
}

function setup() {
    createCanvas(400,400);
    restartTree();
}

function mousePressed() {
    restartTree();
}


function draw() {
    background(51);

    stroke(255);
    strokeWeight(5);
    line(root[0].x, root[0].y, root[1].x, root[1].y);

    this.children[0].show(root[1]);
    this.children[1].show(root[1]);
/*
    for (var i=0; i<leaves.length; i++){
        fill(0,255,100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y,8,8);
    }
*/
}


