const questions=[
    {
        image: "jewelry.png",
        correct:5,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "guitar.png",
        correct:0,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "rent.png",
        correct:2,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "soap.png",
        correct:1,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "exhibition.png",
        correct:6,
        question:'Which advertisement is about ___?',
        options: [
          "free fine-tuning if you buy anything from the shop this week",
          "handmade organic skincare products",
          "finding a living space with immediate availability",
          "a place where you can purchase handcrafted ceramics",
          "unusual hobbies",
          "a discount for accessories",
          "a gathering where you can explore contemporary exhibitions",
          "an art gallery"
        ]
    }
]
const questionsContainer = document.getElementById("questions");

questions.forEach((q, index) => {
    const qNumber = index + 1;
    const div = document.createElement("div");

    div.className = "question" + (index === 0 ? " active" : "");
  
    div.innerHTML = `
      <img src="${q.image}" alt="question image" width="500px" style="margin-bottom: 20px;"><br/>
      <p style="font-weight: bold;">${q.question}</p>
      ${q.options.map((opt, i) => `
        <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}">
        <label for="q${qNumber}a${i+1}"> ${opt}</label><br>
      `).join("")}
    `;
  
    questionsContainer.appendChild(div);
  });
  const Questions = document.querySelectorAll('.question');
const nav = document.getElementById('taskNav');
const buttons = [];
let currentQuestion=0
    Questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.textContent = i + 1;
      btn.onclick = () => showQuestion(i);
      if (i === 0) btn.classList.add('active');
      nav.appendChild(btn);
      buttons.push(btn);
    });

    function showQuestion(index) {
      Questions.forEach(q => q.classList.remove('active'));
      Questions[index].classList.add('active');

      buttons.forEach(btn => btn.classList.remove('active'));
      buttons[index].classList.add('active');
      currentQuestion = index;
    }

    function checkAnswers() {
      let score = 0;
      const tryAgainButton = document.getElementById('again');
      tryAgainButton.style.display = 'block';
      
      Questions.forEach((q, i) => {
        const selected = q.querySelector('input[type="radio"]:checked');
        const selectedIndex = selected ? Array.from(q.querySelectorAll('input[type="radio"]')).indexOf(selected) : -1;
        const isCorrect = selectedIndex === questions[i].correct;
    
        q.querySelectorAll('label').forEach(label => {
          label.classList.remove('correct-answer', 'incorrect-answer');
        });
    
        // Highlight correct answer
        const correctRadio = q.querySelectorAll('input[type="radio"]')[questions[i].correct];
        if (correctRadio && correctRadio.nextElementSibling) {
          correctRadio.nextElementSibling.classList.add('correct-answer');
        }
    
        // Highlight incorrect selection if wrong
        if (selected && !isCorrect && selected.nextElementSibling) {
          selected.nextElementSibling.classList.add('incorrect-answer');
        }
    
        buttons[i].classList.remove('correct', 'incorrect');
        if (isCorrect) {
          score++;
          buttons[i].classList.add('correct');
        } else {
          buttons[i].classList.add('incorrect');
        }
  
        q.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = true;
        });
      });
      
      document.getElementById('result').textContent = `Ваш результат: ${score} з ${questions.length}`;
      fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score,test_id:'test2' })
      }).then(res => {
        if (res.ok) alert('Test submitted!');
        else alert('Submit failed');
      });
    
    }
    

    function nextQuestion() {
      // Hide current question
      Questions[currentQuestion].classList.remove('active');
      buttons[currentQuestion].classList.remove('active');

      // Move to next question
      currentQuestion = (currentQuestion + 1) % Questions.length;

      // Show the next question
      Questions[currentQuestion].classList.add('active');
      buttons[currentQuestion].classList.add('active');
    }
    function tryAgain() {
      buttons.length = 0;
      nav.innerHTML = '';
      
      Questions.forEach((q, i) => {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        btn.onclick = () => showQuestion(i);
        if (i === 0) btn.classList.add('active');
        nav.appendChild(btn);
        buttons.push(btn);
    
        // Reset all radio buttons and styling
        q.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = false;
          radio.checked = false;
        });
    
        q.querySelectorAll('label').forEach(label => {
          label.classList.remove('correct-answer', 'incorrect-answer');
        });
      });
      
      showQuestion(0);
      document.getElementById('result').textContent = '';
      document.getElementById('again').style.display = 'none';
    }
