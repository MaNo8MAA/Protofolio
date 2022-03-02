$(document).on('click', 'a', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});

// function engfun() {
//     document.getElementById("eng").style.cssText = "display:inline-block; align-items: start; box-shadow:0px 10px 30px #607382";
//     document.getElementById("arabic").style.cssText = "align-items: start; box-shadow:0px 10px 30px #607382";
//     document.getElementById("lanEng").style.cssText = "	width: 50%; margin-inline-start:700px;  ";
//     document.getElementById("lanEng").style.cssText ="@media (max-width:900px){width: 50%;} @media (max-width:1200px){width: 50%;} ";
//     document.getElementById("herro").style.cssText = "	height: 100vh; margin-bottom:140px;";
//     document.getElementById("herro").style.cssText = "@media (max-width:900px){height: 100vh;margin-bottom:140px;}";


//     document.getElementById("eng-h1").innerHTML = "Ormano Lawyer Office Management Software ";
//     document.getElementById("eng-lead").innerHTML = "The official page of the Ormano program <br> the greatest program to manage the files and cases of Arab lawyers ";
//     document.getElementById("eng-btn-success").innerHTML = "buy Now";
//     document.getElementById("eng-btn-default").innerHTML = "Try it Free";
//     document.getElementById("eng-title").innerHTML = "The official page of the Ormano program";
//     document.getElementById("eng-card-text").innerHTML = "Ormano Program..your way to excellence"; 
//     document.getElementById("me").innerHTML= "Who we are?";

//     document.getElementById("eng-h2-col-md-4").innerHTML = "A glimpse of the Ormano Lawyer Office Management Software"; 
//     document.getElementById("eng-h4-col-md-4").innerHTML = "Why you Should Buy the Program?"; 

//     /*document.getElementById("eng-col-md-4").innerHTML = "<p><ol><li><i></i> &nbsp	The largest legal library that includes everything that matters to the lawyer (lawyer magazine - books in the law - decrees - legislation - the constitution - ready-made templates - jurisprudence - agencies</li><br><li>Automation of all issues, administrative tasks and financial accounts (weekly inventory - monthly inventory - customer debts - ..) in a distinctive modern style that allows you to speed up the completion of tasks and accuracy in work</li><br><li>	Characteristics (add - modify - delete) of cases, data of clients, litigants, tasks, lawyers, and office branches</li><br><li>	The program supports the presence of several branches of the task office and the organization of tasks and issues for each branch separately</li><br><li>	Archiving and classifying cases (win-lose cases)</li></ol></p>"; 


//     document.getElementById("eng-col-md-4-1").innerHTML = "<p><ol ><li></li><br><li>	Sending messages to users</li><br><li>	The feature of sending messages via the Internet  communication network that provides the best performance for the lawyer </li><br><li>	The program works without the Internet and with the presence of the Internet</li><br><li>	The program works on all old and new Windows devices</li><li>	File backup feature</li><li>	Data recovery feature</li><li>Download and view the latest decrees and laws</li><br><br></ul></p>";*/
//     document.getElementById("eng-col-md-4-1").innerHTML = "Alarm feature where the program alerts you of upcoming appointments";
//     document.getElementById("eng-col-md-4-2").innerHTML = "	Sending messages to users";
//     document.getElementById("eng-col-md-4-3").innerHTML = "	The feature of sending messages via the Internet  communication network that provides the best performance for the lawyer ";
//     document.getElementById("eng-col-md-4-4").innerHTML = "The program works without the Internet and with the presence of the Internet";


//     document.getElementById("eng-text-white margin-bottom40").innerHTML = "Characteristics of the Ormano Lawyer Office Management Program";

//    /* document.getElementById("eng-col-3").innerHTML = "Try it Free";
//     document.getElementById("eng-col-4").innerHTML = "Try it Free";
//     document.getElementById("eng-col-5").innerHTML = "Are you ready..? buy the program";*/

//     document.getElementById("one-year").innerHTML = "1 Year";
//     document.getElementById("pa-one-year").innerHTML = "Six months of updates <br>+ <br>includes all program features";
//     document.getElementById("five-year").innerHTML = "5 Year";
//     document.getElementById("pa-five-year").innerHTML = "Advantages<br> Permanent program maintenance + program updates for two years <br>+ <br>includes all program features";



