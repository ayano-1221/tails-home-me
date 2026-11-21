// URLから入力内容を取得
const params = new URLSearchParams(location.search);

// 入力内容を取得
const name = params.get('name');
const kana = params.get('kana');
const tel = params.get('tel');
const email = params.get('email');
const number = params.get('人数');
const message = params.get('message');

// コンソールに表示
console.log('お名前：' + name);
console.log('ふりがな：' + kana);
console.log('電話番号：' + tel);
console.log('メールアドレス：' + email);
console.log('ご来場人数：' + number);
console.log('ご質問・ご相談：' + message);
