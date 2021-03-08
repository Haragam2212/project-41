class Umbrella{
    constructor(x,y) {
        var options = {

            isStatic: true
        }
        this.body=bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.body);
        this.body=addImage(iu1)
    }

}