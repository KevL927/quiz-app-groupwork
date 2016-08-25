$(document).ready(function(){

  var questionAndAnswer1 = {
    question: 'Who wrote most of the New Testament',
    multipleChoice: ['Esther','Luke','John','Paul'],
    answer: 'Paul'
  }

  var questionAndAnswer2 = {
    question: 'Who was crucified on the cross upside down because he felt unworthy to be crucified in the way that the Jesus Christ has been?',
    multipleChoice: ['Solomon','Moses','Luke','Peter'],
    answer: 'Peter'
  }

  var questionAndAnswer3 = {
    question: 'Who was the person that married a Gentile and saved the Jews from persecution?',
    multipleChoice: ['Goliath','Esther','Job','Isaiah'],
    answer: 'Esther'
  }

  var questionAndAnswer4 = {
    question: 'What did Jesus Christ say was the second greatest commandment?',
    multipleChoice: ['"You shall love your neighbor as yourself."', '"You shall not steal"', '"You shall not bear false witness against thy neighbor"','"Honor your father and your mother"'],
    answer: '"You shall love your neighbor as yourself."'
  }

  var questionAndAnswer5 = {
    question: 'How many Apostles were chosen by Jesus Christ?',
    multipleChoice: [10,11,5,4,1],
    answer: 12
  }

  var questionAndAnswer6 = {
    question: 'Who prayed for wisdom instead of long life, riches or the life of his enemy?',
    multipleChoice: ['Abraham','Aaron','Solomon','Barnabas'],
    answer: 'Solomon'
  }

  var questionAndAnswer7 = {
    question: 'Amongst the Apostles, who was known to be a physician?',
    multipleChoice: ['Luke','Hannah','Simon','Thomas'],
    answer: 'Luke'
  }

  var questionAndAnswer8 = {
    question: 'Who had Saul as his birth name? ',
    multipleChoice: ['Timothy','Philip','Stephen','Paul'],
    answer: 'Paul'
  }

  var questionAndAnswer9 = {
    question: 'Who was sold as a slave and later ended up reuniting with his family, saving a nation from starvation?',
    multipleChoice: ['Sarah','Joseph','Abraham','Mark'],
    answer: 'Joseph'
  }

  var questionAndAnswer10 = {
    question: 'On which day did God create the sky?',
    multipleChoice: [1,6,7,2],
    answer: 2
  }

  var questions = [questionAndAnswer1, questionAndAnswer2, questionAndAnswer3, questionAndAnswer4, questionAndAnswer5, questionAndAnswer6, questionAndAnswer7, questionAndAnswer8, questionAndAnswer9, questionAndAnswer10];

  $('.start-button').click(function(event){
    event.preventDefault();
    $('#welcome-screen').hide();
    $('#question-answer-box').show();
    $('#correct-incorrect-status').show();
    $('#question-view').show();
    $('#answer-view').show();
    $('#question-status').show();

    shuffleArray(questions);
   
  });

  function shuffleArray(arr){
    shuffledArr = arr.sort(function(){return Math.round(Math.random());});
    questionReceiver(shuffledArr);
  }

  function questionReceiver(questionSet) {
    populateQuesAndAns(questionSet.shift());
  }

  function populateQuesAndAns(eachQuestion) {
   
    $('#question-view').text(eachQuestion.question);
    for(var i = 0; i < eachQuestion.multipleChoice.length; i++) {
      $('.choice' + i).text(eachQuestion.multipleChoice[i]);
    }
    
  }


});