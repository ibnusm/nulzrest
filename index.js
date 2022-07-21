const express = require("express");
const app = express();

//set json response space
app.set('json spaces', 4);


//index
app.get("/", (req, res) => {
  const ok = {
    status: 200,
    author: "nulz404",
    bucin: "/api/quote/bucin",
    galau: "/api/quote/galau",
    kehidupan: "/api/quote/kehidupan"
  };
  res.header("Content-Type",'application/json');
  res.json(ok);
});

//params error
let paramErrResponse = {
	status: 400,
	result: "error",
	message: "params error"
}
app.get('/api', (req, res) => {
	res.send(paramErrResponse)
})
app.get('/api/quote', (req, res) => {
	res.send(paramErrResponse)
})


//api
app.get("/api/quote/bucin", (req, res) => {
  let bucin = {
    bucinQuotes: [
      "Jika aku bisa menjadi segalanya, aku ingin menjadi air mata kamu. Lalu aku bisa lahir di matamu, hidup di pipimu, dan mati di bibirmu.",
      "Cinta aku tuh kaya kamera, kalau udah fokus ke satu orang yang lain pasti ngeblur.",
      "Aku lebih suka apel daripada anggur, soalnya aku lebih suka ngapelin kamu daripada nganggurin kamu.",
      "Sering sih dibikin makan hati, tapi menyadari kamu masih di sini bikin bahagia lagi.",
      "Sering sih dibikin makan hati, tapi menyadari kamu masih di sini bikin bahagia lagi.",
      "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
      "Jam tidurku hancur dirusak rindu.",
      "Cukup jaringan aja yang hilang, kamu jangan.",
      "Aku rela menunggu, meski kamu tak memberiku kabar, bahkan aku sadar jika ingin kamu tinggalkan.",
      "Sampai detik ini kamu masih menjadi alasan kenapa hatiku belum mau menerima siapapun.",
      "Entah mengapa tiap melihat kamu, aku keingat akan ujian. Susah sih, tetapi tetap saja harus diperjuangkan demi masa depan.",
      "Semua orang bisa bilang cinta, akan tetapi tak semua orang bisa setia.",
      "Aku mencintaimu lebih dari arti kata-kata, mengungkapkan perasaan, dan memikirkan pikiran.",
      "Hidup tidak selalu mudah, tapi jauh lebih mudah dengan kamu di sisiku.",
      "Hanya dengan hitungan jam kita akan bertemu lagi, tapi rasanya sangat lama bagaikan satu dekade. Tak terbayang seberapa girangnya hati ini berada dalam pelukanmu.",
      "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
      "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
      "Jomlo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
      "Jomlo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
      "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
      "Pacar orang adalah jodoh kita yang tertunda.",
      "Jomlo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
      "Romeo rela mati untuk Juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
      "Aku mencari orang bukan dari kelebihannya, tapi aku mencari orang dari ketulusan hatinya.",
      "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
      "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
      "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
      "Sayang... tugas aku hanya mencintaimu, bukan melawan takdir.",
      "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
      "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
      "Aku ingin menjadi satu-satunya, bukan salah satunya.",
      "Aku tidak bisa berjanji untuk menjadi yang baik, tapi aku berjanji akan selalu mendampingi kamu.",
      "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
      "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
      "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
      "Rindu tidak hanya muncul karena jarak yang terpisah, tapi juga karena keinginan yang tidak terwujud.",
      "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
      "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu, tapi aku yakin kalau nanti kita pasti bisa bersatu.",
      "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
      "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, tapi tetap saja di hatiku kita selalu dekat.",
      "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
      "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
      "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
      "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
      "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
      "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
      "Tahu gak perbedaan pensil sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
      "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
      "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
      "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
      "Aku gak sedih kok kalo besok hari Senin, aku sedihnya kalau gak ketemu kamu.",
      "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
      "Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finish-nya.",
      "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
      "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    ]
  };
  res.header("Content-Type",'application/json');
  res.json(bucin);
});

app.get("/api/quote/galau", (req, res) => {
  let galau = {
    galauQuotes: [
      "Sampai detik ini kamu masih menjadi alasan kenapa hatiku belum mau menerima siapa pun.",
      "Sekeras apapun aku berlari dari kenyataan. Sekeras apapun aku berlari dari takdir. Sekeras apapun aku mencari jawaban dari semua pertanyaan, jawaban dari semua itu cuma ada satu yaitu kau hanya aku yang terlambat tahu.",
      "Waktu adalah satu-satunya yang dapat menyembuhkan patah hati. ~Taylor Swift",
      "Sembuhkan dulu hatimu sebelum memulai kisah yang baru lagi.",
      "Cinta bukanlah soal fisik yang sempurna, melainkan hati dan penerimaan seutuhnya.",
      "Seandainya tidak ada badai, pelangi tidak akan muncul. Untuk itu, belajarlah dari badai yang menimpamu.",
      "Aku bukan pelampiasan di saat pemeran utama tidak ada.",
      "Berharap dan dikasih harapan itu sama sama sakit, kau tahu sakitnya karena apa? Karena harapan itu belum tentu sesuai dengan kenyataan.",
      "Semua bisa berakhir, orang berubah. Dan kamu tahu apa? Hidup kan terus berjalan.",
      "Karena hati tak perlu memilih, ia selalu tahu kemana harus berlabuh. ~Dee Lestari",
      "Udah tiga hari gak makan apa-apa. Soalnya gak ada yg ngingetin aku makan. ~Raditya Dika",
      "Dan sebenarnya, pacar orang adalah pacar kita juga, karena kita juga kan orang. ~Cak Lontong",
      "Cinta itu memang buta, tapi cinta tidak tuli. Cinta bisa bedakan mana suara honda jazz dengan honda supra.",
      "Mereka bilang cinta itu lebih penting dari uang, tapi pernahkan kamu membayar tagihan pakai pelukan?",
      "Hewan qurban aja dikorbanin lehernya ga sampai putus. Masa hubungan kita udah banyak berkorban akhirnya tetap putus. ~Babe Cabita",
      "Pacarku bilang aku gila, tapi anehnya dia mau sama saya.",
      "Bukannya aku nggak laku, tapi aku adalah jomblo bertahan yang hebat.",
      "Kamu adalah seseorang yang tidak akan pernah aku lupakan dalam hidupku. Karena kamu masih punya utang kepadaku.",
      "Tong sampah saja ada banyak isinya, masak hati aku satu saja nggak ada isinya.",
      "Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.",
      "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja.",
      "Cara dia ngelihat cinta akan berbeda semenjak patah hati itu. ~Raditya Dika",
      "Denganmu, jatuh cinta adalah patah hati paling sengaja. ~Wira Nagara",
      "Barangkali Tuhan sedang tidak ingin kamu jatuh cinta. Agar kamu bisa mencintai dirimu lebih lama. ~Boy Chandra",
      "Bukannya aku tidak ingin menjadi pacarmu. Aku hanya ingin dipersatukan dengan cara yang benar.",
      "Lebih baik sendiri daripada berdua tapi tanpa kepastian.",
      "Maaf aku lupa ternyata aku bukan siapa-siapa.",
      "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri.",
      "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa.",
      "Maaf aku lupa ternyata aku bukan siapa-siapa.",
      "Sebagai teman lama, mungkin aku tak tahu kabarmu sekarang. Tapi, teman barumu mungkin tidak mengerti kisah masa lalumu seperti aku.",
      "Jika kamu dapat melihat hanya aku yang mengerti dirimu. ~Taylor Swift",
      "Sulit bagiku untuk mengatakan bahwa aku cemburu dengan caramu bahagia tanpaku. ~Labrinth",
      "Aku seharusnya tidak cemburu, karena kamu bahkan bukan milikku.",
      "Aku ga cemburu. Aku cuma ga suka ada orang lain yang bikin kamu ketawa selain aku. ~Radit & Jani",
      "Kita seperti domino. Aku jatuh padamu, dan kamu jatuh ke orang lain.",
      "Hal terberat yang aku lalui adalah melihatmu ada di pelukannya.",
      "Kamu adalah ketidakmungkinan yang aku semogakan.",
      "Sekilas mungkin aku terlihat tersenyum di matamu. Tapi sebenarnya hati ini menangis pilu melihat kamu dengan dia.",
      "Kecemburuan adalah perasaan cinta dan benci pada saat yang bersamaan. ~Drake",
    ]
  };
  res.header("Content-Type",'application/json');
  res.json(galau);
});

app.get("/api/quote/kehidupan", (req, res) => {
  let kehidupan = {
    kehidupanQuotes: [
      "Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.",
      "Hidup itu sederhana, kita yang membuatnya sulit.",
      "Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.",
      "Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin.",
      "Kenyataannya, ada tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.",
      "Tujuan hidup kita adalah menjadi bahagia.",
      "Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.",
      "Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.",
      "Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.",
      "Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.",
      "Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.",
      "Kehidupan adalah 10 persen apa yang terjadi pada Anda dan 90 persen adalah bagaimana Anda meresponnya",
      "Satu-satunya keterbatasan dalam hidup adalah perilaku yang buruk.",
      "Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.",
      "Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.",
      "Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan",
      "Satu-satunya sumber pengetahuan adalah pengalaman",
      "Saya selalu mencoba untuk mengubah kemalangan menjadi kesempatan",
      "Perjalanan 1000 mil dimulai dengan satu langkah kaki",
      "Seseorang yang pernah melakukan kesalahan dan tidak pernah memperbaikinya berarti Ia telah melakukan satu kesalahan lagi.",
      "Beberapa orang memimpikan kesuksesannya, sementara yang lainnya bangun setiap pagi untuk mewujudkan mimpinya",
      "Tidak ada perjuangan yang dilakukan tanpa rasa sakit, namun Anda harus percaya bahwa rasa sakit itu hanya sesaat saja dan akan diganti dengan kebahagiaan",
      "Anda seringkali lupa terhadap apa saja yang sudah dimiliki, tetapi selalu mengingat apa yang dimiliki orang lain",
      "Anda tidak akan pernah belajar sabar dan berani jika di dunia ini hanya ada kebahagiaan",
      "Maafkanlah sikap Anda ketika mengalami kegagalan dalam meraih mimpi dan percayalah akan ada mimpi lain yang lebih besar dan lebih baik dari mimpi Anda yang sudah dirancang sebelumnya",
      "Masa depan adalah milik Anda yang telah menyiapkannya dari hari ini",
      "Sekecil apapun nominalnya, uang akan cukup jika digunakan untuk HIDUP. Namun, sebesar apapun nominalnya, uang tidak akan pernah cukup jika digunakan untuk memenuhi GAYA HIDUP",
      "Kesabaran adalah obat terbaik untuk segala kesulitan",
      "Kedewasaan tidak dilihat dari usia, tetapi dilihat dari sikap dan tingkah laku",
      "Percaya diri adalah rahasia nomor satu dari kesuksesan",
      "Jika kapal Anda tidak kunjung datang maka berenanglah",
      "Kemanapun Anda pergi, lakukanlah segalanya dengan segenap hati.",
      "Bertambahnya usia bukan berarti kita memahami segalanya",
      "Keraguan membunuh lebih banyak harapan daripada kegagalan",
      "Siapapun bisa jadi apapun!",
      "Kata-kata Anda menunjukkan kualitas diri Anda",
      "Hati memiliki nalarnya sendiri, tetapi nalar tidak memiliki hati",
      "Majulah tanpa menyingkirkan orang lain. Naiklah tanpa menjatuhkan orang lain",
      "Pamer adalah ide yang bodoh untuk sebuah kemenangan",
      "Jika hanya mencari kesempurnaan, maka Anda tidak akan pernah tenang",
      "Hanya Saya yang dapat mengubah hidup Saya, tidak ada orang lain yang bisa melakukannya untuk Saya",
      "Bersyukurlah atas semua hal yang dimiliki sekarang karena Anda tidak pernah tahu kapan akan kehilangannya",
      'Hidup itu bukan tentang memiliki dan mendapatkan, tetapi tentang memberi serta menjadi "sesuatu"',
      "Jangan takut jika Anda berjalan lambat, takutlah jika hanya berdiam",
      "Terkadang Anda diuji bukan untuk menunjukkan kelemahan yang dimiliki, tetapi diuji untuk menemukan kekuatan yang ada di dalam diri",
      "Kita sibuk mencari yang sempurna, sampai-sampai melewatkan yang siap menerima apa adanya",
      "Beri nilai dari usahanya, bukan dari hasilnya. Baru Anda bisa menilai kehidupan",
    ]
  };
  res.header("Content-Type",'application/json');
  res.json(kehidupan)
});

let port = 8080;
app.listen(process.env.PORT || port, () => console.log(`Server is Running`));
