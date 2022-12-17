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
        {name : '1' , marks1 : 19}
        ,{name : '2' , marks1 : 27}
        ,{name : '3' , marks1 : 17}
        ,{name : '4' , marks1 : 16}
        ,{name : '5' , marks1 : 22}
        ,{name : '6' , marks1 : 26}
        ,{name : '7' , marks1 : 30}
        ,{name : '8' , marks1 : 16}
        ,{name : '9' , marks1 : 41}
        ,{name : '10' , marks1 : 43}
        ,{name : '11' , marks1 : 41}
        ,{name : '12' , marks1 : 16}
        ,{name : '13' , marks1 : 38}
        ,{name : '14' , marks1 : 33}
        ,{name : '15' , marks1 : 33}
        ,{name : '16' , marks1 : 19}
        ,{name : '18' , marks1 : 18}
        ,{name : '19' , marks1 : 31}
        ,{name : '20' , marks1 : 41}
        ,{name : '21' , marks1 : 22}
        ,{name : '23' , marks1 : 40}
        ,{name : '25' , marks1 : 25}
        ,{name : '26' , marks1 : 26}
        ,{name : '27' , marks1 : 39}
        ,{name : '31' , marks1 : 28}
        ,{name : '33' , marks1 : 22}
        ,{name : '35' , marks1 : 14}
        ,{name : '36' , marks1 : 21}
        ,{name : '37' , marks1 : 25}
        ,{name : '38' , marks1 : 16}
        ,{name : '39' , marks1 : 37}
        ,{name : '40' , marks1 : 40}
        ,{name : '41' , marks1 : 32}
        ,{name : '43' , marks1 : 25}
        ,{name : '44' , marks1 : 36}
        ,{name : '46' , marks1 : 23}
        ,{name : '47' , marks1 : 21}
        ,{name : '49' , marks1 : 39}
        ,{name : '50' , marks1 : 34}
        ,{name : '51' , marks1 : 31}
        ,{name : '53' , marks1 : 18}
        ,{name : '54' , marks1 : 24}
        ,{name : '56' , marks1 : 41}
        ,{name : '57' , marks1 : 29}
        ,{name : '58' , marks1 : 22}
        ,{name : '59' , marks1 : 21}
        ,{name : '60' , marks1 : 28}
        ,{name : '61' , marks1 : 19}
        ,{name : '62' , marks1 : 39}
        ,{name : '63' , marks1 : 34}
        ,{name : '65' , marks1 : 36}
        ,{name : '67' , marks1 : 19}
        ,{name : '68' , marks1 : 31}
        ,{name : '72' , marks1 : 41}
        ,{name : '73' , marks1 : 36}
        ,{name : '74' , marks1 : 20}
        ,{name : '75' , marks1 : 42}
        ,{name : '76' , marks1 : 38}
        ,{name : '77' , marks1 : 43}
        ,{name : '78' , marks1 : 15}
        ,{name : '79' , marks1 : 23}        
];
const verse = document.getElementById('verse')
const results = document.getElementById('res')
const thxmassage = document.getElementById('thx')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    
    const name = document.getElementById('code').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            verse.innerHTML = "''"+verses[Math.floor(Math.random()*verses.length)]+"''";
            console.log(data[i].marks1)
            results.innerHTML =data[i].marks1 +" / 50 "  

            const [first, last] = document.getElementById('name').value.split(' ');
            thxmassage.innerHTML = " شكرا ليك يا" +" "+ first
            return;
        }
    }    
    results.innerHTML =  "<h4 style='color:#d43f3a'>"+" تاكد من معلوماتك مرة اخرى و اعد المحاولة"+"<br>" + "اذا كنت تواجه مشكلة اضغط بالاسفل على هل يوجد مشكلة ؟"+"</h4>"
})
