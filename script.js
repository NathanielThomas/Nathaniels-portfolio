//Google analytics script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-99926926-1', 'auto');
    ga('send', 'pageview');

//Variables that contain the extracted value of each form element that is on my website (Except the submit button.)
var userName = document.forms["contactForm"]["name"].value;
var userEmail = document.forms["contactForm"]["replyTo"].value;
var userMessage = document.forms["contactForm"]["message"].value;
var userWebsite = document.forms["contactForm"]["website"].value;
var maintanenceServices = document.forms["contactForm"]["service"].value;
//Validation for the become a client page form
function validateBecomeAClientForm(){
  if (userName == ""){
    alert("All fields must be filled out");
    return false;}

  if (userEmail == ""){
    alert("All fields must be filled out");
    return false;}

  if (userMessage == ""){
    alert("All fields must be filled out");
    return false;}}

//Validation for the expand form
function validateExpandForm(){
  if (userName == ""){
    alert("All fields must be filled out");
    return false;}

  if (userEmail == ""){
    alert("All fields must be filled out");
    return false;}

  if (userMessage == ""){
    alert("All fields must be filled out");
    return false;}

  if (userWebsite == ""){
    alert("All fields must be filled out");
    return false;}}

//Validation for the mainanence page form.
function validateMaintanenceForm(){
  if (userName == ""){
    alert("All fields must be filled out");
    return false;}

  if (userEmail == ""){
    alert("All fields must be filled out");
    return false;}

  if (userMessage == ""){
    alert("All fields must be filled out");
    return false;}

  if (maintanenceServices == ""){
    lert("All fields must be filled out");
    return false;}}

  function onFocusScript(x){
    document.getElementById(x).style.border = "1.5px solid #B71C1C";
    document.getElementById(x).style.outline = "0px solid red";
    document.getElementById(x).style.transition = "0.1s";
  }
  function onBlurScript(y){
    document.getElementById(y).style.border = "1px solid black";
  }