//     /*card begin*/ 
//     document.getElementById("one-card").innerHTML="<br>Organizing lawyer cases<br>Archive issues<br>Case Reports<br>Print case reports<br><br><br>";
//     document.getElementById("two-card").innerHTML="<br>Full control over case files and clients<br>add <br>delete<br>edit<br><br><br>";
//     document.getElementById("three-card").innerHTML="Organizing upcoming appointments<br>Activate alerts<br>Send a message to the client to confirm the appointments<br>Reports of upcoming appointments weekly - monthly<br>save you time, organize your work";
//     document.getElementById("four-card").innerHTML="Watchers<br>The responsible user can monitor all operations <br>and tasks executed within the program by other users<br>This makes the program 100% safe and effective.";
//     document.getElementById("five-card").innerHTML="User Permissions <br>The permissions of each user can be easily controlled <br>by the responsible<br> user Granting or denying permission to a user <br>Give complete security to deal with the program";
//     document.getElementById("six-card").innerHTML="User Permissions The permissions of each use";

//    /*End begin*/ 

//     document.getElementById("contact-email").innerHTML = "You can contact us via the following email <br> manarfouaa@gmail.com";
//     document.getElementById("contact-wats").innerHTML = "Contact via WhatsApp or Telegram<br> +963954733726";
//     document.getElementById("mail").innerHTML= "&nbsp manarfouaa@gmail.com";
//     document.getElementById("phone").innerHTML="4434554";


//     /**الشروط والاحكام  */
//     document.getElementById("condition").innerHTML ="Terms and Conditions";
//     document.getElementById("permission").innerHTML ="You have no right to sell any copy without referring to the owner of the program.<br> Do you agree?";
//     document.getElementById("buy").innerHTML ="Terms and Conditions";
//     document.getElementById("n").innerHTML ="";
//     document.getElementById("codition").innerHTML ="";
//     document.getElementById("contion").innerHTML ="";
// /*works skills */


//     document.getElementById("courses").innerHTML = "Works & Skills";
//     document.getElementById("works").innerHTML = "Education & Courses";
//     document.getElementById("content-works").innerHTML = "Building Professional Automation Programs Using C# and SQL <br><br>Programming Using C# and SQL Server Bachelor in Electrical Engineering – Power Department The University of Damascus, Syria <br><br>Participation degree in workshop of the science of invention and development";
//     document.getElementById("myname").innerHTML = "Manar Abo Alkheir";
//     document.getElementById("content-courses").innerHTML = "Software Engineer - Freelacer<br><br>Embedded Systems <br>Arduino & AVR microcontroller <br>Basic Electrical Circuits<br> Principles of Electrical Engineering<br>Print  Circuits Design";

//     document.getElementById("eng-modal-body").innerHTML = "The customer has the right to inquire and request maintenance in case he encounters any problem when working on the program, after purchasing the program, free of charge, without any additional fees.<br> The customer is not entitled to copy, photograph, publish videos about the program, or promote it in illegal ways, or sell it without consulting the owner of the program <br>The customer gets the new and modified versions of the program.";
// };
// /*
// function arabicfun() {
//     document.getElementById("lanEng").style.cssText = "	width: 50%; margin-inline-start:-250px; align-items: end ";
//     document.getElementById("lanEng").style.cssText = "	@media (max-width:900px){width: 50%;}";
//     document.getElementById("eng-h1").innerHTML = "برنامج أورمانو لإدارة مكتب المحامي";
//     document.getElementById("me").innerHTML = "من نحن؟";
//     document.getElementById("eng-h2-col-md-4").innerHTML = " لمحة عن برنامج أورمانو لإدارة مكتب المحامي";
//     document.getElementById("eng-h4-col-md-4").innerHTML = "لماذا يجب عليك شراؤه؟ ";

//     document.getElementById("eng-col-3").innerHTML = "<h2>هل أنت جاهز <br>	اشتر البرنامج</h2>";
//     document.getElementById("eng-h4-col-md-4").innerHTML = "";
//     document.getElementById("eng-h4-col-md-4").innerHTML = "";
//     document.getElementById("eng-h4-col-md-4").innerHTML = "";

