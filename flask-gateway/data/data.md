# Android Boilerplate Comment

## Project

File yang kamu kirimkan bukan merupakan file project Android Studio. Untuk mendapatkan berkas zip project Android Studio, kamu bisa memanfaatkan fitur **File -> Manage IDE Settings** **-****>** ******Export to Zip** file pada Android Studio. Silakan cermati kembali halaman submission yang bisa kamu [klik di](https://www.dicoding.com/academies/14/tutorials/258) [](https://www.dicoding.com/academies/14/tutorials/258)[sini](https://www.dicoding.com/academies/14/tutorials/258).

----------

Untuk mendapatkan berkas zip dengan ukuran yang kecil, kamu bisa memanfaatkan fitur **Export to Zip File** pada Android Studio.

----------

Sebaiknya hindari berkas **Zip di dalam Zip**. Karena submission kamu tidak dapat di-extract dengan baik pada platform dicoding dan berpotensi tidak akan mendapatkan hasil review komprehensif.

----------

Selalu gunakan **compileSdkVersion** dan **buildToolsVersion** versi terbaru agar kode yang ditulis sesuai dengan apa yang disarankan.

----------

Terdapat beberapa dependencies yang kamu tambahkan pada build.gradle tetapi tidak digunakan di dalam project. Silakan dihapus.

----------

Selalu perhatikan resources yang tidak pernah digunakan di dalam project karena akan mempengaruhi size APK nantinya. Kamu bisa memanfaatkan fitur **Refactor →** **Remove Unused Resource** untuk menghapus resources yang tidak pernah digunakan.

----------

Dalam menulis sebuah kode di dalam sebuah kelas, selalu perhatikan import yang tidak pernah digunakan agar kode yang sudah ditulis menjadi lebih bersih dan enak dilihat. Kamu bisa melakukan **reformat code dan optimized import** supaya code lebih rapi dan bersih dari import yang tidak digunakan.

----------

Kode yang tidak pernah digunakan baik itu Class, method, ataupun variable jika tidak digunakan sebaiknya dihapus. Kamu bisa memanfaatkan **Analyze - Code Cleanup** untuk melakukannya dengan cepat.

----------

Selalu gunakan versi terbaru dari Kotlin Plugin agar kode yang kamu tuliskan sesuai dengan best practice yang disarankan. Saat ini versi terbaru dari Kotlin Plugin adalah 1.4.32. Silakan update pada file build.gradle level root atau project.

----------

Untuk menghindari error seperti Out Of Memory karena aplikasi kehabisan memory saat ingin menampilkan gambar, kamu bisa memanfaatkan seperti [Glide](https://github.com/bumptech/glide) atau [Picasso](https://square.github.io/picasso/).

----------

Cobalah untuk mengelompokkan Class yang memiliki fungsi dan tanggung jawab yang sama dalam suatu package agar project yang dikembangkan memiliki struktur yang lebih rapih dan akan memudahkan kamu dalam melakukan maintenances kedepannya.

----------

Gunakanlah build tools versi terbaru, 30.0.3.

----------

 Library ini sudah tersedia versi terbarunya x.x. Silakan diupdate beserta library lainnya.

----------

Kamu bisa mencoba untuk menerapkan Repository Pattern pada project agar transaksi data seperti network request, database dan sharedpreferences menjadi terpusat. Kamu bisa mempelajarinya secara lengkap pada kelas [Belajar Android Jetpack Pro](https://www.dicoding.com/academies/129).

----------

Untuk alasan keamaan kredensial, hindari menyematkan sebuah TOKEN API ke dalam sebuah kelas, sebaiknya dipindahkan ke dalam berkas build.gradle seperti berikut:

    android {
    defaultConfig {
      buildConfigField("String", "GITHUB_TOKEN", '”b650046bf640e7bf7054093854b8d02a"')
        }
    } 

Untuk mengaksesnya kamu bisa menggunakan properti 

    BuildConfig.GITHUB_TOKEN;
----------
    buildConfigField 'String', "ApiKey" , '"b650046bf640e7bf7054093854b8d02a"'
    buildConfigField 'String', "BaseImageUrl" , '"https://image.tmdb.org/t/p/w500"'
    buildConfigField 'String', "BaseUrl" , '"https://api.themoviedb.org/3/"'
----------

Sebuah kelas yang tidak mempunyai primary constructor tidak memerlukan parenthese ().

----------

Penulisan package seharusnya disesuaikan dengan lokasi file

----------

File yang kamu kirimkan terlalu besar. Sehingga menyebabkan tab Review Code gagal dalam membaca arsip Submission kamu.

![](https://dicodingacademy.blob.core.windows.net/academies/20200806094645a1f596e7c8d1203e6747f44e1fd1a3be.png)


Tentunya, hal ini menyebabkan proses Review tidak bisa dilakukan. Solusinya, silakan hindari mengikutsertakan folder .git maupun folder build saat mengirimkan submission. Untuk itu, kamu bisa memanfaatkan fitur File -> Export -> Project to Zip pada Android Studio. Silakan cermati kembali halaman submission yang bisa kamu [klik disini](https://www.dicoding.com/academies/14/tutorials/258).

----------

Tingkatkan kualitas kode yang kamu tuliskan dengan selalu memperhatikan saran atau warning yang diberikan Android Studio selama proses pengembangan.

----------

Agar memastikan project yang kamu buat terhindar dari segala bentuk warning ataupun error, kamu bisa melakukan inspeksi kode dengan mudah melalui **Analyze → Inspect Code**.

----------
## UI

Mulailah untuk menerapkan konsep Material Design ketika mengembangkan proyek Aplikasi. Kamu bisa mengunjungi [www.material.io](https://www.material.io/) sebagai referensi.

----------

Best practices menggunakan **BottomNavigationView** adalah jika menu yang ditampilkan berjumlah minimal tiga. Jika kurang dari tiga, kamu bisa menggunakan **TabLayout**.

----------

Sebaiknya gunakan komponen ProgressBar atau SwipeRefreshLayout sebagai indikator loading.

----------

Halaman favorite sebaiknya menampilkan informasi yang konsisten ketika sedang tidak ada data yang dapat ditampilkan.

----------

Ketika menggunakan **ConstraintLayout**, sebaiknya hindari *nested layout* karena dengan **ConstraintLayout** kamu bisa menyusun tampilan aplikasi yang kompleks tanpa harus melakukan *nested layout*.

----------

Kamu bisa memanfaatkan **CollapsingToolbarLayout** pada halaman detail untuk menambahkan experience pengguna ketika menggunakan aplikasi.

----------

Fitur pencarian sebaiknya dibuatkan halaman tersendiri agar tidak menggangu behaviour halaman utama.

----------

Jika ingin menggabungkan **TabLayout** dan **Toolbar** diluar dari **AppBarLayout**, sebaiknya *elevation* pada **Toolbar** dihilangkan.

----------

Button untuk menambah atau menghapus movie dari daftar favorite sebaiknya ditempatkan di dalam halaman detail.

----------

Sebaiknya tampilkan informasi ketika hasil pencarian user tidak ditemukan dan ketika user tidak memiliki followers atau following

----------

Sebaiknya tambahkan *back button* pada halaman detail aplikasi kamu, supaya mempermudah navigasi antar halaman sekaligus meningkatkan *experience* pengguna.

----------

Fitur **Search** pada aplikasi kamu dapat menggunakan komponen **SearchView**. Kamu dapat mempelajarinya pada tautan [https://developer.android.com/reference/android/widget/SearchView](https://developer.android.com/reference/android/widget/SearchView). 

----------

Untuk membuat halaman Setting sebaiknya menggunakan `**PreferenceScreen**` seperti yang dipelajari di materi [Latihan Codelab - Setting Preference](https://www.dicoding.com/academies/14/tutorials/3080) supaya menghasilkan halaman yang sesuai dengan material design.

----------

Gunakan **scaleType** yang sesuai pada **ImageView** agar gambar yang ditampilkan dapat terlihat dengan jelas/tidak terpotong. Untuk lebih lengkapnya, dapat kamu lihat [disini](https://medium.com/mobile-app-development-publication/android-imageview-scaletype-fully-illustrated-with-adjustviewbound-1ce094dee777)

----------

Sebaiknya diberi tampilan saat data masih tidak ada / kosong(Jangan hanya lembar putih, tidak ada keterangan kalau datanya tidak ada), misal dari hasil pencarian (tidak ada hasil yang cocok) atau pada **halaman favorite, followers, following, dll.**

----------
## XML

Periksa kembali resource yang terdapat pada berkas **strings.xml**, jika terdapat tanda petik tunggal **(’)** atau spesial karakter lainnya, kamu harus menyematkan karakter backslash **(\)**. Contoh: **Hello World’\s.**

----------

Hindari penggunaan hardcoded string. Kamu bisa memindahkannya kedalam file **strings.xml**.

----------

Pada sebuah **ImageView**, jangan lupa untuk tambahkan attribut **android:contentDescription**. Ini mendefinisikan konten dengan teks yang menjelaskan secara singkat konten tampilan. Properti ini digunakan terutama untuk aksesibilitas. Karena beberapa tampilan tidak memiliki representasi tekstual, atribut ini dapat digunakan untuk menyediakannya.

----------

Namespace yang attribute-nya tidak pernah digunakan sebaiknya dihapus.

----------

Di dalam layout editor, **Recyclerview** bisa ditambahkan atribut tools:listitem yang berguna sebagai placeholder ketika kita sedang menyusun tampilan list item untuk **Recyclerview**. Misal:

    <androidx.recyclerview.widget.RecyclerView
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:listitem="@layout/item_list" />
----------

Sebaiknya gunakan attribute tools:text sebagai preview placeholder untuk editor agar tidak perlu menuliskan nilai secara hardcode.
 Contoh:

    <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    tools:text="Lorem Ipsum"/>
----------

Gunakan *Scale-Independent Pixels* (**sp**) untuk mengatur ukuran teks pada view yang mempunyai attribute **textSize**.


    <TextView
    android:textSize="20sp"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
----------

Ukuran dari sebuah teks pada **TextView** sebaiknya tidak lebih kecil dari **12sp**.

----------

Child dari sebuah **ScrollView** sebaiknya diberikan nilai **wrap_content** untuk attribute **layout_height**.

----------

Sebaiknya mulai gunakan **start**/**end** dibandingkan **left**/**right** untuk mendukung **i16n**

----------

Agar setiap komponen yang ada pada halaman aplikasi menjadi simetris, jika kamu menetapkan nilai untuk attribute android:paddingLeft, sebaiknya tetapkan juga nilai untuk attribute android:paddingRight.

----------

Pertimbangkan untuk mengganti **android:layout_marginLeft**  dengan menggunakan **android:layout_marginStart** yang lebih *support* terhadap ***right-to-left (RTL) layouts***

----------

Pertimbangkan untuk mengganti **android:layout_marginRight**  dengan menggunakan **android:layout_marginEnd** yang lebih *support* terhadap ***right-to-left (RTL) layouts***

----------

Hindari penggunaan nilai **fitXY** pada **scaleType** **ImageView**, Hal tersebut menyebabkan tampilan gambar tidak proprosi dengan ukuran ratio gambar aslinya.

----------

Jika nilai String pada **strings.xml** tidak perlu diterjemahkan sebaiknya tambahkan attribute **translatable="false".**

----------

Penulisan namespace pada sebuah layout cukup dilakukan pada **rootview** saja, tidak perlu dituliskan berulang pada setiap childview-nya.

----------

Tag yang tidak memiliki body bisa dibuat seperti ini:

    <activity android:name=".DetailActivity" />
----------

Namespace yang tidak digunakan sebaiknya dihapus.

----------

Daripada mengganti background pada masing-masing layout, kamu bisa memanfaatkan attribute **windowBackground** seperti ini pada **themes.xml**

    <item name="android:windowBackground">@color/blue</item>
----------

Anda bisa menggunakan **FragmentContainerView** untuk fragment yang dikhususkan sebagai container.

----------

**Scheme** yang tidak pernah digunakan dapat dihapus

----------

Kamu bisa menggunakan ellipsis character daripada menggunakan string “…”

----------

Gunakan ifRoom daripada always untuk showAsAction

## Code

Jika kamu menerapkan nested scope function, yang mana mengembalikan object reference **it,** akan lebih baik jika kamu melakukan *renaming* pada setiap reference tersebut supaya tidak terjadi miskonsepsi ketika dibaca. Serta juga kita tidak bisa menggunakan *object reference* **it** ******yang terletak diluar karena reference yang ada pada outer scope akan diganti secara otomatis dengan yang ada di inner scope. 
Penerapannya misalnya seperti ini.

    token.observe(viewLifecycleOwner) { event ->
        event.getContentIfNotHandled()?.let { content ->
            loggedIn(content)
        }
    }
----------

Fungsi **onCreateView** sebaiknya hanya digunakan untuk melakukan inflate view. Untuk inisialisasi view sebaiknya dilakukan di dalam fungsi **onViewCreated**.

----------

Inisialisasi nilai object view sebaiknya dilakukan di dalam fungsi **onViewCreated**. Kedepannya fungsi **onActivityCreated** akan berstatus *deprecated*.

----------

Penamaan sebuah fungsi atau variable sebaiknya menggunakan format **camelCase**.

----------

Penamaan sebuah fungsi haruslah dapat mendeskripsikan action apa yang akan dicapai/dieksekusi ya, hindari terlalu general dalam penamaan fungsi agar tidak menimbulkan pemahaman yang lain :)

----------

Penamaan sebuah package seharusnya selalu menggunakan format **lowercase**.

----------

Penamaan sebuah class sebaiknya menggunakan format **UpperCase Letter**.

----------

Fungsi ataupun variable yang hanya digunakan pada kelas yang sama sebaiknya dijadikan **private.**

----------

Jika hanya memiliki satu ekspresi, **switch statement** ini sebaiknya diganti dengan **if statement**.

----------

Variable yang hanya digunakan dalam sebuah fungsi atau method bisa dijadikan **local variable**.

----------

Url image atau endpoint sebaiknya menggunakan scheme **https**, karena kalau menggunakan tipe **http**, image tidak bisa ditampilkan pada device **Pie**.

----------

Gunakanlah fungsi **apply()** pada **SharedPreferences.Editor**, ini karena fungsi **commit()** akan memblok & menulis data penyimpanan persisten sesegera mungkin sedangkan fungsi **apply()** akan menanganinya didalam background proses.

----------

Penggunaan fungsi **obtainTypedArray** sebaiknya disertai dengan **recycle**:

    image.recycle()
----------

Pada **SimpleDateFormat** sebaiknya ditambahkan Locale. Sebagai contoh:

    SimpleDateFormat("EEEE, MMM dd, yyyy", Locale.getDefault());
----------

Fungsi **resource.getColor** sudah *deprecated*, kamu bisa menggantinya dengan fungsi **ContextCompat.getColor()**.

----------

Hindari pengecekan *if statement* dengan kondisi variable yang bernilai konstan atau tetap.

----------

Hindari *Comment Code* yang berlebihan didalam sebuah kelas dan Jika tidak diperlukan kamu bisa menghapusnya.

----------

Implementasi **parcelable** pada Kotlin bisa memanfaatkan *kotlin-parcelize*. Silakan dipelajari pada https://developer.android.com/kotlin/parcelize?hl=id

----------

Terdapat penggunaan *safe calls* pada beberapa variable yang bertipe *non-null*. Ubah *safe calls* tersebut menggunakan *dot calls*. Pelajari kembali tentang fitur [Null Safety](https://kotlinlang.org/docs/reference/null-safety.html)[.](https://www.dicoding.com/academies/55/tutorials/1538?from=1573)

----------

Manfaatkanlah fitur *indexing operator* untuk mendapatkan element yang berada di dalam sebuah Array.

----------

Variable yang tidak pernah dimodifikasi, sebaiknya dideklarasikan menggunakan **val**.

----------

Kelas yang tidak mempunyai body tidak memerlukan curly braces **{ }**.

----------

Perlu diingat bahwa Kotlin tidak memerlukan tanda **;** atau *semicolon* disetiap akhir kode.

----------

Hindari penggunaan double bang operator **(!!)** saat pengecekan null, karena akan memaksa suatu variable menjadi non-null. Dan jika ternyata v~~a~~riable tersebut bernilai null, maka bisa menyebabkan **NPE**[.](https://www.dicoding.com/academies/55/tutorials/1538?from=1573) Periksa kembali semua kode kamu dan jangan biarkan satupun operator tersebut tersisa. 

----------

Kotlin memiliki *Property Access Syntax* yang memungkinkan kamu untuk mengakses suatu properti tanpa menggunakan getter setter seperti pada Java. Periksa kembali seluruh kode kamu dan ubahlah penggunaan getter setter menggunakan *Property Access Syntax*.

----------

Hindari menjadikan parameter position sebagai **final**. Kamu dapat menggunakan fungsi **holder.getAdapterPosition()** untuk mendapatkan posisi item.

----------

Sekarang kita tidak perlu menuliskan type secara explicit ketika melakukan casting view karena akan menyebabkan redundansi.

----------

Ketika menggunakan **Cursor** untuk melakukan transaksi database jangan lupa untuk memanggil fungsi **close()****.**

----------

Fungsi turunan yang hanya memanggil super dari fungsinya tersebut sebaiknya dihapus.

----------

Jika return type pada sebuah fungsi tidak kamu manfaatkan, sebaiknya fungsi tersebut dideklarasikan menggunakan void.

----------

Penamaan sebuah activity sebaiknya diakhiri dengan kata **Activity**. **MoviesDetail** seharusnya **MoviesDetailActivity**.

----------

Cobalah untuk konsisten dalam penamaan sebuah variable, fungsi, dan kelas sebaiknya gunakan **bahasa Inggris** agar sesuai dengan convention code yang berlaku dan tidak terdeteksi typo oleh Android Studio.

----------

Penulisan companion object sebaiknya diletakkan di paling bawah dari sebuah class sesuai dengan konvensi penulisan kode Kotlin [https://kotlinlang.org/docs/reference/coding-conventions.html#class-layout](https://kotlinlang.org/docs/reference/coding-conventions.html#class-layout)

----------

Agar kode menjadi lebih rapi kamu bisa menggunakan fitur **Reformat Code** dengan cara menekan **Ctrl + Alt + L / command + options + L**.

----------

Parameter yang tidak digunakan sebaiknya namanya dirubah menjadi underscore (_) , contohnya seperti ini

    lsView.setOnItemClickListener { _, _, position, _ ->
        showSelectedUser(users[position])
    }
----------

Penulisan variable konstan seharusnya menggunakan format ALL_CAPS_SNAKE_CASE

----------

Hindari penggunaan **@Suppress** yang tidak terlalu diperlukan karena akan menyebabkan kode yang bersifat warning tidak terdeteksi

----------

Class **NetworkInfo** sudah deprecated pada API 29.
Sebaiknya gunakan **getNetworkCapabilities()** untuk retrieve instance **NetworkCapabilities** yang bisa digunakan untuk check network state (on/off). Seperti ini 

    private fun isConnected(): Boolean {
        val connectivityManager =
            mContext.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val netActive = connectivityManager.getNetworkCapabilities(connectivityManager.activeNetwork)
        return netActive?.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) ?: false
    }
----------

Beberapa method, comment, maupun property bawaan yang sudah tidak kamu gunakan saat kamu membuat fragment dengan bantuan **New -> Fragment** harap dihapus ya agar kode kamu lebih rapi lagi :)

----------

Kamu bisa memanfaatkan Kotlin Extensions ( [](https://kotlinlang.org/docs/reference/extensions.html)[https://kotlinlang.org/docs/reference/extensions.html](https://kotlinlang.org/docs/reference/extensions.html) )
Sebagai contoh :

    fun ImageView.loadImage(url: String?) {
        Glide.with(this.context)
            .load(url)
            .apply(RequestOptions().override(500, 500))
            .centerCrop()
            .into(this)
    }

Cara menggunakannya seperti ini

    ImageView.load("url")
----------

Hindari menggunakan instance yang berasal dari Activity (Context) pada sebuah ***static fields*** karena dapat menyebabkan ***memory leaks***.

----------

Sebaiknya, untuk fragment hindari menggunakan **intent.getParcelableExtra()** dari instance activity, tapi gunakanlah fragment ***arguments.***

----------

Jika menggunakan Boolean untuk ekspresi, kamu tidak perlu lagi menuliskan nilainya. Cukup seperti di bawah ini:

    if (status){
    ...
    }
----------

Variable yang berada didalam sebuah Companion Object bisa dijadikan const:

    companion object {
        const val nameId = 1
        const val imageId = 2
    }

Agar kode yang dibuat bisa sesuai dengan standar yang sudah ada, kamu bisa mempelajari Kotlin style guide pada link berikut https://developer.android.com/kotlin/style-guide

----------

Tambahkan **finish()** setelah startActivity untuk menhancurkan activity ini. Hal ini supaya ketika diitekan tombol back tidak kembali ke halaman splash screen namun langsung keluar.

----------

Kode ini sudah deprecated, untuk mengatasinya kamu harus menambahkan argument berikut:

    Handler(Looper.getMainLooper())
----------

Notifikasi yang dibuat ketika ditekan masih belum bisa **kembali ke aplikasi.** Silakan pelajari **PendingIntent** pada modul [Mengenal Navigasi, Task dan Back Stack](https://www.dicoding.com/academies/14/tutorials/209).

----------

List Favorite tidak langsung terupdate ketika ada penambahan/penghapusan data. Silakan pelajari **content observer** pada modul [Aplikasi Catatan dengan Content Provider (Consumer App)](https://www.dicoding.com/academies/14/tutorials/3278).

----------

Untuk variabel yang hanya berisi satu kata tidak perlu menggunakan **tanda kurung** pada string template. Contoh 

    "CREATE TABLE $TABLE_NAME"
----------

Untuk **observe** LiveData di dalam **Fragment** sebaiknya menggunakan **viewLifecycleOwner** daripada **this**.

----------

Hindari penggunaan hardcoded string. Kamu bisa menggunakan **strings.xml** dengan **placeholder** seperti ini:

    <string name="follower">"%d Followers"</string>

dan memakainya seperti ini:

    detailFollowers.text = getString(R.string.follower, it.followers)
----------

**Package** name dari **Class** yang telah di-import tidak perlu dituliskan kembali ketika memanggilnya karena akan menyebabkan redundansi.

----------

Parameter constructor yang tidak pernah digunakan sebagai properti(atau diaskses dari function) sebaiknya tidak memiliki deklrasi variable.

----------

Kamu bisa menghapus notasi *typesafe* jika return type bersifat non-null

----------

Dalam menulis sebuah code, lebih baik tidak menuliskan **package** suatu class yang digunakan pada class lain agar mempermudah proses pembacaan code. Alangkah lebih baiknya jika anda meng-**import** class tersebut.

----------

**Kotlin synthetics** sudah deprecated Anda dapat menggantinya menggunakan **ViewBinding**. Anda bisa mempelajari [Migrate from Kotlin synthetics to Jetpack view binding](https://developer.android.com/topic/libraries/view-binding/migration).

----------

jcenter sudah dinyatakan *deprecated* dan akan di [Shutdown](https://blog.gradle.org/jcenter-shutdown). Anda dapat menggantinya menggunakan [Maven Central](https://search.maven.org/). Pastikan juga semua depedencies yang Anda pakai sudah ada di Maven Central.


----------

Agar sesuai dengan konvensi dari kotlin yang *concise* (expressive). Sebaiknya argumen terakhir yang menganut lambda expression bisa dikeluarkan dari argument parameter seperti ini : 

    viewModel.movieDetail.observe(this) { movie ->
        ....
    }
----------

Sebaiknya hindari penggunaan double bang (!!) untuk casting nullable field pada operasi ini. Hal ini dapat menyebabkan NullPointerException ketika sewaktu - waktu **fragmentTvShowsBinding** bernilai **null.** 
Untuk solusinya, kamu bisa menerapkan *safe calls.* Lebih detailnya kamu bisa lihat link diskusi berikut : [https://www.dicoding.com/academies/165/discussions/145287](https://www.dicoding.com/academies/165/discussions/145287)

----------


----------
# Android Intermediate Common
## Submission 1 - [**S**](https://www.dicoding.com/academies/352/tutorials/22889)[tory App](https://www.dicoding.com/academies/352/tutorials/22889)
----------

Terdapat bug setelah upload story, ketika tombol back ditekan aplikasi tidak langsung keluar, namun tetap di halaman list. Pastikan hanya menggunakan finish tanpa Intent ketika proses upload berhasil.

----------

Terdapat bug setelah upload story, ketika tombol back ditekan aplikasi tidak langsung keluar, namun kembali ke halaman upload. Pastikan hanya menggunakan finish tanpa Intent ketika proses upload berhasil.

----------

Terdapat bug setelah login, ketika tombol back ditekan aplikasi tidak langsung keluar, namun kembali ke halaman login. Pastikan menambahkan finish() ketika login berhasil.

----------

Setelah berhasil login, ketika keluar dan masuk kembali perlu login lagi, seharusnya bisa langsung ke halaman utama.

----------

Terdapat bug setelah logout, ketika tombol back ditekan aplikasi tidak langsung keluar, namun kembali ke halaman story. Pastikan menambahkan finish() ketika logout berhasil.

----------

Sesi tidak tersimpan/terbaca. Sehingga ketika membuka aplikasi kembali, harus login lagi.

----------

Ada mekanisme yang salah dalam autentikasi. Pada project Anda, email yang digunakan untu login harus melakukan register pada aplikasi yang sebelumnya. Seharusnya pada login tidak perlu mengecek email dari preference, namun email apapun bisa digunakan. Jadi, pada saat register seharusnya tidak perlu menyimpan preference.

----------

Implementasi Custom View masih belum sesuai dengan kriteria. Pemeriksaan validasi jumlah karakter seharusnya dilakukan di dalam Custom View, bukan di Activity.

----------

Implementasi Custom View masih belum sesuai dengan kriteria. Seharusnya terdapat pemeriksaan validasi jumlah karakter di dalam Custom View.

----------

Aplikasi tidak memeriksa sesi ketika pertama kali masuk, hal ini menyebabkan aplikasi harus selalu membuka halaman login terlebih dahulu, seharusnya aplikasi bisa langsung ke halaman utama apabila sudah login.

----------

Untuk mendapatkan pesan error bisa menggunakan response.errorBody(). Kemudian di-parsing manual atau menggunakan Gson.

----------

Hapus Intent dan ganti dengan fungsi finish() untuk kembali ke halaman sebelumnya.

----------

Tidak ada pesan error yang muncul ketika gagal login/register.

----------

Sebenarnya class EmailEditText dan class ini bisa digabung menjadi satu class saja. Kemudian, ketika ingin menampilkan error, kamu bisa set kondisi untuk mengecek inputType dari EditText apakah bertipe password atau teks biasa. Untuk selengkapnya, kamu bisa melihat dokumentasi InputType berikut: 

https://developer.android.com/reference/android/text/InputType

----------

Hapus Intent dan gunakan finish() untuk kembali ke halaman sebelumnya.

----------

Dialog sukses muncul saat register yang seharusnya gagal (misal akun sudah pernah digunakan).




## Submission 2 - [**S**](https://www.dicoding.com/academies/352/tutorials/22889)[tory App](https://www.dicoding.com/academies/352/tutorials/22889)

Untuk maps, daripada menggunakan Zoom yang fixed, sebaiknya menggunakan LatLngBound supaya semua marker terlihat.

# Belajar Jetpack Pro Common
## Submission 1 - [**Architecture Component**](https://www.dicoding.com/academies/129/tutorials/4495?from=4497)
----------

Package **androidTest** hanya diperuntukkan untuk Instrumentation test. Unit testing wajib diletakkan pada package **test**.

----------

Unit testing pada **XXX** masih belum berhasil. Test gagal dikarenakan Expected value dan Actual value yang berbeda, perhatikan tanda-tanda penulisan juga dapat mempengaruhi seperti / “ ‘ - . Silahkan diperiksa kembali dan diperbaiki.

----------

Tuliskan **skenario instrumentation test** pada kolom Catatan ketika Anda ingin mengumpulkan tugas ini. Untuk format penulisan **sekenario pengujian**, Anda bisa melihat contoh di modul Proyek Academy : Pengujian ViewModel https://www.dicoding.com/academies/129/tutorials/4454.

----------

Penggunaan fungsi delay pada instrumentation test tidak disarankan. Pelajari tentang **idling resources** pada modul selanjutnya.

----------

Penerapan **ViewModel** masih belum tepat ya, seharusnya **ViewModel** dapat menjaga data yang telah dimuat dan hanya akan memuat data kembali jika dibutuhkan. Pada aplikasi Anda **ViewModel** akan selalu memuat data terbaru ketika fungsi getData() dipanggil kembali (contoh: perubahan orientasi). Silahkan diperiksa kembali mengenai **ViewModel** dan **LifeCycle** pada halaman berikut [https://www.dicoding.com/academies/129/tutorials/4440](https://www.dicoding.com/academies/129/tutorials/4440?from=4498)

----------
## Submission 2 - [**Repository dan LiveData**](https://www.dicoding.com/academies/129/tutorials/4497)
----------

**Instrumentation test** masih belum tepat. Pada Instrumentation test, untuk menangani proses **asynchronous** atau view yang membutuhkan waktu beberapa detik sebelum ditampilkan Anda membutuhkan penerapan **Idle Resource** yang bisa Anda pelajari di modul [https://www.dicoding.com/academies/129/tutorials/4470](https://www.dicoding.com/academies/129/tutorials/4470?from=4471). Saat ini beberapa pengujian gagal dijalankan karena terdapat proses **asynchronous**

----------

**Instrumentation test** masih belum tepat. Pada submission ini, jika pada aplikasi terdapat proses ***asynchronous***, maka Anda **wajib** menerapkan **Idle Resources**. Tidak diperbolehkan menggunakan fungsi delay. Periksa kembali ketentuan pada modul submission.

----------

**Pengujian Unit** masih belum tepat, sebaiknya Anda juga melakukan pengujian untuk **LiveData** dengan menggunakan fungsi **verify** pada objek **Observer** untuk menguji perubahan nilai **LiveData** yang ada di dalam **ViewModel**. Silahkan pelajari kembali untuk **pengujian LiveData** pada latihan ini https://www.dicoding.com/academies/129/tutorials/4469

----------

Test case ini masih belum valid, karena verifikasinya berbeda dengan konteks pengujian. Kelas ini digunakan untuk menguji kelas **ViewModel** tapi yang diverifikasi adalah kelas **Repository**. Seharusnya verifikasi dilakukan pada perubahan data **LiveData** yang berada pada **ViewModel**. Silakan pelajari kembali modul [Proyek Academy : Pengujian LiveData](https://www.dicoding.com/academies/129/tutorials/4469).

----------

Pengujian pada baris ini tidak berhasil. Tidak ada view yang menampilkan teks **Cars** pada aplikasi Anda. Perlu perhatikan kembali, aplikasi Anda menampilkan data yang didapatkan dari API. Dimana data tersebut dinamis dan pasti dapat berubah. Untuk data dinamis, tidak disarankan untuk menguji dengan teks statis.

----------
## Submission Akhir - [**Kelola Data**](https://www.dicoding.com/academies/129/tutorials/4498?from=4497)
----------

Project yang Anda kirimkan belum terdapat penerapan **Pagination.** Anda dapat mempelajari dan mengimplementasikan Pagination pada project Anda dengan mengikuti latihan berikut sebagai referensi: [https://www.dicoding.com/academies/129/tutorials/4489](https://www.dicoding.com/academies/129/tutorials/4489?from=4498). Baca kembali ketentuan pada modul submission.

----------

Project yang Anda kirimkan belum terdapat penerapan **Room.** Anda dapat mempelajari dan mengimplementasikan Room pada project Anda dengan mengikuti latihan berikut sebagai referensi: https://www.dicoding.com/academies/129/tutorials/4479. Baca kembali ketentuan pada modul submission.

----------


# Testing review Jetpack Pro

Beberapa testing pada kelas Jetpack Pro terkadang bikin bingung pas mau review apakah testingnya valid atau tidak, aku sudah coba pelajari lagi contoh yang ada di repository Google sample dan ini yang aku temui:

- Jika mendapat test case seperti yang ada di modul berikut:
| **@Test**<br>    **fun getCourses() {**<br>        **val dummyCourses = DataDummy.generateDummyCourses()**<br>        **val courses = MutableLiveData<List<CourseEntity>>()**<br>        **courses.value = dummyCourses**<br> ****<br>        **`when`(academyRepository.getAllCourses()).thenReturn(courses)**<br>        **val courseEntities = viewModel.getCourses().value**<br>        **verify(academyRepository).getAllCourses()**<br>        **assertNotNull(courseEntities)**<br>        **assertEquals(5, courseEntities?.size)**<br> ****<br>        **viewModel.getCourses().observeForever(observer)**<br>        **verify(observer).onChanged(dummyCourses)**<br>    **}** |

Bisa di-*approve* dengan catatan yang bisa disampaikan seperti berikut:


- Satu test case itu bisa dipisah menjadi 2 (dua) test case berbeda, pertama untuk menguji (assertion) nilai yang didapat dari repository saat fungsi getCourses yang ada di viewModel dipanggil dan yang kedua adalah pengujian untuk melakukan verifikasi jika nilai dari observer berbeda.
- Jika mendapat mendapat test case yang hanya terdapat verifikasi Repository seperti berikut:
| **@Test**<br>    **fun getCourses() {**<br>        **val dummyCourses = DataDummy.generateDummyCourses()**<br>        **val courses = MutableLiveData<List<CourseEntity>>()**<br>        **courses.value = dummyCourses**<br> ****<br>        **`when`(academyRepository.getAllCourses()).thenReturn(courses)**<br>        **val courseEntities = viewModel.getCourses().value**<br>        **verify(academyRepository).getAllCourses()**<br>    **}** |

Submission bisa di-reject dengan catatan berikut:

- Test case di atas hanya menguji apakah sebuah fungsi berhasil dipanggil atau tidak. Silakan tambahkan assertion untuk menguji nilai yang dikembalikan. Sebaiknya Anda juga melakukan pengujian untuk **LiveData** dengan menggunakan fungsi **verify** pada objek **Observer** untuk menguji perubahan nilai **LiveData** yang ada di dalam **ViewModel**. Silahkan pelajari kembali untuk **pengujian LiveData** pada latihan ini [](https://www.dicoding.com/academies/129/tutorials/4469)[https://www.dicoding.com/academies/129/tutorials/4469](https://www.dicoding.com/academies/129/tutorials/4469)


- Jika mendapat test case seperti di atas tapi terdapat assertion seperti berikut:
| **@Test**<br>    **fun getCourses() {**<br>        **val dummyCourses = DataDummy.generateDummyCourses()**<br>        **val courses = MutableLiveData<List<CourseEntity>>()**<br>        **courses.value = dummyCourses**<br> ****<br>        **`when`(academyRepository.getAllCourses()).thenReturn(courses)**<br>        **val courseEntities = viewModel.getCourses().value**<br>        **verify(academyRepository).getAllCourses()**<br>        **assertNotNull(courseEntities)**<br>        **assertEquals(5, courseEntities?.size)**<br>    **}** |

Submission bisa di-approve dengan catatan yang bisa diberikan seperti berikut:

- Sebaiknya tambahkan juga test case untuk menguji apakah dengan memanggil fungsi pada Repository, nilai Livedata (observer) terjadi perubahan.
- Sebaiknya Anda juga melakukan pengujian untuk **LiveData** dengan menggunakan fungsi **verify** pada objek **Observer** untuk menguji perubahan nilai **LiveData** yang ada di dalam **ViewModel**. Silahkan pelajari kembali untuk **pengujian LiveData** pada latihan ini [](https://www.dicoding.com/academies/129/tutorials/4469)[https://www.dicoding.com/academies/129/tutorials/4469](https://www.dicoding.com/academies/129/tutorials/4469)

Sebelum di-approve, pastikan kembali assertionnya sudah sesuai dengan konteks pengujian. Contoh, jika assertion di atas menggunakan **assertNull()**, silakan di-reject karena tidak sesuai dengan konteks pengujian, test case tersebut digunakan untuk menguji apakah berhasil mendapatkan data, jika menggunakan **assertNull()**, pengujiannya menjadi tidak valid.


- Jika mendapat test case yang hanya terdapat verifikasi perubahan observe seperti berikut:
| **@Test**<br>    **fun getFilm() {**<br>        **val movie = MutableLiveData<Film>()**<br>        **movie.value = movieDummy**<br>        **Mockito.`when`(movieRepository.getFilm(filmid)).thenReturn(movie)**<br>        **viewModel.film.observeForever(observer)**<br>        **Mockito.verify(observer).onChanged(movieDummy)**<br>    **}** |

Submission bisa di-approve dengan catatan yang bisa diberikan seperti berikut:

- Sebaiknya tambahkan juga test case untuk menguji apakah fungsi dari repository berhasil dipanggil dan mengembalikkan nilai ketika fungsi yang berada di dalam kelas ViewModel dipanggil.



