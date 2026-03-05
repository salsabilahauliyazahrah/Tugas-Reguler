function hitungLifePath() {
    let tanggal = document.getElementById("tanggal").value;
    let bulan = document.getElementById("bulan").value;
    let tahun = document.getElementById("tahun").value;

    //menampilkan inputan ke bagian output
    document.getElementById("output-tanggal").value = tanggal;
    document.getElementById("output-bulan").value = bulan;
    document.getElementById("output-tahun").value = tahun;

    //menggabungkan semua angka
    let gabung = tanggal + bulan + tahun;

    //menjumlahkan digit yang ada
    let total = 0;
    for (let i = 0; i < gabung.length; i++) {
        total += parseInt(gabung[i]);
    }

    document.getElementById("hasil1").value = total;

    //melakukan reduksi sampai 1 digit
    let hasilAkhir = total;
    while (hasilAkhir > 9) {
        let digit = hasilAkhir.toString().split("");
        hasilAkhir = 0;
        for (let i = 0; i < digit.length; i++) {
            hasilAkhir += parseInt(digit[i]);
        }
    }

    document.getElementById("hasil2").value = hasilAkhir;
    document.getElementById("hasilAkhir").value = hasilAkhir;

    let pesan = "";

    if (hasilAkhir === 1) {
        pesan = `
        Basic Personality: 
        Seorang pendamai yang sensitif, tahu apa yang orang lain butuhkan dan rasakan, sehingga memiliki bakat diplomasi dan berkomunikasi secara taktis.
        Pribadi penyabar dan mampu bekerja sama, bekerja dengan baik bersama banyak orang, menciptakan harmoni di tengah banyaknya opini yang berbeda.
        Menyukai musik dan seni, menyukai lingkungan yang harmonis.
        Mampu memenuhi kebutuhan emosional sesama dengan begitu baik dan berkesan.
        Membutuhkan keamanan dan kenyamanan, ingin selalu ditemani mereka yang disayangi.
        Pribadi yang perfeksionis ketika berurusan dengan kenyamanan tempat tinggal pribadi.
        Bisa menjadi teman yang baik dan memiliki selera humor yang baik.

        Life Theme: 
        Gabungan dari ambisi, kreativitas kegigihan dan naluri kepemimpinan menjadikan pemilik Life Path Number ini seorang pemimpin alami, mereka menjadi seorang yang ‘membuka jalan’ bagi orang lain, seorang inisiator, kreator dan inovator.
        
        Passion: 
        Pemilik Life Path Number ini menyukai kendali, kebebasan, orisinalitas dan menjadi nomor satu atau yang pertama dalam apa yang dikerjakannya.
    
        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya dipenuhi rasa percaya diri, mendapatkan peluang untuk tampil dan memimpin, mengutarakan pendapatnya dan menjadi dirinya sendiri apa adanya.
        
        Weak Point: 
        Energi Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi rasa minder, tidak percaya diri, dibatasi ruang geraknya, ‘dibungkam’ dan diabaikan.
        
        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang kurang mendapatkan pengakuan, sering dikritik, ditekan, dibatasi ruang gerak dan tidak bisa mengekspresikan diri sebagai diri-sendiri.
       
        Over Expressed Theme: 
        Tema kehidupan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme yang menjadikan pemiliknya ingin melampiaskan ketidakmampuannya mengekspresikan diri di masa lalu dalam kehidupan masa depannya, atau bisa juga karena ada terlalu banyak energi dari angka ini di dalam chart, menjadikan pemilik Life Path Number ini egois, ingin mendominasi lingkungan, tidak sabaran, kasar dan agresif dalam menunjukkan ego atau keinginan.
       
        Siddhi Frequency Theme: 
        Ketika energi dari Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang pemimpin ideal, percaya diri, menjalani kehidupan sesuai yang diyakininya, ketika berada di situasi bersama orang banyak ia secara otomatis dijadikan pemimpin oleh mereka yang berada di lingkungan tersebut.
        
        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan kebimbangan, sulit membuat keputusan, bergantung pada orang lain, tidak percaya diri.
        
        Dalam versi over expressed, pemilih Life Path Number ini sulit percaya pada orang lain, ia banyak menanggung beban kelelahan sendirian karena menanggung banyak hal yang tidak bisa ia percayakan pada orang lain. Ada rasa takut jika yang ia percayakan pada orang lain tidak sejalan dengan sifat perfeksionisnya.        
        `;
    } else if (hasilAkhir === 2) {
        pesan = `
        Basic Personality:
        Pribadi yang sensitif dan penuh empati, mampu memahami perasaan serta kebutuhan orang lain. Memiliki bakat dalam diplomasi, komunikasi, dan bekerja sama sehingga mampu menciptakan harmoni di lingkungan sosial. Menyukai seni dan suasana yang nyaman, serta menghargai hubungan yang hangat dengan orang terdekat. Selain itu, dikenal sabar, perfeksionis terhadap kenyamanan pribadi, dan memiliki selera humor yang baik.

        Life Theme: 
        Gabungan dari sifat penyabar, sensitif, penyuka kedamaian, peka pada kebutuhan sesama, dan suka berkontribusi, menjadikan pemilik Life Path Number ini seorang juru damai, penolong, kontributor dan pendukung yang baik.

        Passion: 
        Pemilik Life Path Number ini menyukai harmoni, kedamaian, kenyamanan, seni, kontribusi, suka menolong dan menyukai suasana yang mendukung satu sama lain.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya matang secara emosi, mendapatkan ruang untuk menegakkan kedamaian dan harmoni di dalam lingkungan tinggalnya, bisa berkontribusi mendukung sesama.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi luka batin, diabaikan, hidup di dalam konflik dan tidak berkontribusi.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang sering kurang mendapatkan perhatian, tidak dipahami, sering mendapatkan hinaan/ejekan verbal atau pun non-verbal, tidak diijinkan berkontribusi.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme atau bisa juga karena ada terlalu banyak energi dari angka ini di dalam chart, yang menjadikan pemilik Life Path Number ini terus mengalah, menghindari konflik agar tidak kehilangan kedamaian, memendam banyak ‘api dalam sekam’.

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang juru damai, kontributor dan penasihat yang ideal, ketika berada di situasi bersama orang banyak ia secara otomatis dicari oleh lingkungan yang membutuhkan peran dukungan vitalnya untuk membantu mereka.

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan sifat sensitif, mudah tersinggung, membawa persoalan pribadi berkepanjangan.

        Dalam versi over expressed, pemilik Life Path Number ini sering kali mengalah dalam konflik dan bahkan mengalah untuk membiarkan pihak lain diuntungkan atas sesuatu yang ia sendirilah yang mengerjakannya, dengan kata lain ia yang bekerja keras tapi orang lain yang diuntungkan karenanya (terlupakan).
        `;
    } else if (hasilAkhir === 3) {
        pesan = `
        Basic Personality:
        Pribadi yang kreatif dan ekspresif, senang berkomunikasi serta memiliki selera humor yang baik. Cenderung optimis, penuh antusiasme, dan mampu menginspirasi orang lain dengan energi positifnya. Menyukai suasana ceria, keramaian, dan aktivitas sosial, serta pandai menciptakan lingkungan yang menyenangkan.

        Life Theme: 
        Gabungan dari sifat kreatif, komunikatif, optimis, antusias dan aktif, menjadikan pemilik Life Path Number ini seorang peramai suasana dan seorang komunikator publik (penyampai pesan) yang baik.

        Passion: 
        Pemilik Life Path Number ini menyukai keceriaan, suasana santai, semangat, kebebasan, keramaian, dan bersosialisasi.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya berjiwa santai (tidak tegang), mendapatkan ruang untuk mengekspresikan dirinya sambil mengekspresikan kreativitasnya dan menginpirasi sesama.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi rasa pesimis, ketakutan, kaku, pasif cari aman dan menutup diri.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang sering diancam, dilarang dalam melakukan yang diinginkan dan dilarang mengekspresikan diri, jarang didengarkan dan dianggap remeh/tidak mampu, yang menjadikan mereka menutup diri dan mudah terluka, sering kali sampai ke tahap tidak peduli pada diri sendiri, merasa apa-apa yang dilakukan salah dan tidak becus.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme yang menjadikan pemiliknya seenaknya saja dan berantakan, atau bisa juga karena ada terlalu banyak energi angka ini di dalam chart, menjadikan pemilik Life Path Number ini rapuh, tidak mandiri, sulit berkomitmen dan berkonsentrasi pada hal detail.

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang inspirator, penyemangat, penyampai pesan dan pilar dari komunitas, ketika berada di situasi bersama orang banyak ia secara otomatis dicari oleh lingkungan yang membutuhkan semangat dan keceriaan khasnya untuk menghidupkan suasana.

        Shadow Frequency Theme: 
        Ketika energi Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan kesendirian, menutup diri, rendah diri dan pasif-pesimis.

        Dalam versi over expressed, pemilik Life Path Number ini sering kali mendominasi suasana dengan ciri khasnya dan mengaburkan suasana fokus di sebuah tempat menjadi penuh kekacauan dan menuai kritik dari banyak pihak.        
        `;
    } else if (hasilAkhir === 4) {  
        pesan = `
        Basic Personality:
        Pribadi yang praktis, disiplin, dan berpikir logis dalam mengambil keputusan. Menjunjung tinggi kejujuran, keadilan, serta komitmen, sehingga dikenal dapat diandalkan dan loyal. Tekun bekerja keras untuk membangun fondasi yang kuat dalam hidup, memiliki kemampuan mengelola keuangan dengan baik, serta mampu bertahan dan berkembang meskipun menghadapi berbagai keterbatasan.

        Life Theme: 
        Gabungan dari sifat praktis, membumi, tegas, sistematis, teratur, fokus, terkendali, berkomitmen, adil dan pekerja keras, menjadikan pemilik Life Path Number ini seorang pemimpin-pekerja keras yang memimpin layaknya seorang kepala keluarga teladan.

        Passion: 
        Pemilik Life Path Number ini menyukai keteraturan, kepraktisan, detail, efisiensi, kejelasan, keadilan, formalitas.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya fokus, tegas, disiplin, efisien, mendapatkan ruang untuk mengatur aktivitasnya sendiri dalam kendalinya tanpa campur tangan terlalu banyak pihak.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi rasa malas, tidak fokus, terlalu santai, manja dan enggan fokus pada detail.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang sering dilarang dalam melakukan yang diinginkan tanpa mendapatkan kejelasan mengapa ia dilarang, sehingga ada kejelasan yang hilang dalam perspektif tumbuh-kembangnya tentang batasan dan fleksibilitas, mereka juga sering kali dikritik oleh lingkungan atas apa yang dilakukannya yang membuat mereka jadi perfeksionis dan memikirkan hal mendetail karena mereka takut disalahkan.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme yang menjadikan pemiliknya menjadi kaku, keras hati, atau bisa juga karena ada terlalu banyak energi angka ini di dalam chart, membuatnya jadi sulit menerima perubahan dan takut pada ketidakpastian,

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang pengawas yang baik, pekerja praktis-teliti yang bisa diandalkan, ketika berada di situasi bersama orang banyak ia secara otomatis dicari oleh lingkungan yang membutuhkan ketelitian dan kemampuan fokusnya untuk mengerjakan perkara cermat.

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan rasa malas, enggan fokus pada detail, semaunya dan tidak praktis/asal-asalan.

        Dalam versi over expressed, pemilik Life Path Number ini sering kali kaku dan menjadi sosok yang vokal menentang perubahan, mereka kemudian dikenal sebagai sosok keras kepala yang memertahankan yang mereka anggap benar, meski realita di luar dirinya sudah tidak sejalan.        
        `;
    } else if (hasilAkhir === 5) {
        pesan = ` 
        Basic Personality:
        Pribadi yang menyukai kebebasan, petualangan, dan berbagai pengalaman baru. Memiliki rasa ingin tahu yang tinggi, mudah bergaul, serta menikmati perubahan dan tantangan. Dikenal sebagai sosok yang energik, inspiratif, dan multitalenta, namun kurang menyukai keterikatan atau batasan yang terlalu ketat.

        Life Theme: 
        Gabungan dari sifat penyuka kebebasan, mudah penasaran dan serba bisa, menjadikan pemilik Life Path Number ini seorang petualang yang suka mencoba hal baru dan terlibat dalam berbagai aktivitas, namun tidak suka terikat atau diatur.

        Passion: 
        Pemilik Life Path Number ini menyukai kebebasan dan mencoba hal baru.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya mendapat ruang untuk bertualang dan mencoba berbagai hal baru.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi rasa lesu, tidak bergairah, enggan ‘keluar’ dan mencoba hal baru.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang sering dilarang dalam mencoba dan berekspresi, ada banyak aturan yang memenjarakan jiwanya sehingga ia frustrasi dan memutuskan untuk ‘diam’.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme atau terlalu banyak energi ini di dalam chart, yang menjadikan pemiliknya menjadi lepas kendali, mudah bosan dan mudah terjebak pada kebiasaan buruk, kecanduan dan larut pada kesenangan duniawi berlebih, seenaknya, tidak mau diatur dan merasa paling benar sendiri sampai menekan orang lain di sekitar.

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang petualang serba bisa yang mencoba berbagai hal baru sambil berkontribusi di tempat dimana dia tinggal tanpa pamrih, ketika berada di situasi bersama orang banyak ia secara otomatis dicari oleh lingkungan yang membutuhkan kemampuan adaptasi dan serba bisanya untuk mewakili mereka dalam hal apa pun yang dirasa bisa dipercayakan padanya.

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan rendahnya gairah hidup. kaku, sulit untuk menuntaskan berbagai hal dalam hidup, ada saja halangan muncul entah dari mana membuatnya cemas dan ketakutan.

        Dalam versi over expressed, pemilik Life Path Number ini sering kali menjadi sosok yang seenaknya menyuarakan perubahan, tidak memiliki prinsip yang jelas, tidak menyukai komitmen dan akhirnya larut mencoba berbagai hal tanpa kejelasan hanya untuk memuaskan rasa penasarannya dan orang lambat laun kehilangan kepercayaan padanya.        
        `;
    } else if (hasilAkhir === 6) {
        pesan = `
        Basic Personality:
        Pribadi yang penuh kasih, peduli, dan memiliki jiwa pengasuh yang kuat. Suka membantu serta melindungi orang lain, terutama mereka yang sedang membutuhkan. Berusaha menjaga keharmonisan dalam keluarga maupun lingkungan, serta dikenal sebagai sosok yang hangat, bertanggung jawab, dan memiliki kemampuan baik dalam berkomunikasi maupun berbisnis.

        Life Theme: 
        Gabungan dari sifat penyayang, pelindung, pengasuh dan pendamai, menjadikan pemilik Life Path Number ini seorang pelindung yang mengasuh dan membuat segala yang berada di dalam lindungannya merasa aman dan nyaman.

        Passion: 
        Pemilik Life Path Number ini menyukai harmoni, tanggung jawab, kepedulian dan keamanan.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya mendapat ruang untuk berkontribusi dan mengaktualisasikan kepeduliannya.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi rasa takut, egois, acuh, perasaan iri dan enggan berbagi.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang kurang mendapatkan perhatian yang cukup, kurangnya kedekatan emosional dari orang terdekat membuat jiwanya hampa, ‘dingin’ dan cuek.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme yang menjadikan pemiliknya terlalu peduli pada orang lain sampai ia mengorbankan diri dan segala kepentingannya demi orang lain, sementara ia sendiri kesakitan karenanya, atau terlalu berharap orang lain untuk peduli dan memerhatikannya sesuai cara dan standar yang ia inginkan meski itu tidak realistis.

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang pengasuh yang menumbuhkan banyak bibit baru di bawah asuhannya, menjadikan ia seorang berjiwa kekeluarga yang fokus pada kebaikan dan pertumbuhan para asuhannya, ketika berada di situasi bersama orang banyak ia secara otomatis dicari untuk dimintai pertolongan oleh orang-orang yang merasa perlu didengarkan atau dipedulikan, hal ini membuat karakter energi dari Life Path Number ini memiliki karakter energi seorang penyembuh (healer).

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan jiwa yang cuek, masa bodoh, dan seolah tidak peduli apa penilaian orang, meski sebenarnya dalam hati ia peduli dan memendam kesakitan, ia memilih mengacuhkan penilaian mereka karena terlalu sakit baginya untuk memperdulikan semua itu.

        Dalam versi over expressed, pemilik Life Path Number ini sering kali dimanfaatkan dan terlalu banyak ‘diperah’ untuk sesuatu yang ia sendiri tidak rasakan manfaatnya, banyak kreativitasnya yang harus terkubur karena ia terlalu sibuk berkorban bagi hal yang tidak membawa manfaat baginya.        
        `;
    } else if (hasilAkhir === 7) {
        pesan = `
        Basic Personality:
        Pribadi yang analitis, intelektual, dan memiliki rasa ingin tahu yang tinggi terhadap kebenaran serta hal-hal mendalam atau spiritual. Menyukai penelitian, berpikir mendalam, dan sering membutuhkan waktu sendiri untuk merenung. Memiliki kemampuan berpikir logis serta mampu menyampaikan pengetahuan dengan baik kepada orang lain.

        Life Theme: 
        Gabungan dari pemikir, pencari, penyendiri dan pribadi intelektual, menjadikan pemilik Life Path Number ini seorang ‘pertapa’ (hermit) yang menyukai kesendirian untuk memuaskan jiwa analitis dan intelektualitasnya.

        Passion: Pemilik Life Path Number ini menyukai kesendirian, intelektualitas, mencari kesejatian spiritual dan menyukai pengetahuan.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya mendapat ruang untuk merenung dan berkontemplasi mencari kesejatian.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya disibukkan dengan tuntutan di luar diri dan kesibukan yang menjauhkannya dari perenungan ke dalam dirinya.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang menyibukkan mereka untuk terlalu banyak memperdulikan berbagai hal di luar dirinya dan tuntutan hidup yang membuat mereka kurang memiliki waktu yang cukup untuk merenung dan ‘masuk’ ke dalam dirinya, sehingga kemampuan merenungnya tidak terlatih.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme atau karena terlalu banyak energi ini di dalam chart, yang menjadikan pemiliknya lalu cuek, individualis dan penyendiri, memandang rendah pada orang lain yang tidak selevel intelektualnya, pada akhirnya ia terlalu sibuk dalam pencariannya sampai enggan peduli pada dunia di luar dirinya,

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang filsuf dan guru yang ketika mempresentasikan isi pemikirannya ia bisa mengubah warna lingkungan karena nilai kebenaran yang sulit untuk dibantah oleh lingkungannya dan disegani karenanya, ketika berada di situasi bersama orang banyak ia secara otomatis dicari oleh lingkungan yang mencari pemikirannya yang melambangkan pemikiran mendalam dan kesejatian.

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan kemalasan, ia jarang melakukan proses ‘masuk’ ke dalam dirinya karena terlalu banyak kesibukan di luar diri yang harus ia penuhi untuk bisa bertahan hidup atau memuaskan anggapan lingkungan di luar dirinya.

        Dalam versi over expressed, pemilih Life Path Number ini sering kali dianggap pribadi ‘nyeleneh’, sulit dipahami, freak dan aneh karena cara berpikir dan imej yang mereka coba tampilkan dalam hidupnya, alhasil para pemilik angka ini kadang sulit untuk bisa menjalin hubungan yang terlalu intim dengan orang lain karena mereka sulit dipahami dan merasa sulit memahami.        
        `;
    } else if (hasilAkhir === 8) {  
        pesan = `
        Basic Personality:
        Pribadi yang memiliki jiwa kepemimpinan dan kemampuan manajerial yang kuat, terutama dalam bidang bisnis dan pengelolaan keuangan. Visioner, tangguh, dan mampu menarik kesuksesan finansial melalui kerja serta tindakan nyata. Selain itu, memiliki kemampuan menilai orang lain dengan baik dan sering menjadi sosok yang secara alami dipercaya sebagai pemimpin.

        Life Theme: 
        Gabungan dari sifat pemimpin, manajer, visioner dan mampu menilai orang lain dengan baik, menjadikan pemilik Life Path Number ini seorang manajer yang mampu menjadikan lingkungan yang dipimpinnya bergerak menuju arah perubahan yang masif.

        Passion: 
        Pemilik Life Path Number ini menyukai kendali, komitmen, kebersamaan, keteraturan, efisiensi, keadilan, juga menyukai hal-hal yang berbau nilai luhur dari leluhur.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya mendapat ruang untuk menggerakkan kelompok, memberikan ‘sentuhan’-nya dan mengaktualisasikan visi dan idealismenya.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi ketakutan akan kehilangan, ‘melekat’ pada apa yang dikelolanya dan tidak punya ruang untuk mengaktualisasikan idealismenya karena takut atau terancam oleh figur otoritas.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang menyibukkan mereka untuk berjuang memenuhi kebutuhan hidup atau sering merasa ‘kecil’, membuat mereka ingin membuktikan diri dan mengejar gengsi sampai-sampai mereka acap kali lupa pada visi sebenarnya dan baru tersadarkan di masa-masa depannya, sering kali merasa terlambat untuk memulai visi hidup sebenarnya dan memilih melupakannya lalu memilih untuk hidup di bawah standar yang seharusnya.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme, atau karena terlalu banyak energi angka ini di dalam chart yang menjadikan pemiliknya di kemudian hari berhasil menampilkan dirinya namun juga dihantui rasa takut jika mereka tidak bisa menampilkan kesempurnaan dalam apa yang ditekuninya (perfeksionis).

        Siddhi Frequency Theme: 
        Ketika energi Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang pemimpin, pengelola dan penggerak massa yang visioner, visi yang ditujunya membawa perubahan luar biasa bagi lingkungan dan bahkan peradaban di sekitarnya, ketika berada di situasi bersama orang banyak ia secara otomatis dicari oleh lingkungan yang membutuhkan kemampuannya untuk menentukan arah, menggerakkan mereka dan berpikir strategis untuk menuju pembaharuan yang lebih baik.

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya akan banyak bergulat dengan kesulitan dan serabutan, menjalani hidup dengan arah yang tidak jelas, bukan menjadi siapa-siapa, banyak dipenuhi keraguan dan rasa bimbang dalam membuat keputusan.

        Dalam versi over expressed, pemilih Life Path Number ini sering kali menjadi pribadi yang egois dalam apa yang dimilikinya, sulit berbagi dan dihantui rasa takut jika apa yang dimilikinya hilang, mereka bisa menjadi begitu keras kepala dalam mempertahankan pendapatnya karena rasa takutnya pada perubahan, mereka juga sedemikian takut jika apa yang mereka tampilkan tidak sempurna, alhasil ada banyak hal yang tertunda dan tidak terselesaikan demi mengejar kesempurnaan semu.        
        `;
    } else if (hasilAkhir === 9) {
        pesan = `
        Basic Personality:
        Pribadi yang memiliki jiwa kemanusiaan tinggi dan peduli terhadap kesejahteraan orang lain. Cenderung fokus pada tujuan besar yang membawa manfaat bagi banyak orang. Memiliki kemampuan menarik orang yang tepat untuk mendukung visinya serta semangat untuk menyelesaikan hal yang memberikan kebaikan bagi sesama.

        Life Theme: 
        Gabungan dari sifat filantropis dan berjiwa sosial, menjadikan pemilik Life Path Number ini seorang aktifis perubahan yang mendedikasikan hidupnya untuk kebaikan orang banyak dan bahkan kemanusiaan.

        Passion: 
        Pemilik Life Path Number ini menyukai keadilan, kontribusi dan kemanusiaan, ia menyukai peran yang jelas menyiratkan manfaat keberadaan dirinya.

        Strength Point: 
        Energi Life Path Number ini terekspresikan dengan baik ketika pemiliknya mendapat ruang untuk berbagi dan membantu sesama.

        Weak Point: 
        Energi dari Life Path Number ini tertekan dan menjadi destruktif ketika pemiliknya dipenuhi sifat egois dan hanya mementingkan dirinya sendiri.

        Unexpressed Theme: 
        Tema cobaan yang sering kali membuat pemilik energi dari Life Path Number ini tertekan yaitu masa lalu yang membuat mereka merasa dibanding-bandingkan dengan sesama lingkungan dekatnya, sehingga mereka menjadi kompetitif dan berambisi untuk bisa menjadi yang terbaik untuk memuaskan egonya, padahal bukan itu nilai kebahagiaan yang mereka cari.

        Over Expressed Theme: 
        Tema godaan yang sering kali membuat pemilik energi dari Life Path Number ini keluar dengan cara yang tidak sehat, bisa karena menjalani masa kecil di Unexpressed Theme, atau karena terlalu banyak energi angka ini di dalam chart yaitu pemiliknya menjadi sedemikian berkorban untuk orang lain sampai ia sendiri melupakan dirinya, bahkan ia sering ditipu karenanya.

        Siddhi Frequency Theme: 
        Ketika energi dari Life Path Number ini terekspresikan secara sehat, tema kehidupan yang dijalani pemiliknya adalah seorang aktivis kemanusian yang menjalani hidupnya untuk berkontribusi membantu sesama dalam bidang kemanusiaan.

        Shadow Frequency Theme: 
        Ketika energi dari Life Path Number ini tidak terekspresikan secara sehat, dalam versi unexpressed pemiliknya kerap kali menjadi pribadi yang mementingkan diri-sendiri, sering kali kompetitif secara liar untuk membuktikan kemampuannya.

        Dalam versi over expressed, pemilik Life Path Number ini sering kali menjadi pribadi yang hidup hanya untuk orang lain sampai ia melupakan keberadaan dirinya dan menjadi sosok yang menanggung kesakitan sementara ia fokus menyelamatkan orang lain.        
        `;
    }

    //menampilkan hasil garis hidup di HTML
    document.getElementById("hasilGarisHidup").style.display = "block";
    document.getElementById("garisHidup").innerText = "Tanggal Lahir Anda Berada Pada Garis Hidup " + hasilAkhir;
    document.getElementById("deskripsiGarisHidup").innerText = pesan;


}

function resetHasil() {

    // sembunyikan hasil garis hidup
    document.getElementById("hasilGarisHidup").style.display = "none";

    // kosongkan output
    document.getElementById("output-tanggal").value = "";
    document.getElementById("output-bulan").value = "";
    document.getElementById("output-tahun").value = "";

    document.getElementById("hasil1").value = "";
    document.getElementById("hasil2").value = "";
    document.getElementById("hasilAkhir").value = "";
}