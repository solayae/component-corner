const motherboards = [
    {
        id: 1,
        image: "https://img.pccomponentes.com/articles/1059/10594876/1607-asus-rog-strix-b650e-f-gaming-wifi.jpg",
        name: "MOTHER ASUS (AM5) ROG STRIX B650E-E GAMING WFI",
        brand: "Asus",
        detail: [
            "AMD Socket AM5 for AMD Ryzen 7000 Series Desktop Processors",
            "Total supports 4 x M.2 slots and 4 x SATA 6Gb/s ports",
            "ROG SupremeFX 7.1 Surround Sound High Definition Audio CODEC ALC4080",
            "4x DIMM Slots, DDR5 6400MHz, PCIe Gen 5, 4x SATA 6Gb/s connectors, 4xM.2 Slot, 2.5GB LAN",
            "Graphics: 1 x DisplayPort* 1 x HDMI® port",
            "Expansion Slots AMD Ryzen™ 7000 Series Desktop Processors*"
        ],
        price:217.453,
        category: "Motherboard",
        stock:0,
        delete: false

    },

     {
    id: 2,
    image: "https://static.nb.com.ar/i/nb_MOTHER-ASUS-(1151)-PRIME-Z390-A_ver_231548eadd0a241bd1301b9b1f8c4c11.jpeg",
    name: "ASUS Prime Z390-A Motherboard",
    brand: "Asus",
    detail: [
      "Intel LGA 1151 socket",
      "DDR4 memory compatibility",
      "Dual M.2, Gigabit LAN, and USB 3.1 Gen 2",
      "OptiMem II technology for stability and improved DDR4 overclocking",
      "Fan Xpert 4 for advanced fan and liquid cooling controls"
    ],
    price:189.99,
    category: "Motherboard",
    stock:5,
    delete: false
  },
  {
    id: 3,
    image: "https://www.computerevolution.com.co/wp-content/uploads/450.png",
    name: "Gigabyte B450M DS3H",
    brand: "Gigabyte",
    detail: [
      "AMD Ryzen AM4 socket",
      "Dual Channel DDR4, 4 DIMMs",
      "PCIe Gen3 M.2 NVMe with thermal guard",
      "High-quality Audio Capacitors and Audio Noise Guard with LED Trace Path Lighting",
      "RGB Fusion supports RGB LED strips in 7 colors",
      "Smart Fan 5 with Fan Stop for silent cooling"
    ],
    price:72.99,
    category: "Motherboard",
    stock:10,
    delete: false
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71tT8kkyCzL._AC_UF894,1000_QL80_.jpg",
    name: "ASRock H310CM-HDV LGA1151/Intel H310/DDR4/SATA3&USB3.1",
    brand: "ASRock",
    detail: [
      "Intel LGA 1151 socket",
      "DDR4 memory compatibility",
      "M.2 for SSDs",
      "Realtek Gigabit LAN",
      "5X Protection II for hardware-level safeguards"
    ],
    price:68.99,
    category: "Motherboard",
    stock:8,
    delete: false
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_988107-MLA47192040205_082021-O.jpg",
    name: "MSI MPG Z590 Gaming Edge WiFi ATX Gaming Motherboard",
    brand: "MSI",
    detail: [
      "Supports 11th and 10th Gen Intel Core/Pentium/Celeron processors",
      "DDR4 Memory, up to 5333 MHz",
      "Lightning-fast experience: PCIe 4.0, Lightning Gen 4 M.2",
      "Wi-Fi 6E ready: 6GHz band provides the next level of Wi-Fi",
    ],
    price: 68.99,
    category:"Motherboard",
    stock: 10,
    delete: false,
},
{
    id: 6,
    image: "https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-4786979.jpg",
    name: "ASUS ROG MAXIMUS XIII HERO",
    brand: "Asus",
    detail: [
      "Intel LGA 1200 Socket",
      "4 x DIMM DDR4-5333 MHz (OC)",
      "2.5 Gbps Ethernet, Wi-Fi 6E, Bluetooth 5.2",
      "USB 3.2 Gen 2x2 front panel connector, Thunderbolt 4 support",
      "5-Way Optimization, AI Overclocking, and AI Cooling",
      "Integrated I/O shield and Aura Sync RGB lighting"
    ],
    price: 599.99,
    category: "Motherboard",
    stock: 5,
    delete: false
  },
  {
    id: 7,
    image: "https://images-eu.ssl-images-amazon.com/images/I/81IPvOEkCqS._AC_UL600_SR600,600_.jpg",
    name: "GIGABYTE AORUS X570 MASTER",
    brand: "Gigabyte",
    detail: [
      "AMD X570 Chipset",
      "AMD AM4 Socket",
      "4 x DIMM DDR4-4400 MHz (OC)",
      "Intel WiFi 6 802.11ax, Bluetooth 5.0",
      "2.5 GbE LAN, ALC1220-VB Audio Codec, ESS SABRE HiFi 9118 DAC",
      "12+2 Phases IR Digital VRM Solution with PowIRstage"
    ],
    price: 359.99,
    category: "Motherboard",
    stock: 2,
    delete: false
  },
  {
    id: 8,
    image: "https://http2.mlstatic.com/D_NQ_NP_714975-MLA48394174068_112021-O.jpg",
    name: "ASROCK B560M STEEL LEGEND",
    brand: "ASRock",
    detail: [
      "Intel B560 Chipset",
      "Intel LGA 1200 Socket",
      "4 x DIMM DDR4-5000 MHz (OC)",
      "2.5 GbE LAN, Intel Wi-Fi 6E",
      "USB 3.2 Gen 2x2 Type-C, Thunderbolt 4 support",
      "Steel Legend Armor and RGB Lighting"
    ],
    price: 144.99,
    category: "Motherboard",
    stock: 8,
    delete: false
  },

  {
    id: 9,
    image: "https://media.solotodo.com/media/products/1153285_picture_1589638721.jpg",
    name: "ASUS ROG STRIX Z490-E GAMING",
    brand: "Asus",
    detail: [
      "Intel LGA 1200 Socket",
      "4 x DIMM DDR4-4600 MHz (OC)",
      "2.5 Gbps Ethernet, Wi-Fi 6, Bluetooth 5.1",
      "USB 3.2 Gen 2x2 Type-C, Thunderbolt 3 support",
      "ROG SupremeFX ALC1220A Audio Codec",
      "Pre-mounted I/O shield and Aura Sync RGB lighting"
    ],
    price: 349.99,
    category: "Motherboard",
    stock: 3,
    delete: false,
  },
  {
    id: 10,
    image: "https://image.ceneostatic.pl/data/products/103702104/i-gigabyte-z590-aorus-master.jpg",
    name: "GIGABYTE Z590 AORUS MASTER",
    brand: "Gigabyte",
    detail: [
      "Intel LGA 1200 Socket",
      "4 x DIMM DDR4-5400 MHz (OC)",
      "Intel 2.5 GbE LAN, Wi-Fi 6E, Bluetooth 5.2",
      "USB 3.2 Gen 2x2 Type-C, Thunderbolt 4 support",
      "ALC1220-VB Audio Codec, ESS SABRE HiFi 9118 DAC",
      "Advanced Thermal Design with Fins-Array II, Direct Touch Heatpipe II, and Nanocarbon Coating"
    ],
    price: 549.99,
    category: "Motherboard",
    stock: 4,
    delete: false
  }
]