//     document.getElementById("eng-text-white margin-bottom40").innerHTML = " خصائص برنامج أورمانو لإدارة مكتب المحامي";
//     document.getElementById("eng-lead").innerHTML = "	الصفحة الرسمية ل برنامج اورمانو<br> البرنامج الاول من نوعه لادارة ملفات وقضايا المحامين العرب ";
//     document.getElementById("eng-btn-success").innerHTML = "اشتر البرنامج";
//     document.getElementById("eng-btn-default").innerHTML = "حمّل النسخة التجريبية";
//     document.getElementById("eng-title").innerHTML = "برنامج اورمانو لإدارة مكتب المحامي";
//     document.getElementById("eng-card-text").innerHTML = "برنامج اورمانو ..سبيلك للتميّز"; 
// /*card begin*/ 
// document.getElementById("one-card").innerHTML="لمهام الخاصة<br>تسجيل بيانات المهمة الخاصة<br>معرفة نوع المهمة  قيد العمل ملغية منتهية تقارير المهام الخاصة<br><br><br><br><br>";
// document.getElementById("two-card").innerHTML="لتحكم الكامل بلفات القضية<br><br>	إضافة قضايا جديدة <br>			 تعديل بيانات القضية الحالية <br>			أرشفة القضايا<br>			سهولة تامة في البحث عن القضايا<br><br>";
// document.getElementById("five-card").innerHTML="المراقبات<br>	يمكن للمستخدم المسؤول مراقبة كافة العمليات والمهام المنفذة داخل البرنامج من قبل المستخدمين الاخرين<br>وهذا يجعل البرنامج آمنا وفعّال بنسبة 100% ومن السهل معرفة المسؤول عن  أي خطأ <br><br><br>"
// document.getElementById("four-card").innerHTML="	تنظيم المواعيد القادمة<br>تفعيل التنبيهات<br>ارسال رسال إلى الموكل لتأكيد المواعيد<br>تقارير المواعيد القادمة اسبوعية - شهرية<br>طباعة التقارير<br>وكل ذلك لأجل توفير الوقت عليك وتنظيم عملك وجعله اكثر احترافية";
// document.getElementById("three-card").innerHTML="تنظيم قضايا المحامي<br>تسجيل كافة البيانات وحمايتها من الضياع<br>تقارير القضايا الرابحة اسبوعيا<br>تقارير القضايا الخاسرة اسبوعيا<br>إضافة مستندات القضية وكافة الصور المتعلقة بها<br>	طباعة تقارير القضايا <br>تنبيه المحامي بمواعيد الجلسات القادمة";
// document.getElementById("six-card").innerHTML="صلاحيات المستخدمين <br>يمكن التحكم ب سهولة ب صلاحيات كل مستخدم وذلك من قبل المستخدم المسؤول <br>إن منح الصلاحية لأحد المستخدمين أو منعها عنه<br>تعطي الأمان التام للتعامل مع البرنامج ويجعل المحامي هو المسؤول الأول عن المهام الحساسة<br><br>";

// /*End begin*/ 

//     document.getElementById("eng-col-3").innerHTML = "Try it Free";
//     document.getElementById("eng-col-4").innerHTML = "	<p> <ul><li>	أضخم مكتبة قانونية تضم كل ما يهم المحامي ( مجلة المحامي – كتب في القانون – مراسيم – تشريعات – الدستور – قوالب جاهزة – اجتهادات – وكالات )</li><li>         أتمتة كافة القضايا والمهام الادارية والحسابات المالية ( الجرد الاسبوعي – الجرد الشهري – ديون العملاء - .. ) بإسلوب عصري مميز يتيح لك السرعة في انجاز المهام والدقة في العمل </li><li>	خصائص (إضافة – تعديل – حذف ) للقضايا وبيانات الموكلين والخصوم والمهام والمحامين وفروع المكتب</li><li>	يدعم البرنامج وجود فروع عدة ل مكتب المهام وتنظيم المهام والقضايا لكل فرع على حدى</li><li>	أرشفة القضايا وتصنيفها ( قضايا رابحة – خاسرة )</li></ul><p>";
//     document.getElementById("eng-col-5").innerHTML = "Are you ready..? buy the program";


//     document.getElementById("works").innerHTML = "العمل & المهارات";
//     document.getElementById("content-works").innerHTML = "مهندسة متخرجة من جامعة دمشق <br><br> أعمل في مجال تطوير برمجيات سطح المكتب <br><br>معرفة جيدة ب لغات برمجة الويب وتصميم تجربة المستخدم<br><br><br> أسس الهندسة الكهربائية <br><br> برمجة المتحكمات الصغرية والانظمة المدمجة<br><br> تصميم الدارات الالكترونية";
//     document.getElementById("courses").innerHTML = "التعليم & الشهادات";
//     document.getElementById("content-courses").innerHTML = "				c# & SQL تصميم وبناء برامج أتمتة باستخدام <br><br>C# & SQL Server البرمجة باستخدام لغة <br><br><br> <br>  بكالورياس في الهندسة الكهربائية <br><br> اختصاص الطاقة الكهربائية دمشق-سوريا <br>	<br>		<br>درجة المشاركة في ورشة علم الاختراع والتطوير دمشق-سوريا<br>";
//     document.getElementById("eng-col-5").innerHTML = "";

//     };

/*
document.getElementById("location").innerHTML =
"" + window.location.href;
*/


/*  location written by manar 
function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;
  
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
    document.getElementById("location").innerHTML = "<img src='"+img_url+"'>";
  }*/
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });
}
