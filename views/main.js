let mic = document.getElementById("mic");
let chatareamain = document.querySelector(".chatarea-main");
let chatareaouter = document.querySelector(".chatarea-outer");

let intro = [
  "Hello, I am Jarvis",
  "Hi, I am a Jarvis",
  "Hello, My name is Jarvis",
  "Hello,You can call me Jarvis",
];
let help = [
  "How may I assist you?",
  "How can I help you?",
  "What I can do for you?",
];
let thank = ["You are most welcome", "Its my pleasure", "Mention not"];
let closing = ["Ok Bye-Bye Take Care", "Bye-bye, See You Soon."];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
  let output = "";
  output += `<div class="chatarea-inner user">${usermsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
  let output = "";
  output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function chatbotvoice(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text =
    "Sorry! I could not understand. For Furthur Queries you can email us at danceacademy@gmail.com";
  //Greetings
  if (message.includes("hello")) {
    speech.text =
      "Hello, I am Jarvis! How are you? I hope you are doing well! How can I help you? ";
  }
  if (message.includes("Hola" || "hola")) {
    speech.text =
      "Hello, I am Jarvis! How are you? I hope you are doing well! How can I help you? ";
  }
  if (message.includes("hey")) {
    speech.text =
      "Hello, I am Jarvis! How are you? I hope you are doing well! How can I help you? ";
  }
  if (message.includes("hi")) {
    speech.text =
      "Hello, I am Jarvis! How are you? I hope you are doing well! How can I help you? ";
  }
  if (message.includes("hai")) {
    speech.text =
      "Hello, I am Jarvis! How are you? I hope you are doing well! How can I help you? ";
  }

  //Name of Bot
  if (message.includes("name")) {
    let finalresult = intro[Math.floor(Math.random() * intro.length)];
    speech.text = finalresult;
  }
  if (message.includes("who are you")) {
    let finalresult = intro[Math.floor(Math.random() * intro.length)];
    speech.text = finalresult;
  }
  if (message.includes("call you")) {
    let finalresult = intro[Math.floor(Math.random() * intro.length)];
    speech.text = finalresult;
  }
  //Small Talks
  if (message.includes("fine")) {
    let finalresult = help[Math.floor(Math.random() * help.length)];
    speech.text = finalresult;
  }

  if (message.includes("oh")) {
    speech.text = "I hope I have resolved your query to your satisfaction.";
  }
  if (message.includes("ok got it")) {
    speech.text = "I hope I have resolved your query to your satisfaction.";
  }

  if (message.includes("alright")) {
    speech.text = "I hope I have resolved your query to your satisfaction.";
  }
  if (message.includes("done")) {
    speech.text = "I hope I have resolved your query to your satisfaction.";
  }
  if (message.includes("yes")) {
    let finalresult = help[Math.floor(Math.random() * help.length)];
    speech.text = "Ok, " + finalresult;
  }
  if (message.includes("no")) {
    let finalresult = help[Math.floor(Math.random() * help.length)];
    speech.text = "Ok, " + finalresult;
  }

  //Dance Plus Academy About
  if (message.includes("Dance Academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("dance academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("information about dance Academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("information about dance plus Academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("dance plus Academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("dance styles")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("dance forms")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }
  if (message.includes("Academy")) {
    speech.text =
      "The Dance Plus Academy,provides training programmes in the various dance disciplines.Students are encouraged to develop their dance skills and performance qualities to the maximum.Some of our dance styles you can see in our Class Information Page.";
  }

  //Timing,Location
  if (message.includes("timing")) {
    speech.text =
      "The timing and all the other details of Dance Plus Academy is given in our Class Information Page.";
  }
  if (message.includes("location")) {
    speech.text =
      "The location and all the other details of Dance Plus Academy is given in our Class Information Page.";
  }

  //Redirect page

  if (message.includes("homepage")) {
    speech.text = "Ok, I am redirecting you to HomePage";

    window.open("https://danceplusacademy.herokuapp.com/");
  }
  if (message.includes("home")) {
    speech.text = "Ok, I am redirecting you to HomePage";

    window.open("https://danceplusacademy.herokuapp.com/");
  }
  if (message.includes("class information")) {
    speech.text = "Ok, I am redirecting you to Class Information Page";

    window.open("https://danceplusacademy.herokuapp.com/info");
  }
  if (message.includes("registration page")) {
    speech.text = "Ok, I am redirecting you to Registration Page";

    window.open("https://danceplusacademy.herokuapp.com/register");
  }
  if (message.includes("register")) {
    speech.text = "Ok, I am redirecting you to Registration Page";

    window.open("https://danceplusacademy.herokuapp.com/register");
  }

  //fee
  if (message.includes("fee")) {
    speech.text =
      "The Registration Fee of Dance Plus Academy is Rs.1000 and Monthly Fee of Dance Plus Academy is Rs.1500";
  }
  if (message.includes("amount")) {
    speech.text =
      "The Registration Fee of Dance Plus Academy is Rs.1000 and Monthly Fee of Dance Plus Academy is Rs.1500";
  }
  if (message.includes("pay")) {
    speech.text =
      "The Registration Fee of Dance Plus Academy is Rs.1000 and Monthly Fee of Dance Plus Academy is Rs.1500";
  }

  if (message.includes("thank you" || "thank you so much")) {
    let finalresult = thank[Math.floor(Math.random() * thank.length)];
    speech.text = finalresult;
  }
  if (message.includes("goodbye")) {
    let finalresult = closing[Math.floor(Math.random() * closing.length)];
    speech.text = finalresult;
  }
  if (message.includes("bye")) {
    let finalresult = closing[Math.floor(Math.random() * closing.length)];
    speech.text = finalresult;
  }

  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
  let resultIndex = e.resultIndex;
  let transcript = e.results[resultIndex][0].transcript;
  chatareamain.appendChild(showusermsg(transcript));
  chatbotvoice(transcript);
  console.log(transcript);
};
recognition.onend = function () {
  mic.style.background = "#ff3b3b";
};
mic.addEventListener("click", function () {
  mic.style.background = "#39c81f";
  recognition.start();
  console.log("Activated");
});
