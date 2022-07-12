const quotes = [
    {
        quotes: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
        author: "이사야 41장"
    },
    {
        quotes: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다",
        author: "시편 119편"
    },
    {
        quotes: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라",
        author: "빌립보서 4:6"
    },
    {
        quotes: "그러나 너희는 택하신 족속이요 왕 같은 제사장들이요 거룩한 나라요 그의 소유가 된 백성이니 이는 너희를 어두운 데서 불러 내어 그의 기이한 빛에 들어가게 하신 이의 아름다운 덕을 선포하게 하려 하심이라",
        author: "베드로전서 2:9"
    },
    {
        quotes: "하나님의 말씀은 살아 있고 활력이 있어 좌우에 날선 어떤 검보다도 예리하여 혼과 영과 및 관절과 골수를 찔러 쪼개기까지 하며 또 마음의 생각과 뜻을 판단하나니",
        author: "히브리서 4:12"
    },
    {
        quotes: "우리가 다 하나님의 아들을 믿는 것과 아는 일에 하나가 되어 온전한 사람을 이루어 그리스도의 장성한 분량이 충만한 데까지 이르리니",
        author: "에베소서 4:13"
    },
    {
        quotes: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라",
        author: "로마서 8:28"
    },
    {
        quotes: "그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라",
        author: "로마서 10:17"
    },
    {
        quotes: "사람이 감당할 시험 밖에는 너희가 당한 것이 없나니 오직 하나님은 미쁘사 너희가 감당하지 못할 시험 당함을 허락하지 아니하시고 시험 당할 즈음에 또한 피할 길을 내사 너희로 능히 감당하게 하시느니라",
        author: "고린도전서 10:13"
    },
    {
        quotes: "모든 성경은 하나님의 감동으로 된 것으로 교훈과 책망과 바르게 함과 의로 교육하기에 유익하니",
        author: "디모데후서 3:16"
    },
    {
        quotes: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
        author: "요한복음 3:16"
    }
]

const QUOTE = document.querySelector("#quotes li:first-child");
const AUTHOR = document.querySelector("#quotes li:last-child");

// Math.random() * 10

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

QUOTE.innerText = todayQuote.quotes;
AUTHOR.innerText = todayQuote.author;