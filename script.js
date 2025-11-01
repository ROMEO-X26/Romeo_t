

    function openTelegram(){window.open("https://t.me/ROMEOXE","_blank");}

    const body=document.body;
    const toggle=document.getElementById("themeToggle");
    const circle=toggle.querySelector(".toggle-circle");
    const savedTheme=localStorage.getItem("theme");
    if(savedTheme==="light"){body.classList.add("light");circle.textContent="☀️";}
    toggle.addEventListener("click",()=>{
      body.classList.toggle("light");
      const isLight=body.classList.contains("light");
      circle.textContent=isLight?"☀️":"🌙";
      localStorage.setItem("theme",isLight?"light":"dark");
    });

    document.getElementById("myServiceBtn").onclick=()=>{
      document.getElementById("serviceSection").style.display="block";
      window.scrollTo({top:document.getElementById("serviceSection").offsetTop,behavior:'smooth'});
    };

    // Translation text
    const translations={
      en:{
        title:"ROMEO Trader",
        myServiceBtn:"My Service",
        caption:"Tap to contact on Telegram",
        contactBtn:"Contact Me",
        welcome:"Hy welcome to Romeo’s store",
        srv1:"Old Telegram group buying",
        srv2:"Telegram channel 1K+ good view buying",
        srv3:"Escrow service for goods & services",
        srv4:"TikTok, Instagram, YouTube buy & sell",
        trust1:"Trusted buyer",
        trust2:"Fast payment",
        trust3:"Clear and honest process"
      },
      am:{
        title:"ሮሜዮ ንግድ ሰው",
        myServiceBtn:"አገልግሎቶቼ",
        caption:"በቴሌግራም ለመነጋገር ይንኩ",
        contactBtn:"አግኙኝ",
        welcome:"እንኳን ወደ ሮሜዮ መደብር በደህና መጡ",
        srv1:"የቆዩ ቴሌግራም ቡድን ግዢ",
        srv2:"1K+ ተመልካች ያላቸው ቴሌግራም ቻናሎች ግዢ",
        srv3:"የእቃና አገልግሎት ኤስክሮ አገልግሎት",
        srv4:"ቲክቶክ፣ ኢንስታግራም፣ ዩቱብ ግዢ እና ሽያጭ",
        trust1:"የታመነ ገዢ",
        trust2:"ፈጣን ክፍያ",
        trust3:"ግልጽና እውነተኛ ሂደት"
      },
      ti:{
        title:"ሮሜዮ ባለንግድ",
        myServiceBtn:"ኣገልግሎታተይ",
        caption:"ብቴለግራም ንዝያዳ ጠውቑ",
        contactBtn:"ንዝያዳ ደውሉ",
        welcome:"እንቋዕ ብሰላም መጻኹም ናብ ሮሜዮ መደብር",
        srv1:"ኣብ ቴለግራም ድሕሪት ቡድን ግዛእ",
        srv2:"1K+ መመልከቲ ዘለዎ ቻናል ግዛእ",
        srv3:"ኤስክሮ ኣገልግሎት ንምሕዳር እቃታትን ኣገልግሎታትን",
        srv4:"ቲክቶክ፣ ኢንስታግራም፣ ዩቱብ ግዛእን ሽያጭን",
        trust1:"ተዓመኒ ገዛኢ",
        trust2:"ብፍጥነት ክፍሊ",
        trust3:"ግልጽን ትክክልን ሂደት"
      },
      om:{
        title:"Romeo Daldalaa",
        myServiceBtn:"Tajaajiloota Koo",
        caption:"Telegram irratti qunnamaa",
        contactBtn:"Na qunnamaa",
        welcome:"Baga gara dukaana Romeo dhuftan",
        srv1:"Garee Telegram durii bituu",
        srv2:"Kinaalii Telegram 1K+ ilaalaa bituu",
        srv3:"Tajaajila escrow oomisha fi tajaajilaaf",
        srv4:"TikTok, Instagram, YouTube bituu fi gurguruu",
        trust1:"Bittaa amanamaa",
        trust2:"Kaffaltii saffisaa",
        trust3:"Adeemsa ifaa fi dhugaa"
      }
    };

    const langSelect=document.getElementById("languageSelect");
    const elements={
      title:"title",
      myServiceBtn:"myServiceBtn",
      caption:"caption",
      contactBtn:"contactBtn",
      welcome:"welcome",
      srv1:"srv1",
      srv2:"srv2",
      srv3:"srv3",
      srv4:"srv4",
      trust1:"trust1",
      trust2:"trust2",
      trust3:"trust3"
    };

    langSelect.addEventListener("change",()=>{
      const lang=langSelect.value;
      localStorage.setItem("language",lang);
      applyLanguage(lang);
    });

    function applyLanguage(lang){
      const data=translations[lang]||translations.en;
      for(const key in elements){
        document.getElementById(elements[key]).textContent=data[key];
      }
    }

    const savedLang=localStorage.getItem("language")||"en";
    langSelect.value=savedLang;
    applyLanguage(savedLang);
 