const challenges = [
    "امروز ۳۰ دقیقه مطالعه کن",
    "۵ دقیقه مدیتیشن انجام بده",
    "یک نفر رو خوشحال کن",
    "۱۰ حرکت ورزشی ساده انجام بده",
    "برای فردا یک هدف بنویس"
];

function newChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById("challenge-text").textContent = challenges[randomIndex];
}

function submitChallenge() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    const cat = document.getElementById("category").value;
    if (title && desc) {
        alert("چالش ارسال شد:\n" + title + " - " + cat);
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    } else {
        alert("لطفاً عنوان و توضیح را وارد کن.");
    }
}