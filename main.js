
spyware = 0
const virusFileNames = [
  "TROJ_Downloader.exe",
  "WORM_Plexus.vbs",
  "RANSOM_DecryptMe.locky",
  "RootKit_System32.dll",
  "Spyware_CredStealer.dat",
  "Exploit_ZeroDay.js",
  "Backdoor_Silent.sys",
  "Keylog_Capture.log",
  "AdWare_PopUpKing.scr",
  "MAL_Generic.tmp",
  "Wiper_EraseAll.bat",
  "CryptoLocker.enc",
  "ILOVEYOU.txt.vbs",
  "CONFICKER_net.worm",
  "ZEUS_Banking.inf",
  "PolyMorphic.exe",
  "Stealth.dat.hidden",
  "Quarantine_Bypass.vbe",
  "Update_Critical.pif",
  "AGENT_TESLA.docm"
];

viruses = 0;
const emojis = [
    "https://pngimg.com/d/trollface_PNG29.png",
    "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/671ffb924cdb9c1818e2724c_100.png",
    "https://cdn3.emoji.gg/emojis/36180-frustrated.png"
]

function add(){

    setTimeout(() => {
        newEl = `<h1 class='spyware'>[Downloading] { ${virusFileNames[Math.floor(Math.random() * virusFileNames.length)]}}</h1>`
        document.getElementById("spyware-div").insertAdjacentHTML("beforeend", newEl)
        spyware += 1
        viruses += 1
        if(spyware > 10){
            document.getElementById("spyware-div").innerHTML = ""
            spyware = 0
        }
        document.getElementById("emoji").src = emojis[getRandomInt(0, emojis.length - 1)];
        add()
        document.getElementById("virustotal").innerHTML = "Viruses: " + viruses
    }, 400);
   
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

add()