const monitores = [
    {
        id: 1,
        image: "https://www.lg.com/cac/images/monitores/md06141916/gallery/N01_M-01.jpg",
        name: "LG 27'27GL650F G",
        brand: "LG",
        detail: [
          "G-Sync Compatible certificado por NVIDIA",
          "Tamaño (pulgada) 27 pulgadasTalla (cm): 68.5cm",
          "Resolución: 1920 x 1080",
          "Tipo de panel: IPS",
          "Tiempo de respuesta: 5 ms (GtG a mayor velocidad), 1 ms MBR",
          "Tratamiento de superficies: Antirreflejo, 25% 3H."
        ],
        price: 19.99,
        category: "Monitores",
        stock: 4,
        delete: false    
    },
    {
        id: 2,
        image: "https://bdhard.com.ar/wp-content/uploads/2022/10/monitor-gamer-144hz-viewsonic_42603_1.jpeg",
        name: "ViewSonic VX2768-2KPC-MHD",
        brand: "ViewSonic",
        detail: [
          "Tamaño de pantalla: 27 pulgadas (27 pulgadas / 68,47 cm visible)",
          "Resolución: WQHD (2560 x 1440)",
          "Tipo de panel: IPS",
          "Tiempo de respuesta: 1 ms (MPRT)",
          "Frecuencia de actualización: 144Hz",
          "Tecnología AMD FreeSync"
        ],
        price: 279.99,
        category: "Monitores",
        stock: 6,
        delete: false
      },
      {
        id: 3,
        image: "https://www.displaydb.com/assets/images/700/dell-s2719dgf.jpg",
        name: "Dell S2719DGF",
        brand: "Dell",
        detail: [
          "Tamaño de pantalla: 27 pulgadas",
          "Resolución: QHD (2560 x 1440)",
          "Tipo de panel: TN",
          "Tiempo de respuesta: 1 ms",
          "Frecuencia de actualización: 155Hz",
          "Tecnología AMD FreeSync 2 HDR"
        ],
        price: 319.99,
        category: "Monitores",
        stock: 2,
        delete: false
      },
      {
        id: 4,
        image: "https://m.media-amazon.com/images/I/813CwWhZNXL._AC_SL1500_.jpg",
        name: "ASUS TUF Gaming VG249Q",
        brand: "ASUS",
        detail: [
        "Tamaño (pulgada) 23,8 pulgadas",
        "Resolución: 1920 x 1080",
        "Tipo de panel: IPS",
        "Tiempo de respuesta: 1 ms (MPRT)",
        "Frecuencia de actualización: 144Hz",
        "Altavoces estéreo integrados"
        ],
        price: 269.99,
        category: "Monitores",
        stock: 8,
        delete: false
        },
        
        {
        id: 5,
        image: "https://m.media-amazon.com/images/I/81iblFKwkeL.jpg",
        name: "AOC 27G2",
        brand: "AOC",
        detail: [
        "Tamaño (pulgada) 27 pulgadas",
        "Resolución: 1920 x 1080",
        "Tipo de panel: IPS",
        "Tiempo de respuesta: 1 ms (MPRT)",
        "Frecuencia de actualización: 144Hz",
        "Altavoces estéreo integrados"
        ],
        price: 249.99,
        category: "Monitores",
        stock: 12,
        delete: false
        },
        
        {
        id: 6,
        image: "https://http2.mlstatic.com/D_NQ_NP_978132-MLA42884863459_072020-O.jpg",
        name: "Samsung C27F398",
        brand: "Samsung",
        detail: [
        "Tamaño (pulgada) 27 pulgadas",
        "Resolución: 1920 x 1080",
        "Tipo de panel: VA",
        "Tiempo de respuesta: 4 ms (GtG)",
        "Frecuencia de actualización: 60Hz",
        "Curvatura de pantalla 1800R"
        ],
        price: 229.99,
        category: "Monitores",
        stock: 6,
        delete: false
        },
        {
            id: 7,
            image: "https://www.arrichetta.com.ar/wp-content/uploads/2020/04/20190228162437_20694_235_1.jpg",
            name: "Dell Ultrasharp U2415",
            brand: "Dell",
            detail: [
            "Tamaño (pulgada) 24 pulgadas",
            "Resolución: 1920 x 1200",
            "Tipo de panel: IPS",
            "Tiempo de respuesta: 6 ms (GtG)",
            "Frecuencia de actualización: 60Hz",
            "Relación de aspecto 16:10"
            ],
            price: 249.99,
            category: "Monitores",
            stock: 10,
            delete: false
            },
            
            {
            id: 8,
            image: "https://media.ldlc.com/r1600/ld/products/00/05/49/56/LD0005495657_2.jpg",
            name: "Acer Nitro XV272U",
            brand: "Acer",
            detail: [
            "Tamaño (pulgada) 27 pulgadas",
            "Resolución: 2560 x 1440",
            "Tipo de panel: IPS",
            "Tiempo de respuesta: 1 ms (VRB)",
            "Frecuencia de actualización: 144Hz",
            "HDR10"
            ],
            price: 399.99,
            category: "Monitores",
            stock: 5,
            delete: false
            },
            
            {
            id: 9,
            image: "https://image.coolblue.nl/600x315/products/1490628",
            name: "HP EliteDisplay E273",
            brand: "HP",
            detail: [
            "Tamaño (pulgada) 27 pulgadas",
            "Resolución: 1920 x 1080",
            "Tipo de panel: IPS",
            "Tiempo de respuesta: 5 ms (GtG)",
            "Frecuencia de actualización: 60Hz",
            "Inclinación, pivote, rotación y ajuste de altura"
            ],
            price: 279.99,
            category: "Monitores",
            stock: 7,
            delete: false
            },
            
            {
            id: 10,
            image: "https://www.venex.com.ar/products_images/1614968556_dfghsdfhsdf.png",
            name: "ViewSonic XG2405",
            brand: "ViewSonic",
            detail: [
            "Tamaño (pulgada) 24 pulgadas",
            "Resolución: 1920 x 1080",
            "Tipo de panel: IPS",
            "Tiempo de respuesta: 1 ms (MPRT)",
            "Frecuencia de actualización: 144Hz",
            "FreeSync Premium"
            ],
            price: 189.99,
            category: "Monitores",
            stock: 9,
            delete: false
            }
]

