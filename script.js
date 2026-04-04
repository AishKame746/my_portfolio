
            function showMsg(){
                alert("hello Aishwarya....");
            }

            function submitForm(event){
                event.preventDefault();

                let name = document.querySelector("input").value;

                alert("Thank you"+" "+ name);
            }

            function toggleDark(){
                document.body.classList.toggle("dark");

                let btn=document.querySelector(".btn");
                if(document.body.classList.contains("dark"))
                {
                    btn.innerText="Light Mode";

                }
                else
                {
                    btn.innerText="Dark Mode";
                }
            }

            let score = 0;
            let time =10;
            let target = 10;
            let timer;
            
            function startGame(){
                score = 0;
                time = 10;

                document.getElementById("score").innerText = score;
                document.getElementById("time").innerText = time;

                

                timer =setInterval(function(){
                    time--;
                    document.getElementById("time").innerText = time;

                    if(time === 0){
                        clearInterval(timer);

                        if(score >= target){
                            alert("You Win! 🎉");
                        }else{
                            alert("Game Over 😢");
                        }
                    }
                }, 1000);
            }

            function increaseScore(){
                score++;
                document.getElementById("score").innerText = score;
            }

            function moveButton(btn){
                let x = Math.random() * 200;
                let y = Math.random() * 200;

                btn.style.position = "absolute";
                btn.style.left = x + "px";
                btn.style.top = y + "px";
            }



