# Ziro Studio

## Tips

Using Ziro without physics:

+ Remove the ground with _ground.remove()_.
+ Set the mass of immovable objects to 0.
+ Set the mass of movable objects to 1.

Using Ziro with physics:

+ To stop motion, set an object's velocity and angular velocity both to 0.
+ The coefficient of resistance, cor, should be 0 to suppress bouncing and 1 to maximize bounciness.

## Additional documentation

Documentation would be useful for the effects of friction, force, torque, and impulse.  They seem less obvious than the effect of gravity.  See https://www.differencebetween.com/difference-between-impulse-and-vs-force/. 

Documentation would also be useful for the details of rotating and scaling shapes.  What role does the vector (xr, yr, zr) play in setting the orientation?  Are angles measured in degrees or radians?

## Suggestions

### Python

Make _import_ work with user-created libraries.

### Program editing and development

Do a better job with autofill (or provide a way to turn it off) particularly in comments.

Provide tools (like those in Microsoft Word) for finding and replacing text in a program.

Provide a tool to clean up indentation.  This may be difficult in Python,  but users shouldn't have to reset indentation manually for each line of code cut  and pasted into s program.

Put line numbers in all error messages.  _Error: name 'x' is not defined_ does not say where _x_ is used.  I had to copy the entire program into Visual Studio Code and use it to find all occurrences of _x_.

Provide a debugger for inserting breakpoints and single stepping through code.  It’s much too laborious to debug by inserting print statements in a program, and the console won’t hold much text without _Cleared terminal: output too large_ appearing there.  

Provide a way to print information about objects.  Now one must print snippets extracted from objects instead of printing the whole object with _str(obj)_, which produces more output than the console will hold.  

It would be good to have something along the lines of, but with fewer features than, the Python debugger in Visual Studio Code or the JavaScript debuggers in most browsers.

### Console

Add a zoom control.

Have the console clear the terminal less often.

Clear the console after each run of a program (so that an error message does not persist after the error has been fixed).

### User interface

Improve the titles for tabs.  When users go to zirostudio.com, they get a browser tab with _Ziro Studio Dashboard_ as its title.  This is good.  When they select a project, they get a new browser tab with _Ziro Studio_ as its title.  This title should contain the name of the project (to distinguish this tab from others that contain other projects).  When users click the _Info_ button, they get a new browser tab with the name of the project as its title.  Confusingly, the title of this tab remains the same when they click an item in its dashboard to show a list of projects.  It would be better if the title of the tab changed back to _Ziro Studio Dashboard_ since the project named in the title is no longer in view.

Allow characters like parentheses and apostrophes in project names.

Provide an icon for navigating to the dashboard from the program editor.

Have _Share_  lead to a menu of sharing options, such as copying the link to the clipboard, emailing it, or posting it on social media. 

Allow _Info_ pages to contain a link to a user-provided web page with information about the project.

Expand the search facility to let users find community projects that have the keyword in their code and not just in their descriptions.  That way users could find projects that illustrate how to use various features in Python or in Ziro.

Make the pop-up dialog for creating a project easier to read.  The font is too small, and the light gray color for text entered in the dialog is hard to read.  One solution would be to allow users to enlarge the pop-up.

Fix layout problems.

+ The toolbar above the code can disappear from the screen.  It reappears if users zoom out with the browser, but then they must use the toolbar to zoom in again to read their code.
+ Fix placement issues when zooming in or out of a program’s text.  When zooming in, the virtual world remains in place and can end up overlapping the program.  

Balance the placement of program text with placement of the virtual world, console, and graph, which are often surrounded by blank space.  Users should not have to adjust line wrapping in the program text when there is enough room to move the virtual world out of the way.  Floats in CSS and containers in single-page-application frameworks like Angular and React make it easy for this to happen automatically.

Have the editor save periodic checkpoints.  When users duplicate a project (using copy and paste), either to retain a working version while trying out changes or making a new project,they can lose track of which copy they are editing and lose their edits when they close the wrong tab.  The can also lose edits because of power failures.

Provide appropriate warnings when users close a tab.  Users tend to ignore warnings that appear frequently when they are not needed.  The warning

    This page is asking you to confirm that you want to leave — information you’ve entered may not be saved.

appears both when users modify a program and when they simply run it without making any modifications.  

Put deleted projects into a trashcan instead of throwing them away.

Allow users to save a copy of another user's project.  Currently Ziro says that they are not authorized to save the copy.

