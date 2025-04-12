const questions=[
    {
        image: "vegetables.png",
        correct:3,
        question:'Which advertisement is about ___?',
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
          ]
    },
    {
        image: "football.png",
        correct:2,
        question:'Which advertisement is about ___?',
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
          ]
    },
    {
        image: "taco.png",
        correct:4,
        question:'Which advertisement is about ___?',
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
          ]
    },
    {
        image: "estate.png",
        correct:1,
        question:'Which advertisement is about ___?',
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
          ]
    },
    {
        image: "speaking.png",
        correct:0,
        question:'Which advertisement is about ___?',
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
          ]
    },
    /*
    {
        "id": "q2",
        "image": "images/soap.png",
        "question": "Which advertisement is about ___?",
        "options": [
            {
                "label": "a training event offering complimentary materials",
                "value": 0
            },
            {
                "label": "a building that was revamped from a manor",
                "value": 0
            },
            {
                "label": "a chance to participate in a nearby competition",
                "value": 1
            },
            {
                "label": "a place to purchase newly harvested regional goods",
                "value": 0
            },
            {
                "label": "a chance to try traditional dishes of some country",
                "value": 0
            },
            {
                "label": "a travelling opportunity",
                "value": 0
            },
            {
                "label": "a horse-riding school",
                "value": 0
            },
            {
                "label": "an art gallery",
                "value": 0
            }
        ]
    },
    {
        "id": "q3",
        "image": "images/jewelry.png",
        "question": "Which advertisement is about ___?",
        "options": [
            {
                "label": "a training event offering complimentary materials",
                "value": 0
            },
            {
                "label": "a building that was revamped from a manor",
                "value": 0
            },
            {
                "label": "a chance to participate in a nearby competition",
                "value": 0
            },
            {
                "label": "a place to purchase newly harvested regional goods",
                "value": 0
            },
            {
                "label": "a chance to try traditional dishes of some country",
                "value": 1
            },
            {
                "label": "a travelling opportunity",
                "value": 0
            },
            {
                "label": "a horse-riding school",
                "value": 0
            },
            {
                "label": "an art gallery",
                "value": 0
            }
        ]
    },
    {
        "id": "q4",
        "image": "images/rent.png",
        "question": "Which advertisement is about ___?",
        "options": [
            {
                "label": "a training event offering complimentary materials",
                "value": 0
            },
            {
                "label": "a building that was revamped from a manor",
                "value": 1
            },
            {
                "label": "a chance to participate in a nearby competition",
                "value": 0
            },
            {
                "label": "a place to purchase newly harvested regional goods",
                "value": 0
            },
            {
                "label": "a chance to try traditional dishes of some country",
                "value": 0
            },
            {
                "label": "a travelling opportunity",
                "value": 0
            },
            {
                "label": "a horse-riding school",
                "value": 0
            },
            {
                "label": "an art gallery",
                "value": 0
            }
        ]
    },
    {
        "id": "q5",
        "image": "images/guitar.png",
        "question": "Which advertisement is about ___?",
        "options": [
            {
                "label": "a training event offering complimentary materials",
                "value": 1
            },
            {
                "label": "a building that was revamped from a manor",
                "value": 0
            },
            {
                "label": "a chance to participate in a nearby competition",
                "value": 0
            },
            {
                "label": "a place to purchase newly harvested regional goods",
                "value": 0
            },
            {
                "label": "a chance to try traditional dishes of some country",
                "value": 0
            },
            {
                "label": "a travelling opportunity",
                "value": 0
            },
            {
                "label": "a horse-riding school",
                "value": 0
            },
            {
                "label": "an art gallery",
                "value": 0
            }
        ]
    },
    {
        "id": "q6",
        "question": "What is one of the main benefits of visiting historical music sites according to the text?",
        "options": [
            {
                "label": "It allows travelers to participate in local music competitions.",
                "value": 0
            },
            {
                "label": "It helps travelers learn about regional food traditions.",
                "value": 0
            },
            {
                "label": "It enables travelers to witness the evolution of music.",
                "value": 1
            },
            {
                "label": "It gives travelers discounts on local music festivals.",
                "value": 0
            }
        ]
    },
    {
        "id": "q7",
        "question": "How does the text suggest that music can help people understand different cultures?",
        "options": [
            {
                "label": "By allowing people to experience emotions and stories without words.",
                "value": 1
            },
            {
                "label": "By translating the lyrics into different languages.",
                "value": 0
            },
            {
                "label": "By offering free music lessons to travelers.",
                "value": 0
            },
            {
                "label": "By encouraging people to play musical instruments from different cultures.",
                "value": 0
            }
        ]
    },
    {
        "id": "q8",
        "question": "According to the text what unique aspects can be discovered through historical music sites?",
        "options": [
            {
                "label": "Current trends in popular music worldwide",
                "value": 0
            },
            {
                "label": "The influence of social media on contemporary music.",
                "value": 0
            },
            {
                "label": "The design of modern concert halls.",
                "value": 0
            },
            {
                "label": "Regional music practices and instruments that are distinctive to each location.",
                "value": 1
            }
        ]
    },
    {
        "id": "q9",
        "question": "What does the word 'lasting' in paragraph 5 mean?",
        "options": [
            {
                "label": "Temporary.",
                "value": 0
            },
            {
                "label": "Continuing for a specified period of time.",
                "value": 1
            },
            {
                "label": "Quick.",
                "value": 0
            },
            {
                "label": "Easily forgotten.",
                "value": 0
            }
        ]
    },
    {
        "id": "q10",
        "question": "What does the text imply about the relationship between music and cultural identity?",
        "options": [
            {
                "label": "Music is less important in shaping cultural identity today.",
                "value": 0
            },
            {
                "label": "Music tourism only affects the economic aspects of culture.",
                "value": 0
            },
            {
                "label": "Music is a key element in exploring and understanding cultural identity.",
                "value": 1
            },
            {
                "label": "Music is primarily an entertainment form with no cultural significance.",
                "value": 0
            }
        ]
    },
    {
        "id": "q11",
        "question": "Which of the options states that...",
        "options": [
            {
                "label": "A. The man didn't mean to make such a long voyage alone.",
                "value": 0
            },
            {
                "label": "B. An unusual way was found to get saved from the cavern.",
                "value": 1
            },
            {
                "label": "C. That woman lived alone in a temporary camp for two years.",
                "value": 0
            },
            {
                "label": "D. The voyage was interrupted by marine animals.",
                "value": 0
            },
            {
                "label": "E. The expedition was too dangerous for these scientists to move on.",
                "value": 0
            },
            {
                "label": "F. That person had to injure himself to survive.",
                "value": 0
            },
            {
                "label": "G. That person had a short flight in an unusual vehicle.",
                "value": 0
            },
            {
                "label": "H. That person got lost looking for some insects.",
                "value": 0
            }
        ]
    },
    {
        "id": "q12",
        "question": "Which of the options states that...",
        "options": [
            {
                "label": "A. The man didn't mean to make such a long voyage alone.",
                "value": 0
            },
            {
                "label": "B. An unusual way was found to get saved from the cavern.",
                "value": 0
            },
            {
                "label": "C. That woman lived alone in a temporary camp for two years.",
                "value": 0
            },
            {
                "label": "D. The voyage was interrupted by marine animals.",
                "value": 0
            },
            {
                "label": "E. The expedition was too dangerous for these scientists to move on.",
                "value": 0
            },
            {
                "label": "F. That person had to injure himself to survive.",
                "value": 0
            },
            {
                "label": "G. That person had a short flight in an unusual vehicle.",
                "value": 1
            },
            {
                "label": "H. That person got lost looking for some insects.",
                "value": 0
            }
        ]
    },
    {
        "id": "q13",
        "question": "Which of the options states that...",
        "options": [
            {
                "label": "A. The man didn't mean to make such a long voyage alone.",
                "value": 0
            },
            {
                "label": "B. An unusual way was found to get saved from the cavern.",
                "value": 0
            },
            {
                "label": "C. That woman lived alone in a temporary camp for two years.",
                "value": 0
            },
            {
                "label": "D. The voyage was interrupted by marine animals.",
                "value": 0
            },
            {
                "label": "E. The expedition was too dangerous for these scientists to move on.",
                "value": 0
            },
            {
                "label": "F. That person had to injure himself to survive.",
                "value": 0
            },
            {
                "label": "G. That person had a short flight in an unusual vehicle.",
                "value": 0
            },
            {
                "label": "H. That person got lost looking for some insects.",
                "value": 1
            }
        ]
    },
    {
        "id": "q14",
        "question": "Which of the options states that...",
        "options": [
            {
                "label": "A. The man didn't mean to make such a long voyage alone.",
                "value": 0
            },
            {
                "label": "B. An unusual way was found to get saved from the cavern.",
                "value": 0
            },
            {
                "label": "C. That woman lived alone in a temporary camp for two years.",
                "value": 0
            },
            {
                "label": "D. The voyage was interrupted by marine animals.",
                "value": 1
            },
            {
                "label": "E. The expedition was too dangerous for these scientists to move on.",
                "value": 0
            },
            {
                "label": "F. That person had to injure himself to survive.",
                "value": 0
            },
            {
                "label": "G. That person had a short flight in an unusual vehicle.",
                "value": 0
            },
            {
                "label": "H. That person got lost looking for some insects.",
                "value": 0
            }
        ]
    },
    {
        "id": "q15",
        "question": "Which of the options states that...",
        "options": [
            {
                "label": "A. The man didn't mean to make such a long voyage alone.",
                "value": 0
            },
            {
                "label": "B. An unusual way was found to get saved from the cavern.",
                "value": 0
            },
            {
                "label": "C. That woman lived alone in a temporary camp for two years.",
                "value": 0
            },
            {
                "label": "D. The voyage was interrupted by marine animals.",
                "value": 0
            },
            {
                "label": "E. The expedition was too dangerous for these scientists to move on.",
                "value": 0
            },
            {
                "label": "F. That person had to injure himself to survive.",
                "value": 1
            },
            {
                "label": "G. That person had a short flight in an unusual vehicle.",
                "value": 0
            },
            {
                "label": "H. That person got lost looking for some insects.",
                "value": 0
            }
        ]
    },
    {
        "id": "q16",
        "question": "Which of the options states that...",
        "options": [
            {
                "label": "A. The man didn't mean to make such a long voyage alone.",
                "value": 1
            },
            {
                "label": "B. An unusual way was found to get saved from the cavern.",
                "value": 0
            },
            {
                "label": "C. That woman lived alone in a temporary camp for two years.",
                "value": 0
            },
            {
                "label": "D. The voyage was interrupted by marine animals.",
                "value": 0
            },
            {
                "label": "E. The expedition was too dangerous for these scientists to move on.",
                "value": 0
            },
            {
                "label": "F. That person had to injure himself to survive.",
                "value": 0
            },
            {
                "label": "G. That person had a short flight in an unusual vehicle.",
                "value": 0
            },
            {
                "label": "H. That person got lost looking for some insects.",
                "value": 0
            }
        ]
    }
        */
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
        body: JSON.stringify({ score})
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
