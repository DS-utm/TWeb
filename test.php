<?php
include 'header.php';
renderHeader("Roci", "./");
?>

<h1>Rocă</h1>
<p>
În geologie, o rocă (numită și piatră) este orice masă solidă sau agregat de minerale sau materie mineraloidă care apare în mod natural.
</p>

<img src="./IMAGE/roca.jpg" alt="Imagine Rocă">

<h2>Tipuri de roci:</h2>

<table>
<thead>
<tr>
<th>Categorie</th>
<th>Numele rocii</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><b>Vulcanice</b></td>
<td><a href="./HTML/detalii.php?tip=andezit">Andezit</a></td>
</tr>
<tr>
<td><a href="./HTML/detalii.php?tip=bazalt">Bazalt</a></td>
</tr>
<tr>
<td rowspan="2"><b>Sedimentare</b></td>
<td><a href="./HTML/detalii.php?tip=calcar">Calcar</a></td>
</tr>
<tr>
<td><a href="./HTML/detalii.php?tip=creta">Creta</a></td>
</tr>
<tr>
<td><b>Combustibili fosili</b></td>
<td><a href="./HTML/detalii.php?tip=antracit">Antracit</a></td>
</tr>
</tbody>
</table>
</body>
</html>
