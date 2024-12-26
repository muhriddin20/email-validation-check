# Email Validation Check

Bu loyiha foydalanuvchilarning elektron pochta manzillarini tekshirish uchun interaktiv veb-sahifa yaratadi. Sayt foydalanuvchi kiritgan ma'lumotni real vaqt rejimida tekshirib, to'g'ri yoki noto'g'ri ekanligini ko'rsatadi.

## Loyihada ishlatilgan texnologiyalar

### HTML
- **Struktura**: Sahifaga asosiy tuzilma yaratish uchun ishlatilgan.
- **Tarkib**:
  - **Header**: Sarlavha matni.
  - **Form**: Elektron pochta manzilini kiritish uchun input maydoni va tekshirish natijasini ko'rsatish uchun `span` elementi.

### CSS
- **Dizayn**:
  - Minimalistik va zamonaviy ko'rinish.
  - **Inter** shriftidan foydalanilgan.
  - Orqa fon rang sifatida quyuq ko'k (#243642).
- **Responsivlik**:
  - Barcha ekran o'lchamlariga moslashadigan dizayn.
  - `Flexbox` yordamida elementlarning joylashuvi sozlangan.
- **Animatsiyalar**:
  - Yaroqli va yaroqsiz elektron pochta manzili uchun turli xil ranglar va ikonlar ishlatilgan.

### JavaScript
- **Interaktivlik**:
  - Foydalanuvchi input maydoniga ma'lumot kiritganda hodisalarni kuzatish.
  - Elektron pochta manzillari uchun maxsus regex (regular expression) tekshiruvi.
- **Funktsiyalar**:
  - Yaroqli manzillar uchun "valid" klassi qo'shiladi.
  - Yaroqsiz manzillar uchun "invalid" klassi qo'shiladi.
  - Bo'sh inputda hech qanday xabar ko'rsatilmaydi.