const auriculares = [
    {
        id: 1,
        image: "https://axa.com.ar/webaxa/25207-medium_default/auriculares-gamer-logitech-g335-white-jack-35-mm-pcps4-xbox.jpg",
        name: "AURICULAR GAMER LOGITECH G335 WHITE",
        brand: "Logitech",
        detail: [
        "Longitud: 189 mm",
        "Ancho: 180 mm",
        "Profundidad: 79 mm",
        "Peso: 240 g (incluido el cable)",
        "Microfono : Integrado, fijo. Con boton de muteo.Compatibilidad : PC, Xbox, PlayStation, Nintendo Switch y dispositivos móviles con toma de audio de 3,5 mm",
        "Respuesta de frecuencia: 100 Hz - 10 KHz",
        
        ],
        price: 189.99,
        category: "Auriculares",
        stock: 9,
        delete: false
        },
        {
          id: 2,
          image: "https://mla-s1-p.mlstatic.com/643502-MLA46284051542_062021-F.jpg",
          name: "AURICULAR GAMER MSI IMMERS GH30 V2",
          brand: "MSI",
          detail: [
            "Longitud: 200 mm",
            "Ancho: 105 mm",
            "Profundidad: 205 mm",
            "Peso: 240 g",
            "Microfono : Unidireccional con cancelacion de ruido, con boton de muteo.Compatibilidad : PC, Xbox, PlayStation, Nintendo Switch y dispositivos móviles con toma de audio de 3,5 mm",
            "Respuesta de frecuencia: 20 Hz - 20 KHz",
          ],
          price: 69.99,
          category: "Auriculares",
          stock: 15,
          delete: false
        },
        {
          id: 3,
          image: "https://www.mink.com.ar/qloud/ryr/fotos/18921-2.jpg",
          name: "AURICULAR GAMER REDRAGON LAMIA H320",
          brand: "Redragon",
          detail: [
            "Longitud: 180 mm",
            "Ancho: 105 mm",
            "Profundidad: 200 mm",
            "Peso: 290 g",
            "Microfono : Omnidireccional con cancelacion de ruido, con boton de muteo.Compatibilidad : PC, Xbox, PlayStation, Nintendo Switch y dispositivos móviles con toma de audio de 3,5 mm",
            "Respuesta de frecuencia: 20 Hz - 20 KHz",
          ],
          price: 49.99,
          category: "Auriculares",
          stock: 5,
          delete: false
        },
        {
          id: 4,
          image: "https://http2.mlstatic.com/D_NQ_NP_713953-MLA29337198688_022019-O.jpg",
          name: "LOGITECH G633 ARTEMIS SPECTRUM",
          brand: "Logitech",
          detail: [
            "Longitud: 182 mm",
            "Ancho: 81.7 mm",
            "Profundidad: 182 mm",
            "Peso: 374 g",
            "Microfono: Micrófono con brazo ajustable y cancelación de ruido",
            "Respuesta de frecuencia: 20 Hz - 20 KHz",
          ],
          price: 149.99,
          category: "Auriculares",
          stock: 8,
          delete: false
        },
        {
          id: 5,
          image: "https://http2.mlstatic.com/D_NQ_NP_650755-MLA40807371233_022020-O.webp",
          name: "RAZER KRAKEN X",
          brand: "Razer",
          detail: [
            "Longitud: 205 mm",
            "Ancho: 195 mm",
            "Profundidad: 88 mm",
            "Peso: 250 g",
            "Microfono: Micrófono cardioide unidireccional con cancelación de ruido",
            "Respuesta de frecuencia: 12 Hz - 28 KHz",
          ],
          price: 49.99,
          category: "Auriculares",
          stock: 5,
          delete: false
        },
        {
          id: 6,
          image: "https://katech.com.ar/wp-content/uploads/AUG118-jpg.webp",
          name: "RAZER KRAKEN KITTY",
          brand: "Razer",
          detail: [
            "Longitud: 205 mm",
            "Ancho: 195 mm",
            "Profundidad: 88 mm",
            "Peso: 250 g",
            "Microfono: Micrófono cardioide unidireccional con cancelación de ruido",
            "Respuesta de frecuencia: 12 Hz - 28 KHz",
          ],
          price: 49.99,
          category: "Auriculares",
          stock: 5,
          delete: false
        },
        {
          id: 6,
          image: "https://m.media-amazon.com/images/I/616y3R63PcL.jpg",
          name: "RAZER KRAKEN KITTY BLACK",
          brand: "Razer",
          detail: [
            "Longitud: 205 mm",
            "Ancho: 195 mm",
            "Profundidad: 88 mm",
            "Peso: 250 g",
            "Microfono: Micrófono cardioide unidireccional con cancelación de ruido",
            "Respuesta de frecuencia: 12 Hz - 28 KHz",
          ],
          price: 49.99,
          category: "Auriculares",
          stock: 5,
          delete: false
        },
        {
          id: 7,
          image: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auriculares-logitech-g-pro-x-gaming-981000817-0.jpg",
          name: "LOGITECH G PRO X GAMING",
          brand: "Logitech",
          detail: [
            "Longitud: 180 mm",
            "Ancho: 105 mm",
            "Profundidad: 200 mm",
            "Peso: 290 g",
            "Microfono: Micrófono omnidireccional con cancelación de ruido y botón de mute",
            "Respuesta de frecuencia: 20 Hz - 20 KHz",
          ],
          price: 49.99,
          category: "Auriculares",
          stock: 8,
          delete: false
        },
        {
          id: 8,
          image: "https://tienda.redcomputer.es/32141-medium_default/auriculares-razer-kraken-pro-v2-verde.jpg",
          name: "RAZER KRAKEN ULTIMATE GREEN",
          brand: "Razer",
          detail: [
            "Longitud: 190 mm",
            "Ancho: 104.3 mm",
            "Profundidad: 197.5 mm",
            "Peso: 390 g",
            "Microfono: Micrófono cardioide unidireccional con cancelación de ruido activa",
            "Respuesta de frecuencia: 20 Hz - 20 KHz",
          ],
          price: 129.99,
          category: "Auriculares",
          stock: 10,
          delete: false
        },
        {
          id: 9,
          image: "https://gorilagames.com/img/Public/1019-producto-auricular-hyperx-cloud-ii-wireless-1-3068.jpg",
          name: "HYPERX CLOUD II",
          brand: "HyperX",
          detail: [
            "Longitud: 100 mm",
            "Ancho: 161 mm",
            "Profundidad: 110 mm",
            "Peso: 320 g",
            "Microfono: Micrófono con cancelación de ruido y control de volumen en línea",
            "Respuesta de frecuencia: 15 Hz - 25 KHz",
          ],
          price: 99.99,
          category: "Auriculares",
          stock: 7,
          delete: false
        },
        {
          id: 10,
          image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6285/6285956_rd.jpg",
          name: "STEELSERIES ARCTIS 7",
          brand: "SteelSeries",
          detail: [
            "Longitud: 193 mm",
            "Ancho: 100 mm",
            "Profundidad: 205 mm",
            "Peso: 352 g",
            "Microfono: Micrófono bidireccional con cancelación de ruido",
            "Respuesta de frecuencia: 20 Hz - 20 KHz",
          ],
          price: 149.99,
          category: "Auriculares",
          stock: 9,
          delete: false
        },
        
]

