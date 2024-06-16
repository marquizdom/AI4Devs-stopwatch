// ChatGPT 4o

Act as a senior full-stack programmer.

I would like you to create a javascript-based web with a stopwatch and count down. Take your time and pay attention to all the requirements and also to the global considerations.

** REQUIREMENTS

SELECTION SCREEN:
- Functionality:
a) The website should first show two icons/button to select between stopwatch and countdown functionalities.
b) Once clicked, it will redirect to the selected functionality.
- Design:
a) Add a title in top of the site "Stopwatch & Countdown" and a subtitle "Javier Cubelos"
a) Add a big button in green with an upper arrow and the word "STOPWATCH" and another one of the same size in red with a lower arrow and the word "COUNTDOWN".

STOPWATCH SCREEN:
- Functionality:
a) The stopwatch should start/pause/stop when clicking the associated button, and show the time in a display in top of the the buttons.
b) In addition, there is also the possibility to pause and stop the countdown, and to go back to the selection screen.
- Design:
a) Show a new title "Stopwatch" in green and bold.
b) The time is shown in a display box, with a black border around it. The display shows in top the time in the HH:MM:SS format, and below the miliseconds in a smaller font size.
c) Below the display, there are also four centered buttons: the buttons to start/pause/stop the watch in green, yellow and red, and a last button in grey to go back to the selection screen.

COUNTDOWN SCREEN:
- Functionality:
a) The user has to fill in the initial value of the countdown display HH:MM:SS numbers, clicking in the numbers from 0 to 9 that show in the grid. Pay attention as, for instance, 00:01:23 (1 minute and 23 seconds) will be the displayed value if the user has clicked in the 1, 2 and 3 numbers in this order (not 00:02:03!). The user fills in the HH:MM:SS numbers, not the miliseconds that start always at 000.
b) The countdown should start once a initial time is selected and when clicking the start button. It also shows the miliseconds in the countdown. Be aware that we follow the HH:MM:SS format and, for instance, after 00:01:00 and 000 miliseconds; the next number to show in the countdown would be 00:00:59 and 999 miliseconds.
c) In addition, there is also the possibility to pause and stop the countdown, and to go back to the selection screen.
- Design:
a) Show a new title "Countdown" in red and bold.
b) The time is shown in a display box, with a black border around it. The display shows in top the time in the HH:MM:SS format, and below the miliseconds in a smaller font size.
c) The grid of selected numbers (from 0 to 9) for the initial value of the coundown is shown below.
d) Below the display, there are also four centered buttons: the buttons to start/pause/stop the watch in green, yellow and red, and a last button in grey to go back to the selection screen.

** CONSIDERATIONS
- The js logic, css and html should each be in a unique file (script.js, styles.css and index.html).
- Use good practices.
- Add some tests and comments to the code.
- Make it responsive and compatible with all browsers.
- Feel free to use bootstrap for css. Make the whole web with a modern and beautiful design.