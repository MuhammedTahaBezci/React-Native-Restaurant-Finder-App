# Getir Sepeti - Restaurant Finder App

Getir Sepeti, İstanbul'daki restoranları arayabileceğiniz ve detaylarını görüntüleyebileceğiniz bir React Native uygulamasıdır. Bu uygulama, Yelp API'sini kullanarak restoran bilgilerini getirir ve kullanıcıya sunar.

## Özellikler

- Restoranları arayabilme
- Restoranları fiyat aralığına göre filtreleyebilme
- Restoran detaylarını görüntüleyebilme
- Yelp API entegrasyonu

## Kurulum

1. **Depoyu klonlayın:**

   ```sh
   git clone https://github.com/yourusername/getir-sepeti.git
   cd getir-sepeti

2. **Gerekli kütüphaneleri indirin:**

    npm install
    npm install @react-navigation/native
    npm install @react-navigation/native-stack
    npx expo install react-native-screens react-native-safe-area-context
    npm i axios

3. **Uygulamayı çalıştırın:**

    npx expo start

## Kullanım

    Mobil cihazınızda Expo Go uygulamasını açın.
    expo start komutu tarafından oluşturulan QR kodunu tarayın.
    Arama çubuğunu kullanarak İstanbul'daki restoranları bulun.
    Sonuç listesinden bir restorana tıklayarak restoran detaylarını görüntüleyin.

## Proje Yapısı

        restaurant/
    ├── api/
    │   └── yelp.js
    ├── assets/
    ├── components/
    │   ├── ResultDetail.js
    │   ├── ResultList.js
    │   └── SearchBar.js
    ├── hooks/
    │   └── UseResults.js
    ├── restaurant/
    │   ├── screens/
    │   │   ├── ResultShowScreen.js
    │   │   └── SearchScreen.js
    ├── node_modules/
    ├── .gitignore
    ├── App.js
    ├── app.json
    ├── babel.config.js
    ├── eas.json
    ├── package-lock.json
    ├── package.json
    └── README.md

## Dosyaların Açıklaması

    api/yelp.js: Yelp API'ye istek yapmak için kullanılan Axios instance'ı.
    components/ResultDetail.js: Bireysel restoran detaylarını görüntüleyen bileşen.
    components/ResultList.js: Restoran listesini görüntüleyen bileşen.
    components/SearchBar.js: Arama girişi bileşeni.
    hooks/UseResults.js: Yelp API'den restoran verilerini almak için kullanılan özel hook.
    restaurant/screens/ResultShowScreen.js: Seçilen bir restoran hakkında ayrıntılı bilgi görüntüleyen ekran.
    restaurant/screens/SearchScreen.js: Restoran arama ve arama sonuçlarını görüntüleme ekranı.

## Kütüphaneler

    React: Kullanıcı arayüzleri oluşturmak için JavaScript kütüphanesi.
    React Native: React kullanarak yerel uygulamalar oluşturmak için framework.
    React Navigation: React Native uygulamaları için yönlendirme ve navigasyon kütüphanesi.
    Axios: İstek yapmak için Promise tabanlı HTTP istemcisi.
    Expo: Evrensel React uygulamaları yapmak için platform.
    Yelp API: Yelp'in iş verilerine erişim sağlayan API.
    @react-navigation/native: React Navigation kütüphanesi için temel bağımlılık.
    @react-navigation/native-stack: Native stack navigator için bağımlılık.
    react-native-screens: React Navigation performansını artırmak için.
    react-native-safe-area-context: React Native bileşenleri için güvenli alan desteği.

## Proje Açıklaması

Getir Sepeti, kullanıcıların İstanbul'daki restoranları kolayca bulmalarını sağlayan bir mobil uygulamadır. 
Uygulama, kullanıcılara restoranların fiyat aralıklarına göre filtrelenmiş listelerini sunar. Kullanıcılar, bir restoranı seçtiklerinde, 
restoran hakkında daha fazla bilgiye ulaşabilirler. Bu proje, React Native ve Expo kullanılarak geliştirilmiş olup, Yelp API'den restoran verilerini çekmektedir. 
Proje, bileşen tabanlı mimariyi benimseyerek, kullanıcı arayüzünü modüler ve yeniden kullanılabilir hale getirmektedir.
