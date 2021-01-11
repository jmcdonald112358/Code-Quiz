# Code-Quiz
This is the Code Quiz project for Homework 4. The project involved creating a functional quiz of web development fundamentals entirely from scratch, utilizing DOM manipulation to change content on the page. 

While progressing through an education in web development, it's important to be quizzed regularly on the fundamentals to ensure that content is drilled in as deep as possible. A quiz game is a perfect tool for this, as it presents the questions and answers in an easy format, and encourages rapid memory recall by adding gamification to the scoring methodology. 

This quiz accomplishes this by giving a set amount of time per question presented, and penalizing 2/3 of the time per question when the question is answered incorrectly. This encourages the quiz taker to think quickly and accurately. Users are able to save their score to a scoreboard to see how they compare to their peers, and are allowed to retake the quiz as many times as they'd like. 

## Application usage

1. Navigate to the quiz
2. Click to begin quiz
//image of main page
3. Answer the questions as they are presented by clicking the choice you determine to be the correct answer
4. If your selection is correct, the next question will be shown without a score penalty
5. If your selection is incorrect, a 10 second penalty will be applied, and then the next question will be presented
6. Once all questions have been answered, your final score is shown and you will have the option to save your score to the scoreboard or try again
//Image of the submit score page
7. To see how you compare to your peers, view the scoreboard by clicking to view the highscores in the main header
//Image of header link
8. Alternatively, you will automatically be shown the scoreboard upon submitting your score
9. While viewing the scoreboard, the scores can be cleared to reset the challenge
//Image of scoreboard and reset scores button

## Elements used in this project

1. No starter code was provided -- all elements have been generated from scratch
2. Bootstrap was used for all styling 
   1. Navbar
   2. Cards
   3. List-group buttons
   4. Tables
   5. Form fields
3. jQuery was used for all functional components
   1. Element selectors
   2. Set attributes
   3. Set classes


## Resources

1. References to class activities, including:
   1. Week 4 activity 9 (speed reader)
   2. Week 4 activity 23 (local storage objects)
   3. Week 5 activity 11 (fridge game)
2. Class TAs
3. Classmates
4. api.jquery.com
5. getbootstrap.com/docs
6. MDN for JavaScript
7. Stackoverflow

## Links

- Project: 
- Repository: 

## Additional notes

- There is one outstanding issue I have not been able to resolve, which is reflected in the index.html file at line 33. I cannot seem to get the toggle button to work on small screens for expanding the navbar to show the link to the highscores page. Everything in the code lines up with documentation from getbootstrap.com/docs, but when the toggle button is clicked, nothing happens (not even a console error). 
   - I intend to inquire with a TA resource before or after class on 11-Jan-21 to see if they can assist in figuring out what the issue might be