<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Thanks for Joining Us!";
}
</script>
</head>

<body>

<p>When you click "click me!", a function will be called.</p>
<p>The function will display a message.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

</body>
</html>