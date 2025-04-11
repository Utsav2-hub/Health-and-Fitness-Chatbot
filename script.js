const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");

const faqs = {
  "return policy": "You can return any product within 30 days of purchase.",
  "shipping time": "Shipping usually takes 3-5 business days.",
  "contact support": "You can reach our support at support@example.com."
};

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  for (let key in faqs) {
    if (input.includes(key)) {
      return faqs[key];
    }
  }
  return "Hmm... this seems a bit complex. Let me connect you to a human agent. 💬";
}

function handleSend() {
  const input = userInput.value.trim();
  if (input === "") return;
  appendMessage("user", input);
  const response = getBotResponse(input);
  setTimeout(() => {
    appendMessage("bot", response);
  }, 500);
  userInput.value = "";
}
