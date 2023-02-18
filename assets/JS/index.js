$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay, .btn-danger").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });
  $('.btn-success').on('click', function(event) {
      event.preventDefault(); // To prevent following the link (optional)
      location.href="https://api.whatsapp.com/send?phone=201289022985&text=welcome";
    });

    var verses = ["به ينتهي إلى النجاح، وبكلمته يقوم الجميع",
    "رُبَّ نجاح يكون لأذى صاحبه",
    "أَمَّا الْحِكْمَةُ فَنَافِعَةٌ لِلإِنْجَاحِ","إِلهَ السَّمَاءِ يُعْطِينَا النَّجَاحَ، وَنَحْنُ عَبِيدُهُ نَقُومُ وَنَبْنِي"
    ,"كَانَ الرَّبُّ مَعَ يُوسُفَ فَكَانَ رَجُلًا نَاجِحًا",
"أَرُومُ أَنْ تَكُونَ نَاجِحًا وَصَحِيحًا، كَمَا أَنَّ نَفْسَكَ نَاجِحَةٌ"];
    const data = [
{name : '1' , marks1 : 19, marks2:18}
,{name : '2' , marks1 : 27, marks2:"-"}
,{name : '3' , marks1 : 17, marks2:14}
,{name : '4' , marks1 : 16, marks2:21}
,{name : '5' , marks1 : 22, marks2:16}
,{name : '6' , marks1 : 26, marks2:26}
,{name : '7' , marks1 : 30, marks2:27}
,{name : '8' , marks1 : 16, marks2:19}
,{name : '9' , marks1 : 41, marks2:41}
,{name : '10' , marks1 : 43, marks2:46}
,{name : '11' , marks1 : 41, marks2:38}
,{name : '12' , marks1 : 16, marks2:13}
,{name : '13' , marks1 : 38, marks2:"-"}
,{name : '14' , marks1 : 33, marks2:34}
,{name : '15' , marks1 : 33, marks2:"-"}
,{name : '16' , marks1 : 19, marks2:15}
,{name : '17' , marks1 : "-", marks2:"-"}
,{name : '18' , marks1 : 18, marks2:36}
,{name : '19' , marks1 : 31, marks2:32}
,{name : '20' , marks1 : 41, marks2:41}
,{name : '21' , marks1 : 22, marks2:19}
,{name : '22' , marks1 : "-", marks2:"-"}
,{name : '23' , marks1 : 40, marks2:42}
,{name : '24' , marks1 : "-", marks2:18}
,{name : '25' , marks1 : 25, marks2:21}
,{name : '26' , marks1 : 26, marks2:"-"}
,{name : '27' , marks1 : 39, marks2:35}
,{name : '28' , marks1 : "-", marks2:"-"}
,{name : '29' , marks1 : "-", marks2:"-"}
,{name : '30' , marks1 : "-", marks2:36}
,{name : '31' , marks1 : 28, marks2:26}
,{name : '32' , marks1 : "-", marks2:26}
,{name : '33' , marks1 : 22, marks2:24}
,{name : '35' , marks1 : 14, marks2:"-"}
,{name : '36' , marks1 : 21, marks2:27}
,{name : '37' , marks1 : 25, marks2:31}
,{name : '38' , marks1 : 16, marks2:"-"}
,{name : '39' , marks1 : 37, marks2:30}
,{name : '40' , marks1 : 40, marks2:37}
,{name : '41' , marks1 : 32, marks2:35}
,{name : '42' , marks1 : "-", marks2:20}
,{name : '43' , marks1 : 25, marks2:25}
,{name : '44' , marks1 : 36, marks2:30}
,{name : '45' , marks1 : "-", marks2:"-"}
,{name : '46' , marks1 : 23, marks2:17}
,{name : '47' , marks1 : 21, marks2:23}
,{name : '48' , marks1 : "-", marks2:"-"}
,{name : '49' , marks1 : 39, marks2:28}
,{name : '50' , marks1 : 34, marks2:"-"}
,{name : '51' , marks1 : 31, marks2:37}
,{name : '52' , marks1 : "-", marks2:"-"}
,{name : '53' , marks1 : 18, marks2:18}
,{name : '54' , marks1 : 24, marks2:26}
,{name : '55' , marks1 : "-", marks2:"-"}
,{name : '56' , marks1 : 41, marks2:43}
,{name : '57' , marks1 : 29, marks2:21}
,{name : '58' , marks1 : 22, marks2:40}
,{name : '59' , marks1 : 21, marks2:26}
,{name : '60' , marks1 : 28, marks2:21}
,{name : '61' , marks1 : 19, marks2:"-"}
,{name : '62' , marks1 : 39, marks2:34}
,{name : '63' , marks1 : 34, marks2:36}
,{name : '65' , marks1 : 36, marks2:18}
,{name : '66' , marks1 : "-", marks2:"-"}
,{name : '67' , marks1 : 19, marks2:"-"}
,{name : '68' , marks1 : 31, marks2:34}
,{name : '70' , marks1 : "-", marks2:"-"}
,{name : '71' , marks1 : "-", marks2:"-"}
,{name : '72' , marks1 : 41, marks2:37}
,{name : '73' , marks1 : 36, marks2:34}
,{name : '74' , marks1 : 20, marks2:16}
,{name : '75' , marks1 : 42, marks2:45}
,{name : '76' , marks1 : 38, marks2:30}
,{name : '77' , marks1 : 43, marks2:44}
,{name : '78' , marks1 : 15, marks2:"-"}
,{name : '79' , marks1 : "-", marks2:"-"}
,{name : '80' , marks1 : "-", marks2:21}
,{name : '81' , marks1 : 23, marks2:18}       
];
const verse = document.getElementById('verse')
const results = document.getElementById('res')
const results2 = document.getElementById('res2')
const thxmassage = document.getElementById('thx')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    
    const name = document.getElementById('code').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            verse.innerHTML = "''"+verses[Math.floor(Math.random()*verses.length)]+"''";
            console.log(data[i].marks1)
            results.innerHTML =data[i].marks1 +" / 50 ";
            results2.innerHTML =data[i].marks2 +" / 50 " ; 

            const [first, last] = document.getElementById('name').value.split(' ');
            thxmassage.innerHTML = " شكرا ليك يا" +" "+ first
            return;
        }
    }    
    results.innerHTML =  "<h4 style='color:#d43f3a'>"+" تاكد من معلوماتك مرة اخرى و اعد المحاولة"+"<br>" + "اذا كنت تواجه مشكلة اضغط بالاسفل على هل يوجد مشكلة ؟"+"</h4>"
})