Keep Google authentication from timing out users so soon.  Users can recover from a time out in one tab by logging into a separate tab, but this is a nuisance.

### Shapes

Provide additional shapes (e.g., ellipsoids and trapezoidal prisms).  Allow images to be imported as shapes.

Provide additional transformations (e.g., shearing).

Provide more complicated smart shapes using meshes (i.e., triangulated surfaces).  Allow surfaces to be illuminated and shaded to make them more realistic.  These capabilities appear to be present in p5.js.

Provide a way for displaying text in the virtual world.

### Robots vs. shapes

Differences in how robots and shapes are treated create confusion by imposing different requirements for using a _Ball_ to traverse a maze than for using a _Robot_.  One can set the orientation of a smart shape, but must turn a _Robot_: it has _get_angle()_ as a method, but not _set_angle()_.  Users write 20-line definitions of functions like _move_bot(d)_ to get it to move in the desired direction.  There should be something simple like _bot.set_angle(90)_ (although angles may not be so simple in three dimensions.) Finally, it’s confusing to have to use different commands for turning and moving, and also to need a _sleep()_ statement to move a _Ball_, but not a _Robot_, out of the maze.

Raja will add _set_ functions for the robot to Ziro's to-do list

### Interaction

Add features that support user interaction.  Here are some ideas for mouse-based interaction.

+ Treat the 2D position of the mouse on the screen as a point in the virtual world lying on a plane through the camera's position and perpendicular to the camera's line of sight.

+ Establish a convention to handle an annoying rotational degree of freedom in defining what is “up” on that plane.  What's “up” is clear if the camera’s line of sight is perpendicular to the _xy_, _xz_, or _yz_ planes because it’s clear what's “up” on those planes. I need to think more about what’s “up" in other circumstances.

+ Define the viewer's line-of-sight in the 3D virtual world as a line connecting the mouse's position on this plane to where the camera is aimed.

+ Provide a function _line_of_sight()_ that returns a list of the smart shapes on the viewer's line of sight.

+ In the absence of an event loop, that function can be used along with is_key_pressed(x) to poll for user interaction.

+ Provide smart shapes with two functions, _set_container(obj_) and _get_container()_, to establish a containment hierarchy between objects constructed from smart shapes and the smart shapes they contain.

+ Users can extend this containment hierarchy to instances of classes that produced drawings in the visual world (such as _Tree_ and _Snowman_ in the _Christmas Celebration_ project) by defining _set_container(obj)_ and _get_container()_ for these classes. 

+ Provide functions _is_mouse_up()_ and _is_mouse_down()_ so that a program can detect when mouse clicks occur, identify the objects in the viewer's line of sight, and delegate how mouse clicks are handled to those objects.

Provide smart shapes (or class definitions) for controls such as buttons, text entry, and sliders.  Such controls are readily available for programs written using a combination of HTML and JavaScript.  They let users adjust parameters in a physics experiment at run time rather than forcing them to modify code and run the experiment again.

### Events

Provide an event mechanism similar to those in Python, Pythonista, and PyGame.

Treat key presses, mouse clicks, and mouse movement as events.

Event-driven systems delegate handling events to methods attached to objects. They also have a notion of object containment and allow events to bubble up the object hierarchy, or to be directed to other objects.

## Compiler problems

This sample program prints _Hello World_ when run from the command line but no output when run in Ziro.

    class Hello:
        def __init__(self):
            self.text = self.create()
        def create(self):
            return 'Hello World'
    print(Hello().text)

Ziro fails because the constructor for the class invokes a method in the class.  It produces the error message _Error: 'coroutine' object has no attribute 'walls'_ for the following code.

    class Maze:
        def __init__(self, width, height) :
            …
            #cell = self.cellAt(a, height - 1)
            cell = self.grid[a][height-1]
            # The next line produces the error message with the method call, but not with the in-line code  
            cell.walls[N] = Wall(cell.x, cell.y + cellSize, True)
        def cellAt(self, a, b):
            return self.grid[a][b]

This message is incomprehensible when a program had no coroutines (that is, no async io and no generators).  In any case, it is misleading.

A work-around for the problem is to in-line code.  Raja says they have found a way to fix this problem.

The Maze project failed when it defined _Wall_ as a function that returned a _Box_.  It worked when it defined _Wall_ as a class.

These problems are caused by the way Ziro preprocesses code before compiling it with Brython, which doesn't support event loops.  Ziro converts everything into _async_ to make the _sleep_ function (which is key to simulation) work. 
