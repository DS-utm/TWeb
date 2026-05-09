<?php
// Go up one level to find the header
include '../header.php';

// 1. The Data Store (The information that used to be in separate files)
$rocks = [
    'andezit' => [
        'titlu' => 'Andezit',
'bg' => 'rgb(200, 200, 200)',
'img' => 'andezit.jpg',
'desc' => 'Andezitul (sau Islanditul) este o rocă magmatică rezultată prin erupție vulcanică, având o granulație fină, de culoare brună, violetă, până la cenușie.'
    ],
'bazalt' => [
    'titlu' => 'Bazalt',
'bg' => 'rgb(140, 140, 140)',
'img' => 'bazalt.jpg',
'desc' => 'Bazaltul ia naștere prin erupția unui vulcan din lava fluidă și un conținut sărac în acid silicic.'
],
'calcar' => [
    'titlu' => 'Calcar',
'bg' => 'lightblue',
'img' => 'calcar.jpg',
'desc' => 'Calcarul este o rocă cu foarte multe variante. Roca masivă compactă este numită calcar, pe când roca poroasă este numită cretă.'
],
'creta' => [
    'titlu' => 'Creta',
'bg' => 'rgb(91, 170, 194)',
'img' => 'creta.jpg',
'desc' => 'Creta sau calcarul din Creta este o rocă sedimentară calcaroasă de origine organică, albă, poroasă și moale.'
],
'antracit' => [
    'titlu' => 'Antracit',
'bg' => 'rgb(240, 240, 240)',
'img' => 'antracit.jpg',
'desc' => 'Antracitul este o varietate de cărbune superior, de culoare neagră, cu cel mai mare conținut de carbon (92-98%).'
]
];

// 2. Logic: Which rock did the user click?
$tip = $_GET['tip'] ?? 'andezit';

// If the rock isn't in our list, show an error
if (!isset($rocks[$tip])) {
    die("<h1>Eroare: Roca '$tip' nu a fost găsită în baza de date.</h1>");
}

$currentRock = $rocks[$tip];

// 3. Display the page
renderHeader($currentRock['titlu'], "../");
?>

<body style="background-color: <?php echo $currentRock['bg']; ?>">
<h1> <?php echo $currentRock['titlu']; ?> </h1>

<p>
<?php echo $currentRock['desc']; ?>
</p>

<br>
<img src="../IMAGE/<?php echo $currentRock['img']; ?>" alt="<?php echo $currentRock['titlu']; ?>">
<br>

<div class="text-inapoi">
<a href="../test.php">
<img src="../IMAGE/roca_inapoi.png" width="200" height="150" alt="Înapoi">
</a>
</div>
</body>
</html>
