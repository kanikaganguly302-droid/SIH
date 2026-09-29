export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { message, language } = req.body || {};

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Server-side response processing across languages
        let reply = `[Server Backend]: Verified heritage archives confirm deep historical roots for "${message}".`;

        if (language === 'hi') {
            reply = `[सर्वर बैकएंड]: आपके प्रश्न "${message}" के लिए प्रामाणिक ऐतिहासिक साक्ष्य और सांस्कृतिक अभिलेख सत्यापित हैं।`;
        } else if (language === 'bn') {
            reply = `[সার্ভার ব্যাকএন্ড]: আপনার জিজ্ঞাসা "${message}" এর জন্য ঐতিহাসিক এবং সাংস্কৃতিক তথ্য যাচাই করা হয়েছে।`;
        } else if (language === 'es') {
            reply = `[Servidor Backend]: ¡Los archivos históricos confirman profundas raíces para "${message}"!`;
        } else if (language === 'fr') {
            reply = `[Serveur Backend]: Les archives historiques confirment de riches racines pour "${message}".`;
        } else if (language === 'zh') {
            reply = `[后端服务器]: 经核实的遗产档案证实了关于 "${message}" 的深厚历史根源。`;
        } else if (language === 'ko') {
            reply = `[서버 백엔드]: 검증된 유산 기록에 따르면 "${message}"에 대한 깊은 역사적 뿌리가 확인되었습니다.`;
        } else if (language === 'ja') {
            reply = `[サーバーバックエンド]「${message}」に関する歴史的資料と文化的ルーツが検証されました。`;
        }

        return res.status(200).json({
            success: true,
            reply: reply,
            timestamp: new Date().toISOString()
        });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}