const teclados = [
  {
    id: 1,
          image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6285/6285956_rd.jpg",
          name: "TECLADO CORSAIR K55 RGB",
          brand: "Corsair",
          detail: [
            "Color de la retroiluminación: RGB",
            "Tipo de switch: Rubber Dome",
            "Tipo de conector: USB 2.0",
            "Arquitectura: Membrana",
            "Es resistente a salpicaduras: Sí",
            "Idioma: Español España",
          ],
          price: 149.99,
          category: "Teclados",
          stock: 9,
          delete: false
  },
  {
    id: 2,
    image: "https://http2.mlstatic.com/D_NQ_NP_902606-MLA43542876076_092020-O.jpg",
    name: "Logitech G Pro X",
    brand: "Logitech",
    detail: [
      "Color de la retroiluminación: RGB",
      "Tipo de switch: GX Blue Clicky (intercambiables)",
      "Tipo de conector: USB 2.0",
      "Arquitectura: Mecánica",
      "Es resistente a salpicaduras: Sí",
      "Idioma: Inglés",
    ],
    price: 149.99,
    category: "Teclados",
    stock: 5,
    delete: false
  },
  {
    id: 3,
    image: "https://f.fcdn.app/imgs/f68d57/woofer.com.uy/woofuy/4d92/original/catalogo/CONST16-CONST16_1/1920-1200/teclado-gamer-twolf-t16-negro-teclado-gamer-twolf-t16-negro.jpg",
    name: "Wolf Pack Gaming TKL",
    brand: "Wolf Pack",
    detail: [
      "Color de la retroiluminación: RGB",
      "Tipo de switch: Outemu Blue (mecánico)",
      "Tipo de conector: USB 2.0",
      "Arquitectura: Mecánica",
      "Es resistente a salpicaduras: Sí",
      "Idioma: Español España",
    ],
    price: 79.99,
    category: "Teclados",
    stock: 10,
    delete: false
  },
  {
    id: 4,
    image: "https://front.dev.malditohard.com.ar/img/migration/TECLADO-MEC-HYPERX-ALLOY-FPS-PRO-BLUE.webp",
    name: "TECLADO GAMER HYPERX ALLOY FPS PRO",
    brand: "HyperX",
    detail: [
      "Color de la retroiluminación: Rojo (sólo la tecla WASD y las flechas)",
      "Tipo de switch: Cherry MX Red (mecánico)",
      "Tipo de conector: USB 2.0",
      "Arquitectura: Mecánica",
      "Es resistente a salpicaduras: No",
      "Idioma: Español España",
    ],
    price: 89.99,
    category: "Teclados",
    stock: 3,
    delete: false
  },
  {
    id: 5,
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/23-167-047-V17.jpg",
    name: "MSI Vigor GK30 Combo",
    brand: "MSI",
    detail: [
      "Color de la retroiluminación: RGB",
      "Tipo de switch: Membrana (con teclas ergonómicas)",
      "Tipo de conector: USB 2.0",
      "Arquitectura: Membrana",
      "Es resistente a salpicaduras: Sí",
      "Idioma: Español España",
    ],
    price: 59.99,
    category: "Teclados",
    stock: 8,
    delete: false
  },
  {
    id: 6,
    image: "https://dpq25p1ucac70.cloudfront.net/seller-place-files/mrkl-files/1812/OTRAS%20CATEGORIAS/119_224254939376_60.jpeg",
    name: "TECLADO GAMER LOGITECH G 915",
    brand: "Logitech",
    detail: [
    "Tipo de switch: Mecánico GX Blue",
    "Tipo de conector: USB 2.0",
    "Arquitectura: Teclas flotantes",
    "Es resistente a salpicaduras: Sí",
    "Idioma: Inglés",
    ],
    price: 129.99,
    category: "Teclados",
    stock: 6,
    delete: false
    },
    {
      id: 7,
      image: "https://static.nb.com.ar/i/nb_teclado-gamer-razer-ornata-v2-spanish_ver_4f3257556d6f27d1e132d8b5f7acb3e1.png",
      name: "TECLADO GAMER RAZER ORNATA V2",
      brand: "Razer",
      detail: [
      "Color de la retroiluminación: RGB",
      "Tipo de switch: Mecánico-Membrana",
      "Tipo de conector: USB 2.0",
      "Arquitectura: Teclas flotantes",
      "Es resistente a salpicaduras: Sí",
      "Idioma: Inglés",
      ],
      price: 99.99,
      category: "Teclados",
      stock: 8,
      delete: false
      },
      {
        id: 8,
        image: "https://www.qloud.ar/SITES/ryr/fotos/19665-0.jpg",
        name: "TECLADO GAMER RAZER CYNOSA CHROMA",
        brand: "Razer",
        detail: [
          "Color de la retroiluminación: RGB",
          "Tipo de switch: Membrana",
          "Tipo de conector: USB 2.0",
          "Arquitectura: Membrana",
          "Es resistente a salpicaduras: No",
          "Idioma: Español Latinoamérica",
        ],
        price: 79.99,
        category: "Teclados",
        stock: 12,
        delete: false
      },
      {
        id: 9,
        image: "https://m.media-amazon.com/images/I/61i2f6xbd1L._AC_UF894,1000_QL80_.jpg",
        name: "TECLADO GAMER LOGITECH G610 ORION",
        brand: "Logitech",
        detail: [
          "Color de la retroiluminación: Rojo",
          "Tipo de switch: Mecánico",
          "Tipo de conector: USB 2.0",
          "Arquitectura: Mecánica",
          "Es resistente a salpicaduras: No",
          "Idioma: Inglés",
        ],
        price: 89.99,
        category: "Teclados",
        stock: 8,
        delete: false
      },
      {
        id: 10,
        image: "https://mla-s2-p.mlstatic.com/935185-MLA46504064329_062021-F.jpg",
        name: "TECLADO GAMER REDRAGON YAMA K550 RGB",
        brand: "Redragon",
        detail: [
          "Color de la retroiluminación: RGB",
          "Tipo de switch: Mecánico",
          "Tipo de conector: USB 2.0",
          "Arquitectura: Mecánica",
          "Es resistente a salpicaduras: Sí",
          "Idioma: Español España",
        ],
        price: 109.99,
        category: "Teclados",
        stock: 5,
        delete: false
      }
]

