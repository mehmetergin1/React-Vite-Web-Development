# Yapay Zeka Destekli Bütçe & Harcama Takip Uygulaması

Bu proje, TNC Group Web Geliştirme ve Yapay Zeka Eğitim Programı kapsamında modern web teknolojileri ve Yapay Zeka (AI) asistanı desteği ile geliştirilmiştir.

## 🚀 Proje Açıklaması
Uygulama, kullanıcıların günlük gelir ve giderlerini kategorize ederek takip etmelerini sağlayan modern ve duyarlı (responsive) bir web uygulamasıdır. Girilen veriler tarayıcının `LocalStorage` belleğinde saklandığı için sayfa yenilense bile veriler kaybolmaz.

## 🛠️ Kullanılan Teknolojiler
- **Frontend Framework:** React (Vite tabanlı)
- **Stil Kütüphanesi:** Tailwind CSS
- **İkon Seti:** Lucide React
- **Veri Saklama:** HTML5 LocalStorage
- **Yayınlama Platformu:** Vercel / Netlify

## 🤖 Yapay Zekanın Kullanıldığı Aşamalar
Geliştirme sürecinde **Gemini / ChatGPT** asistan olarak aktif şekilde kullanılmıştır:
1. **Planlama & Mimari:** Uygulamanın bileşen (component) mimarisi ve LocalStorage veri formatı yapay zeka ile planlandı.
2. **Bileşen Üretimi:** `SummaryCards` ve `ExpenseForm` bileşenlerinin JSX ve Tailwind stil kodlarının ilk taslağı yapay zekaya ürettirildi.
3. **Hata Ayıklama (Debugging):** LocalStorage senkronizasyonu ve state güncellemelerinde yaşanan render hataları yapay zekadan alınan tavsiyelerle çözüldü.
4. **Dokümantasyon:** Proje dokümantasyonu ve README içeriği yapay zeka katkısıyla hazırlandı.
