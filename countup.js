/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Application: countup v0.0.0.1
    * https://gunessahin.github.io/
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Copyright gunessahin@outlook.com.tr
    * Licence (https://github.com/gunessahin)
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

(function () {
  // tum sayaclar
  var sayaclar = document.querySelectorAll('.sayac')

  // toplam ozellik uzunlugu
  var toplamOzellik = sayaclar.length

  // Data özellikleri aranıyor
  for (var index = 0; index < toplamOzellik; index++) {

    // her ozelligin html elementi
    var element = sayaclar[index]

    // Data özellikleri alındı
    var baslangic = parseInt(element.attributes.getNamedItem('data-baslangic').value)
    var bitis = parseInt(element.attributes.getNamedItem('data-bitis').value)
    var adim = parseInt(element.attributes.getNamedItem('data-adim').value)
    var hiz = parseInt(element.attributes.getNamedItem('data-hiz').value)

    // İşlemleri başlat
    yazdir(baslangic, bitis, adim, hiz, element)

  }

  // İşlemleri Başlatır
  function yazdir(baslangic, bitis, adim, hiz, element) {

    // Başlangıç indexi
    var index = baslangic

    // Sayaıcı yukarı doğru yönlendirir
    function sayici() {

      if (index <= bitis){
        ekranayaz(index)
        setTimeout(sayici, hiz)
        index += adim
      }        
    }

    // Ekrana parametreyi yazar
    function ekranayaz(parametre) {
      element.innerHTML = parametre

    }

    // Bekleme süresi
    setTimeout(sayici, hiz)
  }
})()