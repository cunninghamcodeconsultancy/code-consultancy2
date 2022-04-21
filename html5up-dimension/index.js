
//console.log('hello world')
//const circle = {
//radius: 1,
//location: {
  //  x: 1,
    //y: 1
//},
//draw: function() {
  //  console.log('draw');
//}
//};
//circle.draw();
// Factory Function
   // function createCircle (radius) {
     //   return {
       //     radius: radius,
         //   draw: function() {
           //     console.log('Draw')
            //}
        //}

    //const circle = createCircle(1);
    //circle.draw();
    // Constructor Function
    //function Circle(radius) {
     //   this.radius = radius;
       // this.draw = function() {
         //   console.log('draw')
        //}
    //}
    //const another = new Circle(1);
    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw')
        }
    }
