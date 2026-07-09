# Synapsion Group - Web Sitesi

Synapsion Group için React + TypeScript ile geliştirilmiş profesyonel web sitesi şablonu.

## Özellikler

- **Modern Stack**: React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobil, tablet ve masaüstü uyumlu
- **Koyu Tema**: Profesyonel ve teknik görünüm
- **Hızlı Performans**: Vite ile optimize edilmiş build
- **Bileşen Tabanlı**: Yeniden kullanılabilir React bileşenleri
- **SEO Dostu**: Semantik HTML yapısı

## Sayfalar

- **Anasayfa**: Hero section, hizmetler özeti, istatistikler
- **Hizmetler**: Tüm hizmet detayları
- **İletişim**: İletişim formu ve iletişim bilgileri

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build oluşturun
npm run build

# Build'i önizleyin
npm run preview
```

## Proje Yapısı

```
src/
├── components/      # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/          # Sayfa bileşenleri
│   ├── Home.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx         # Ana uygulama ve routing
├── main.tsx        # Entry point
└── index.css       # Global stiller
```

## Tailwind CSS Tema

Özel renkler:
- `dark-950` - En koyu arka plan
- `accent-blue` - Ana vurgu rengi (#0f62fe)
- `accent-cyan` - İkincil vurgu (#00bcd4)
- `accent-orange` - Ek vurgu (#ff6b35)

## Bileşenler

### Header
- Responsive navigasyon
- Mobile menü
- Logo

### Hero
- Giriş başlığı
- İstatistikler
- CTA butonları

### Services
- 6 hizmet kartı
- Özellikler listesi
- Hover animasyonları

### Contact
- İletişim formu
- İletişim bilgileri
- Form validasyonu

## Customization

### Renkleri Değiştirin
`tailwind.config.js` dosyasında renkleri güncelleyin:

```js
colors: {
  accent: {
    blue: '#0f62fe',
    cyan: '#00bcd4',
    orange: '#ff6b35',
  }
}
```

### İçeriği Güncelleyin
- Hizmet bilgileri: `src/components/Services.tsx`
- İletişim detayları: `src/components/Contact.tsx`
- Şirket bilgileri: `src/components/Hero.tsx`

## Environment Variables

Gerekirse `.env.local` dosyası oluşturun:

```env
VITE_API_URL=your_api_url
```

## Build ve Deploy

```bash
# Production build
npm run build

# Build klasörü Netlify, Vercel, GitHub Pages vb. deploy edin
```

## License

Synapsion Group tarafından geliştirilmiştir.
