class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput();
    this.input2 = createInput();
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');


    this.text1 = createElement('t1')
    this.text2 = createElement('t2')
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){

    this.text1.html("Write your name")
    this.text1.position(160,230)
    this.text2.html("Write your answer here")
    this.text2.position(360,230)

    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 50);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 320);
    this.button2.position(360, 320);

    this.button.mousePressed(()=>{
      this.text1.hide();
      this.text2.hide();
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.text1.mousePressed(()=>{
      this.text1.hide();
    })

    this.text2.mousePressed(()=>{
      this.text2.hide();
    })

    this.input2.mousePressed(()=>{
      this.text2.hide();
    })

    this.input1.mousePressed(()=>{
      this.text1.hide();
    })

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
