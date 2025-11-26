const { create } = require('@open-wa/wa-automate');
const path = require('path');

function start(client) {
console.log('✅ Bot siap digunakan dengan menu teks manual, gambar, dan debug!');


client.onMessage(async message => {
    try {
        const chatId = message.from;
        const raw = message.body || '';
        const lower = raw.toLowerCase();

        // Debug log pesan masuk
        console.log('--- New Message ---');
        console.log('from:', message.from);
        console.log('body raw:', raw);
        console.log('-------------------');

        // Menu utama
        if (lower === 'menu') {
            const menuText = 


`Menu Utama Seguntang Kopi:

1. Produk
2. Promo
3. Kontak

Ketik nomor atau nama menu untuk memilih.`;
await client.sendText(chatId, menuText);
return;
}


        // Submenu Produk
        if (lower === 'produk' || lower === '1') {
            const produkText =


`Submenu Produk:

1. Kopi Arabica
2. Snack & Donut
3. Kembali

Ketik nomor atau nama produk untuk melihat detail.`;
await client.sendText(chatId, produkText);
return;
}


        // Produk: Kopi
        if (lower === 'kopi arabica' || lower === 'kopi' || lower === '1') {
            const imgPath = path.join(__dirname, 'images/kopi.jpg');
            await client.sendImage(chatId, imgPath, 'kopi.jpg', 'Kopi Arabica Seguntang: 100% biji kopi lokal premium.');
            return;
        }

        // Produk: Snack
        if (lower === 'snack & donut' || lower === 'snack' || lower === '2') {
            const imgPath = path.join(__dirname, 'images/snack.jpg');
            await client.sendImage(chatId, imgPath, 'snack.jpg', 'Snack & Donut Seguntang: Cocok untuk teman minum kopi.');
            return;
        }

        // Kembali ke menu utama
        if (lower === 'kembali' || lower === '3') {
            const menuText = 


`Menu Utama Seguntang Kopi:

1. Produk
2. Promo
3. Kontak

Ketik nomor atau nama menu untuk memilih.`;
await client.sendText(chatId, menuText);
return;
}


        // Promo
        if (lower === 'promo' || lower === '2') {
            await client.sendText(chatId, 'Promo terbaru: Beli 1 gratis 1 setiap Jumat!');
            return;
        }

        // Kontak
        if (lower === 'kontak' || lower === '3') {
            await client.sendText(chatId, 'Kontak kami: 0812-XXXX-XXXX');
            return;
        }

        // Fallback
        await client.sendText(chatId, 'Pesan diterima. Ketik "menu" untuk melihat menu utama.');
    } catch (err) {
        console.error('handler error:', err);
    }
});


}

// Create client
create({
sessionId: 'SeguntangBotTeksManual',
multiDevice: true,
authTimeout: 0,
blockCrashLogs: false,
disableSpins: false,
headless: true,
qrTimeout: 0,
useChrome: true
}).then(client => start(client)).catch(err => console.error('Client error:', err));
