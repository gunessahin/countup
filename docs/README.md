# Countup

Belirlenen sayıdan balayarak, belirlenen sayısaya kadar adım adım artan sayac.

![Countup](media/favicon.png)

## HTML Ornegi 

```HTML
<!DOCTYPE html>
<html lang="tr" dir="ltr">

<head>

    <!-- Meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Site Information -->
    <title>Count UP</title>
    <meta name="description" content="Sayac Kartı.">

</head>

<body>

    <!-- Sayaclar-->
    <div class="sayac" data-baslangic="1" data-bitis="3" data-adim="1" data-hiz="1000"></div>
    <div class="sayac" data-baslangic="1" data-bitis="8" data-adim="1" data-hiz="800"></div>
    <div class="sayac" data-baslangic="1" data-bitis="15" data-adim="1" data-hiz="400"></div>
    <div class="sayac" data-baslangic="1" data-bitis="12" data-adim="1" data-hiz="250"></div>
    <div class="sayac" data-baslangic="1" data-bitis="35" data-adim="1" data-hiz="125"></div>

    <!-- Kutuphane -->
    <link type="stylesheet" href="countup.css">
    <script type="text/javascript" src="countup.js"></script>

</body>

</html>
```