const mouses = [
  {
    id: 1,
    image: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g203-gaming-lightsync-white-910005794-0.jpg",
    name: "MOUSE GAMER LOGITECH G203 WHITE",
    brand: "Logitech",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 8000 dpi",
      "Con cable: Sí",
      "Con luces: Sí",
      "Cantidad de botones: 6",
      "Alcance máximo: 2.1 m",
    ],
    price: 109.99,
    category: "Teclados",
    stock: 5,
    delete: false
  },
  {
    id: 2,
    image: "https://gorilagames.com/img/public/379caa.jpg",
    name: "MOUSE GAMER REDRAGON COBRA M711-FPS RGB",
    brand: "Redragon",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 10000 dpi",
      "Con cable: Sí",
      "Con luces: Sí",
      "Cantidad de botones: 8",
      "Alcance máximo: 1.8 m",
    ],
    price: 59.99,
    category: "Mouses",
    stock: 7,
    delete: false
  },
  {
    id: 3,
    image: "https://images.kabum.com.br/produtos/fotos/386857/hyperx-haste-wireless-wt-4p5d8aa_1669841762_original.jpg",
    name: "MOUSE GAMER HYPERX PULSEFIRE HASTE WHITE",
    brand: "HyperX",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 16000 dpi",
      "Con cable: Sí",
      "Con luces: No",
      "Cantidad de botones: 6",
      "Alcance máximo: 1.8 m",
    ],
    price: 79.99,
    category: "Mouses",
    stock: 3,
    delete: false
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/61nKxSAAVFL._AC_SX425_.jpg",
    name: "MOUSE GAMER HYPERX PULSEFIRE HASTE BLACK",
    brand: "HyperX",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 16000 dpi",
      "Con cable: Sí",
      "Con luces: No",
      "Cantidad de botones: 6",
      "Alcance máximo: 1.8 m",
    ],
    price: 79.99,
    category: "Mouses",
    stock: 3,
    delete: false
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_978923-MLA32159134266_092019-O.jpg",
    name: "MOUSE GAMER LOGITECH G402 HYPERION FURY",
    brand: "Logitech",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 4000 dpi",
      "Con cable: Sí",
      "Con luces: Sí",
      "Cantidad de botones: 8",
      "Alcance máximo: 2 m",
    ],
    price: 79.99,
    category: "Mouses",
    stock: 7,
    delete: false
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_NQ_NP_686894-MLA31022953654_062019-O.jpg",
    name: "MOUSE GAMER RAZER DEATHADDER ESSENTIAL",
    brand: "Razer",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 16000 dpi",
      "Con cable: Sí",
      "Con luces: Sí",
      "Cantidad de botones: 5",
      "Alcance máximo: 1.8 m",
    ],
    price: 89.99,
    category: "Mouses",
    stock: 4,
    delete: false
  },
  {
    id: 7,
    image: "https://http2.mlstatic.com/D_NQ_NP_938598-MLA40436755950_012020-O.jpg",
    name: "MOUSE GAMER RAZER BASILISK X HYPERSPEED",
    brand: "Razer",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 16000 dpi",
      "Con cable: No",
      "Con luces: Sí",
      "Cantidad de botones: 6",
      "Alcance máximo: 10 m",
    ],
    price: 139.99,
    category: "Mouses",
    stock: 3,
    delete: false
  },
  {
    id: 8,
    image: "https://www.xtreme.ps/uploads/photos/shares/Accessories/Keyboards%20&%20Mice/HP%20OMEN%20400%20Gaming%20Mouse/5f2abe775d9d2.jpg",
    name: "MOUSE GAMER HP OMEN 400",
    brand: "HP",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 5000 dpi",
      "Con cable: Sí",
      "Con luces: Sí",
      "Cantidad de botones: 6",
      "Alcance máximo: 1.8 m",
    ],
    price: 59.99,
    category: "Mouses",
    stock: 8,
    delete: false
  },
  {
    id: 9,
    image: "https://www.hargakaget.com/image/cache/catalog/STEEL%20SERIES/MOUSE/Steelseries%20Rival%20310%20Black2-870x664.jpg",
    name: "MOUSE GAMER STEELSERIES RIVAL 310",
    brand: "SteelSeries",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 12000 dpi",
      "Con cable: Sí",
      "Con luces: Sí",
      "Cantidad de botones: 6",
      "Alcance máximo: N/A",
    ],
    price: 79.99,
    category: "Mouses",
    stock: 6,
    delete: false
  },
  {
    id: 10,
    image: "https://tiendas.contapyme.com.ar/clientes/goodgames/archivos/images/1/image_523.jpg",
    name: "MOUSE GAMER CORSAIR HARPOON RGB WIRELESS",
    brand: "Corsair",
    detail: [
      "Tipo de sensor: Óptico",
      "Resolución del sensor: 10000 dpi",
      "Con cable: No",
      "Con luces: Sí",
      "Cantidad de botones: 6",
      "Alcance máximo: 10 m",
    ],
    price: 69.99,
    category: "Mouses",
    stock: 8,
    delete: false
  }
]

