# Hangman type game with react


what I learned

--make paragraph a max width if you want it to wrap 

--margin top and bottom use margin-block: XXpx;

--lifting state up when necessary; heard mentioned many times but never had to do it. it's a little confusing but nothing to be 'scared' about!

--using the npm package clsx to render complex/compund class names

--making derived state out of existing state for keyboard component, much easier than making 2 more state instances!

--nested ternary as in the status component, it's ugly but works.

--helper function using if/else statement so you can return something in status component

--making keyboard "keys" buttons to get access to more accessibility options/screen reader

--lazy state initialization const [currentWord, setCurrentWord] = useState(() => getRandomWord())

--not making components too large, keep them to one task. i think i was scared to do that thinking jamming everything I could in would make it easier.

still to do
-fix the random word

-fix the styling on missing letters

-fix some of the general styling issues

-post this to LI mentioning all I'v learned, etc.

