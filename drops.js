class Drops{
    constructor(x,y) {
        var options = {
            
            friction : 0.1
        }
        this.body=bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.body);
    }

}