const procesadores = [
  {
    id: 1,
    image: "https://www.venex.com.ar/products_images/1585940629_amd_ryzen_3_3200g_am4.jpg",
    name: "PROCESADOR AMD RYZEN 3 3200G AM4",
    brand: "AMD",
    detail: [
      "Línea: Ryzen 3",
      "Modelo: 3200G",
      "Accesorios incluidos: Air cooler",
      "Arquitectura: x86-64",
      "Cantidad de núcleos de CPU: 4",
      "Frecuencia mínima de reloj: 3.6 GHz",
    ],
    price: 69.99,
    category: "Procesadores",
    stock: 8,
    delete: false
  },
  {
    id: 2,
    image: "https://hard-digital.com.ar/public/files/Procesador%20Amd%20Ryzen%207%205800x%20Pci%204.0%20Am4%20Sin%20Video/3.jpg",
    name: "AMD Ryzen 7 5800X",
    brand: "AMD",
    detail: [
      "Núcleos: 8",
      "Hilos: 16",
      "Velocidad base: 3.8 GHz",
      "Velocidad turbo: 4.7 GHz",
      "Cache: 36MB",
      "Socket: AM4",
      "Consumo energético: 105W",
      "Tecnología de fabricación: 7nm",
    ],
    price: 419.99,
    category: "Procesadores",
    stock: 10,
    delete: false
  },
  {
    id: 3,
    image: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i9-11900k-8core-16m-35ghz-1200-1.jpg",
    name: "Intel Core i9-11900K",
    brand: "Intel",
    detail: [
      "Núcleos: 8",
      "Hilos: 16",
      "Velocidad base: 3.5 GHz",
      "Velocidad turbo: 5.3 GHz",
      "Cache: 16MB",
      "Socket: LGA1200",
      "Consumo energético: 125W",
      "Tecnología de fabricación: 14nm",
    ],
    price: 549.99,
    category: "Procesadores",
    stock: 8,
    delete: false
  },
  
  {
    id: 4,
    image: "https://www.deffo.com.ar/wp-content/uploads/2020/07/Ryzen-9-Ventila%CC%81tor-ne%CC%81lku%CC%88li-1.jpg",
    name: "AMD Ryzen 9 5950X",
    brand: "AMD",
    detail: [
      "Núcleos: 16",
      "Hilos: 32",
      "Velocidad base: 3.4 GHz",
      "Velocidad turbo: 4.9 GHz",
      "Cache: 72MB",
      "Socket: AM4",
      "Consumo energético: 105W",
      "Tecnología de fabricación: 7nm",
    ],
    price: 999.99,
    category: "Procesadores",
    stock: 5,
    delete: false
  },
  
  {
    id: 5,
    image: "https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-6326925.jpg",
    name: "Intel Core i7-11700K",
    brand: "Intel",
    detail: [
      "Núcleos: 8",
      "Hilos: 16",
      "Velocidad base: 3.6 GHz",
      "Velocidad turbo: 5.0 GHz",
      "Cache: 16MB",
      "Socket: LGA1200",
      "Consumo energético: 125W",
      "Tecnología de fabricación: 14nm",
    ],
    price: 419.99,
    category: "Procesadores",
    stock: 6,
    delete: false
  },
  {
    id: 6,
    image: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-11600k-11-gen-0.jpg",
    name: "Intel Core i5-11600K",
    brand: "Intel",
    detail: [
      "Núcleos: 6",
      "Hilos: 12",
      "Velocidad base: 3.9 GHz",
      "Velocidad turbo: 4.9 GHz",
      "Cache: 12MB",
      "Socket: LGA1200",
      "Consumo energético: 125W",
      "Tecnología de fabricación: 14nm",
    ],
    price: 279.99,
    category: "Procesadores",
    stock: 7,
    delete: false
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_NQ_NP_622984-MLM52374360803_112022-O.jpg",
    name: "AMD Ryzen 5 5600X",
    brand: "AMD",
    detail: [
      "Núcleos: 6",
      "Hilos: 12",
      "Velocidad base: 3.7 GHz",
      "Velocidad turbo: 4.6 GHz",
      "Cache: 35MB",
      "Socket: AM4",
      "Consumo energético: 65W",
      "Tecnología de fabricación: 7nm",
    ],
    price: 299.99,
    category: "Procesadores",
    stock: 15,
    delete: false
  },
  {
    id: 7,
    image: "https://www.pcarts.com/media/catalog/product/cache/7012a79e4a1074c36cabbd79393f5c4e/m/i/microprocesador-intel-corei3-10100-10ma_gen.png",
    name: "Intel Core i3-10100",
    brand: "Intel",
    detail: [
      "Núcleos: 4",
      "Hilos: 8",
      "Velocidad base: 3.6 GHz",
      "Velocidad turbo: 4.3 GHz",
      "Cache: 6MB",
      "Socket: LGA1200",
      "Consumo energético: 65W",
      "Tecnología de fabricación: 14nm",
    ],
    price: 129.99,
    category: "Procesadores",
    stock: 20,
    delete: false
  },
  {
    id: 8,
    image: "https://procesadores.net/wp-content/uploads/2020/11/3960X.png",
    name: "AMD Ryzen Threadripper 3990X",
    brand: "AMD",
    detail: [
      "Núcleos: 64",
      "Hilos: 128",
      "Velocidad base: 2.9 GHz",
      "Velocidad turbo: 4.3 GHz",
      "Cache: 288MB",
      "Socket: sTRX4",
      "Consumo energético: 280W",
      "Tecnología de fabricación: 7nm",
    ],
    price: 3999.99,
    category: "Procesadores",
    stock: 2,
    delete: false
  }

]

module.exports = {
  motherboards,
  monitores,
  auriculares,
  mouses,
  procesadores

}