// // // // This file contains the JavaScript code for the simple dictionary project.

// const dictionary = {
//     "apple": "सफरचंद",
//     "banana": "केळी",
//     "cherry": "चेरी",
//     "date": "खाजूर",
//     "elderberry": "एल्डरबेरी",
//     "fig": "अंजीर",
//     "grape": "द्राक्ष",
//     "honeydew": "हनीड्यू",
//     "kiwi": "किवी",
//     "lemon": "लिंबू",
//     "mango": "आंबा",
//     "nectarine": "नेक्टरीन",
//     "orange": "संत्रा",
//     "papaya": "पपई",
//     "quince": "क्विंस",
//     "raspberry": "रस्पबेरी",
//     "strawberry": "स्ट्रॉबेरी",
//     "tangerine": "टॅन्जरीन",   
//     "watermelon": "कलंजीरी",
//     "zucchini": "झुकिनी",
//     "avocado": "अवोकाडो",
//     "blackberry": "ब्लॅकबेरी",
//     "cantaloupe": "कॅन्टलोप",
//     "dragonfruit": "ड्रॅगनफ्रुट",
//     "guava": "पेरू",
//     "huckleberry": "हकलबेरी",
//     "jackfruit": "फणस",
//     "kumquat": "कुंक्वाट",
//     "lychee": "लिची",
//     "mulberry": "मलबेरी",
//     "nutmeg": "जायफळ",
//     "olive": "जैतून",
//     "papaya": "पपई",
//     "quince": "क्विंस",
//     "raspberry": "रस्पबेरी",
//     "strawberry": "स्ट्रॉबेरी",
//     "tangerine": "टॅन्जरीन",
//     "watermelon": "कलंजीरी",
//     "zucchini": "झुकिनी",
//     "avocado": "अवोकाडो",
//     "blackberry": "ब्लॅकबेरी",
//     "cantaloupe": "कॅन्टलोप",
//     "dragonfruit": "ड्रॅगनफ्रुट",
//     "guava": "पेरू",
//     "huckleberry": "हकलबेरी",
//     "jackfruit": "फणस",
//     "kumquat": "कुंक्वाट",
//     "lychee": "लिची",
//     "mulberry": "मलबेरी",
//     "nutmeg": "जायफळ",
//     "olive": "जैतून", 
//     "pear": "नाशपाती",
//     "quince": "क्विंस",
//     "raisin": "किशमिश",
//     "starfruit": "कामरख",
//     "tomato": "टमाटर",
//     "ugli": "अगली",
//     "vanilla": "व्हॅनिला",
//     "watermelon": "कलंजीरी",
//     "xigua": "शिगुआ",
//     "yam": "सुरण",
//     "rose": "गुलाब",
//     "lily": "कुंद",
//     "lotus": "कमल",
//     "jasmine": "चमेली",
//     "marigold": "गेंदा",
//     "sunflower": "सूर्यफूल",
//     "daisy": "डेझी",
//     "daffodil": "नर्सिसस",
//     "tulip": "तुलिप",
//     "carnation": "कार्नेशन",
//     "hibiscus": "गुडहळ",
//     "orchid": "ऑर्किड",
//     "dahlia": "डेलिया",
//     "chrysanthemum": "च्रिसॅन्थेमम",
//     "gerbera": "गरबेरा",
//     "anthurium": "एंथुरियम",
//     "bird of paradise": "परदेशी पक्षी",
//     "crocus": "क्रोकस",
//     "dandelion": "डॅन्डेलियन",
//     "freesia": "फ्रीशिया",
//     "gladiolus": "ग्लेडियोलस",
//     "hydrangea": "हायड्रेंजिया",
//     "iris": "आयरिस",
//     "lavender": "लॅवेंडर",
//     "lilac": "लॅईलॅक",
//     "magnolia": "मॅग्नोलिया",
//     "peony": "पिओनी",
//     "poppy": "पॉपी",
//     "snapdragon": "स्नॅपड्रॅगन",
//     "zinnia": "झिनिया"
// };

const dictionary = {
    "fruits": 
    {
        meaning: "फळ, फळांची वनस्पती",
        images: ["fruits1.jpeg"],
        videos: ["fruits.mp4"]
    },
    "flowers": 
    {
        meaning: "फुल, फुलांची वनस्पती",
        images: ["Fowers-Names-576x1024.webp"],
        videos: ["flowers.mp4"]
    },
    "clothes": 
    {
        meaning: "कपडे, वस्त्र, वस्त्राणि",
        images: ["clothes.jpeg"],
        videos: ["clothes.mp4"]
    },
    "vegetables":
    {
        meaning: "भाज्या",
        images: ["vegitables.jpeg"],
        videos: ["vegitables.mp4"]
    },
    "animals":
    {
        meaning: "प्राणी",
        images: ["animals.webp"],
        videos: ["animals.mp4"]
    }
    // Add more words and their meanings, images, and videos here
};

document.getElementById('searchButton').addEventListener('click', function() {
    const word = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    const mediaElement = document.getElementById('media');

    if (dictionary[word]) {
        wordElement.textContent = word.charAt(0).toUpperCase() + word.slice(1);
        meaningElement.textContent = dictionary[word].meaning;
        
        // Clear previous media
        mediaElement.innerHTML = '';

        // Add images
        dictionary[word].images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            mediaElement.appendChild(img);
        });

        // Add videos
        dictionary[word].videos.forEach(video => {
            const iframe = document.createElement('iframe');
            iframe.src = video;
            iframe.width = "560";
            iframe.height = "315";
            iframe.allowFullscreen = true;
            mediaElement.appendChild(iframe);
        });

        resultDiv.style.display = 'block';
    } else {
        alert("Word not found in the dictionary.");
        resultDiv.style.display = 'none';
    }
});
