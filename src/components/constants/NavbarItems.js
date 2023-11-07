const DataNavbar = [
  {
    name: "Beranda",
    route: "/",
    submenu: [],
  },
  {
    name: "Profil",
    route: "/profil",
    submenu: [
      {
        name: "Sejarah Perumda TB",
        route: "/sejarah_perumda_tb",
        submenu: [],
      },
      {
        name: "Visi Dan Misi",
        route: "/visi_dan_misi",
        submenu: [],
      },
      {
        name: "Tugas Pokok Dan Fungsi Seksi Hukum",
        route: "/tugas_pokok_dan_fungsi_seksi_hukum",
        submenu: [],
      },
      {
        name: "Sambutan Seksi Hukum",
        route: "/sambutan_seksi_hukum",
        submenu: [],
      },
      {
        name: "Struktur Organisasi",
        route: "/struktur_organisasi",
        submenu: [
          {
            name: "Pengelola JDIH",
            route: "/pengelola_jdih",
            submenu: [],
          },
        ],
      },
      // {
      //   name: "SK Tim JDIH",
      //   route: "/sk_tim_jdih",
      //   submenu: [],
      // },
      // {
      //   name: "SK Pengelola",
      //   route: "/sk_pengelola",
      //   submenu: [],
      // },
      // {
      //   name: "Standar Operasional Prosedur",
      //   route: "/standar_operasional_prosedur",
      //   submenu: [],
      // },
      {
        name: "Kontak",
        route: "/kontak",
        submenu: [],
      },
    ],
  },
  {
    name: "Berita Hukum",
    route: "/informasi/berita_hukum",
    submenu: [],
  },

  // {
  //   name: "Informasi",
  //   route: "/informasi",
  //   submenu: [
  //     {
  //       name: "Berita Hukum",
  //       route: "/berita_hukum",
  //       submenu: [],
  //     },
  //     {
  //       name: "Agenda",
  //       route: "/agenda",
  //       submenu: [],
  //     },
  //     {
  //       name: "Informasi Lainnya",
  //       route: "/informasi_lainnya",
  //       submenu: [
  //         {
  //           name: "Naskah Akademik",
  //           route: "/naskah_akademik",
  //           submenu: [],
  //         },
  //         {
  //           name: "Propemperda",
  //           route: "/propemperda",
  //           submenu: [],
  //         },
  //         {
  //           name: "Surat Edaran",
  //           route: "/surat_edaran",
  //           submenu: [],
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    name: "Produk Hukum",
    route: "/dokumen_hukum",
    submenu: [
      {
        name: "Peraturan Perundang-Undangan",
        route: "/peraturan_perundang_undangan",
        submenu: [],
      },
      // {
      //   name: "Artikel Hukum",
      //   route: "/artikel_hukum",
      //   submenu: [],
      // },
      // {
      //   name: "Kepdir",
      //   route: "/kepdir",
      //   submenu: [],
      // },
      // {
      //   name: "Perda Pendirian",
      //   route: "/perda_pendirian",
      //   submenu: [],
      // },
      // {
      //   name: "Perdir",
      //   route: "/perdir",
      //   submenu: [],
      // },
      {
        name: "Perwal",
        route: "/perwal_pelaksanaan",
        submenu: [],
      },
    ],
  },

  {
    name: "Bantuan Hukum",
    route: "/bantuan_hukum",
    submenu: [
      {
        name: "Konsultasi Dan Pengaduan",
        route: "/konsultasi_dan_pengaduan",
        submenu: [],
      },
    ],
  },

  {
    name: "Saran & Masukan",
    route: "/saran_dan_masukan",
    submenu: [],
  },
];

export default DataNavbar;
