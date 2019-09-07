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

  // Bir html elementinin sayfa üzerinde görünümü izler
  var GorunumDinleyici = function (element, callback) {
    this._el = element
    this._cb = callback
    this._at = false
    this._hasBeenVisible = false
    this._hasBeenInvisible = true
    var _me = this

    window.onscroll = function () {
      var q
      for (q in GorunumDinleyici.queue.onvisible) {
        GorunumDinleyici.queue.onvisible[q].call()
      }
      for (q in GorunumDinleyici.queue.oninvisible) {
        GorunumDinleyici.queue.oninvisible[q].call()
      }
    }

    return {
      onvisible: function () {
        GorunumDinleyici.queue.onvisible.push(function () {
          if (!_me._at && _me._hasBeenInvisible && (window.pageYOffset + window.innerHeight) > _me._el.offsetTop && window.pageYOffset < (_me._el.offsetTop + _me._el.scrollHeight)) {
            _me._cb.call()
            _me._at = true
            _me._hasBeenVisible = true
          }
        })
        GorunumDinleyici.queue.oninvisible.push(function () {
          if (_me._hasBeenVisible && ((window.pageYOffset + window.innerHeight) < _me._el.offsetTop || window.pageYOffset > (_me._el.offsetTop + _me._el.scrollHeight))) {
            _me._hasBeenInvisible = true
            _me._hasBeenVisible = false
            _me._at = false
          }
        })
      },
      oninvisible: function () {
        GorunumDinleyici.queue.oninvisible.push(function () {
          if (!_me._at && _me._hasBeenVisible && ((window.pageYOffset + window.innerHeight) < _me._el.offsetTop || window.pageYOffset > (_me._el.offsetTop + _me._el.scrollHeight))) {
            _me._cb.call()
            _me._at = true
            _me._hasBeenInvisible = true
          }
        })
        GorunumDinleyici.queue.onvisible.push(function () {
          if (_me._hasBeenInvisible && (window.pageYOffset + window.innerHeight) > _me._el.offsetTop && window.pageYOffset < (_me._el.offsetTop + _me._el.scrollHeight)) {
            _me._hasBeenVisible = true
            _me._hasBeenInvisible = false
            _me._at = false
          }
        })
      }
    }
  }
  GorunumDinleyici.queue = {
    onvisible: [],
    oninvisible: []
  }

  // Element gorundugunde
  function gorundugunde(element, event) {

    var listener = new GorunumDinleyici(element, function () {
      calistir(element)
    })

    if (listener['on' + event.toLowerCase()])
      return listener['on' + event.toLowerCase()].call()
  }

  // tum sayaclar
  var sayaclar = document.querySelectorAll('.sayac')

  // toplam ozellik uzunlugu
  var toplamOzellik = sayaclar.length

  // Data özellikleri aranıyor
  for (var index = 0; index < toplamOzellik; index++) {

    // her ozelligin html elementi
    var element = sayaclar[index]

    // element ekranda görüntülendiğinde işlem yap
    gorundugunde(element, 'visible')

    // Tüm nesler görünüyor ise, çalıştırır.
    calistir(element)
  }

  // Sayacı başlatır
  function calistir(element) {

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

      if (index <= bitis) {
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