# Additional Ziro projects

## Electromagnetic fields

See [video](https://simontiger.com/electromagnetic-field).
Can this be without “integrating something like p5.js in ZS to support things beyond rigid body physics”?

## Fractals

3D fractal tree with cylinders or cones
•	Without gravity
•	With gravity and hinges
•	Interaction to change shape

## Mazes

Classic wooden [labyrinth game](https://www.amazon.com/Wooden-Labyrinth-Years-Balance-Adults/dp/B08FJCRQ19) 
needs a way to create holes in a surface. See https://zirostudio.com/studio?code=Z7vLoscHlLetNCo.

## Orbital motion

+ Spaceship launch into orbit around the earth
+ Spaceship voyage around the moon
+ spaceship rendezvous while in orbit

See the lunar lander game and https://cs.dartmouth.edu/~wjarosz/courses/cs1-sp21/lab02/.

## Pool table

A multi-body simulation of motion, collisions, and friction.  It would be much more striking if there was 
a way for users to manipulate a cue stick to set the balls in motion.

## Pong

Arrow keys for interaction

## Swarms  

There are now two versions of the JavaScript/p5js [wobbly swarm](https://openprocessing.org/sketch/492096/).
The more successful version moves objects using set_position; the code for this version is closest to the 
JavaScript/p5js code.  The less successful version moves objects with set_velocity.  Its greater use of 
physics seems to be a hindrance rather than a help.

Coding is underway for the behaviors exhibited by the [tadpole swarm](https://editor.p5js.org/mtchl/sketches/Sk5a2iIOe)
and [flocking behavior](https://editor.p5js.org/p5/sketches/Hello_P5:_flocking) JavaScript/p5js demos.  These demos use 
a model of flocking behavior created by Craig Reynolds (see his [Boids](http://www.red3d.com/cwr), which unfortunately 
contains many outdated links) and an extended [discussion](https://natureofcode.com/book/chapter-6-autonomous-agents/)
in a book by Daniel Shiffman.  There is also a [book](https://www.amazon.com/dp/0262680939/) by Mitch Resnick on flocking 
behavior.

The flocking behavior simulations are optimized versions of the JavaScript/p5js demos.  They spend less time 
calculating distances between objects in a flock by avoiding recalculations and, where possible, use of the 
sqrt function.  They do not employ more sophisticated optimizations, such as limiting the search for nearby 
objects to those in the same region of space.

An enhanced version of these simulations would use cones instead of balls as objects in a swarm, and it would 
orient the cones to indicate the direction in which they were moving, thereby producing a simulation closer to 
hat in the tadpole swarm.

To do? Increase radius to 5 and use cor = 0 to avoid bounces after collisions.

## Vehicles

+ Bicycles, cars, wagons with rotating wheels (rotation shown by movement of spokes)
+ Square wheels
  + Short [video](https://www.youtube.com/watch?v=PfLz7haFvkk) from Texas A&M
  + Longer [video](https://www.youtube.com/watch?v=PfLz7haFvkk) with equation for ground from MoMath
  + [Slides](https://my.vanderbilt.edu/stacyfonstad/files/2011/10/squareWheels.pdf) with derivation of 
    equation y = sqrt(2) – cosh(x) for the ground
  + Try implementing the ground with zero-mass particles fixed to this catenary



