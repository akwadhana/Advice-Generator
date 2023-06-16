let baseUrl = "https://api.adviceslip.com/advice",
adviceNum = document.getElementById ("adviceNum"),
adviceBody = document.getElementById ("adviceBody"),
adviceButton = document.getElementById("adviceButton");

const generateAdvice = async () => {
    try {
        const response = await fetch(baseUrl);
        let responseJson = await response.json();
        adviceBody.innerText = `"${responseJson.slip.advice}"`;
        adviceNum.innerText = `ADVICE #${responseJson.slip.id}`;
    }catch (error) {
        console.log(error);
    }
};

adviceButton.addEventListener("click",generateAdvice);