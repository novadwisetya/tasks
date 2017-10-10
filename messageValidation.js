function validate() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    var gmail = email.search("@gmail.com");
    var ym = email.search("@yahoo.com");

    if (nama.length > 0) {
        if (gmail != -1 | ym != -1) {
            if (pesan.length > 0) {
                document.getElementById("nameModal").innerHTML = "Nama : " + nama;
                document.getElementById("emailModal").innerHTML = "Email : " + email;
                document.getElementById("pesanModal").innerHTML = "Pesan : " + pesan;
            } else {
                document.getElementById("nameModal").innerHTML = "";
                document.getElementById("emailModal").innerHTML = "";
                document.getElementById("pesanModal").innerHTML = "Pesan tidak boleh kosong!";
            }

        } else {
            document.getElementById("nameModal").innerHTML = "";
            document.getElementById("emailModal").innerHTML = "Masukan email dengan benar!";
            document.getElementById("pesanModal").innerHTML = "";
        }
    } else {
        document.getElementById("nameModal").innerHTML = "Masukan nama anda! ";
        document.getElementById("emailModal").innerHTML = "";
        document.getElementById("pesanModal").innerHTML = "";

    }
}