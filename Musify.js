var songs=[
    {
        id:1,
        imageSrc:"./Thumbnail/Aatmvishvas.jpg",
        audioSrc:"./Audio/Aatmvishvas.mp3",
        title:"Aatmvishvas - Amit Bhadana"
    },
    {
        id:2,
        imageSrc:"./Thumbnail/Bachpan Ka Pyaar.jpg",
        audioSrc:"./Audio/Bachpan Ka Pyaar.mp3",
        title:"Bachpan Ka Pyaar - Badshah & Sahdev"
    },
    {
        id:3,
        imageSrc:"./Thumbnail/Beliver.jpg",
        audioSrc:"./Audio/Beliver.mp3",
        title:"Beliver - Imagine Dragons"
    },
    {
        id:4,
        imageSrc:"./Thumbnail/Daru Badnam Kardi.jpg",
        audioSrc:"./Audio/Daru Badnam Kardi.mp3",
        title:"Daru Badnam - Kamal Kahlon & Param Singh"
    },
    {
        id:5,
        imageSrc:"./Thumbnail/Dhindora.jpg",
        audioSrc:"./Audio/Dhindora.mp3",
        title:"Dhindora - Kailash Kher "
    },
    {
        id:6,
        imageSrc:"./Thumbnail/Jugnu.jpg",
        audioSrc:"./Audio/Jugnu.mp3",
        title:"Jugnu -  Badshah "
    },
    {
        id:7,
        imageSrc:"./Thumbnail/Main Shiv Ka Shiv Mere.jpg",
        audioSrc:"./Audio/Main Shiv Ka Shiv Mere.mp3",
        title:"Main Shiv Ka - Hansraj Raghuvanshi "
    },
    {
        id:8,
        imageSrc:"./Thumbnail/Mann Bharryaa.jpg",
        audioSrc:"./Audio/Mann Bharryaa.mp3",
        title:"Mann Bharryaa - B Praak "
    },
    {
        id:9,
        imageSrc:"./Thumbnail/Mera Bhola Hai Bhandari Kare Nandi.jpg",
        audioSrc:"./Audio/Mera Bhola Hai Bhandari Kare Nandi.mp3",
        title:"Mera Bhola Hai Bhandari  - Hansraj Raghuvanshi "
    },
    {
        id:10,
        imageSrc:"./Thumbnail/Meri-Maa-Ke-Barabar-Koi-Nahi.jpg",
        audioSrc:"./Audio/Meri Maa Ke Barabar Koi Nahi.mp3",
        title:"Meri Maa Ke Barabar Koi Nahi - Jubin Nautiyal "
    },
    {
        id:11,
        imageSrc:"./Thumbnail/Meri-Zindagi-h-tu.jpg",
        audioSrc:"./Audio/Meri Zindagi Hai Tu.mp3",
        title:"Meri Zindagi Hai Tu - Jubin Nautiyal & Neeti Mohan"
    },
    {
        id:12,
        imageSrc:"./Thumbnail/Middle Class.jpg",
        audioSrc:"./Audio/Middle Class.mp3",
        title:"Middle Class - Gulzaar Chhaniwala"
    },
    {
        id:13,
        imageSrc:"./Thumbnail/o antava.jpg",
        audioSrc:"./Audio/Oh Antava Mava.mp3",
        title:"Oo Antava - Indravathi Chauhan"
    },
    {
        id:14,
        imageSrc:"./Thumbnail/Parichay.jpg",
        audioSrc:"./Audio/Parichay.mp3",
        title:"Parichay - Amit Bhadana"
    },
    {
        id:15,
        imageSrc:"./Thumbnail/Raataan_Lambiyan.jpg",
        audioSrc:"./Audio/Raataan Lambiyan.mp3",
        title:"Raataan Lambiyan - Jubin Nautiyal & Asees Kaur"
    },
    {
        id:16,
        imageSrc:"./Thumbnail/Srivalli.jpeg",
        audioSrc:"./Audio/Srivalli.mp3",
        title:"Srivalli - Sid Sriram"
    },
    {
        id:17,
        imageSrc:"./Thumbnail/Teri Mitti.jpg",
        audioSrc:"./Audio/Teri Mitti.mp3",
        title:"Teri Mitti - B Praak"
    },
    {
        id:18,
        imageSrc:"./Thumbnail/Teri-Baaton-Mein.jpg",
        audioSrc:"./Audio/Teri-Baaton-Me-Aisa-Uljha-Jiya.mp3",
        title:"Teri Baaton Me - Raghav Mathur"
    },
    {
        id:19,
        imageSrc:"./Thumbnail/Vardaan.jpg",
        audioSrc:"./Audio/Vardaan.mp3",
        title:"Vardaan - Carryminati"
    },
    {
        id:20,
        imageSrc:"./Thumbnail/Yalgaar.jpg",
        audioSrc:"./Audio/Yalgaar.mp3",
        title:"Yalgaar - Carryminati"
    },
    
]

function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    console.log(song.audioSrc);
    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText=song.title;
    document.getElementById("audio_player").play();
}

