export interface props {
    [key: string]: any
}

// https://sd-prompt-generator.netlify.app/

export const selectList = [
    {
        id: 1,
        title: "Style",
        name: "style",
        list: [
            { key: "无", value: "" },
            {
                "key": "Abstract Painting",
                "value": "Abstract Painting"
            },
            {
                "key": "Acrylic Painting",
                "value": "Acrylic Painting"
            },
            {
                "key": "Action Painting",
                "value": "Action Painting"
            },
            {
                "key": "Aestheticism Painting",
                "value": "Aestheticism Painting"
            },
            {
                "key": "Anamorphosis Painting",
                "value": "Anamorphosis Painting"
            },
            {
                "key": "Art Deco Painting",
                "value": "Art Deco Painting"
            },
            {
                "key": "Art nouveau Painting",
                "value": "Art nouveau Painting"
            },
            {
                "key": "Ashcan School Painting",
                "value": "Ashcan School Painting"
            },
            {
                "key": "Baroque Painting",
                "value": "Baroque Painting"
            },
            {
                "key": "Body Painting",
                "value": "Body Painting"
            },
            {
                "key": "Canvas Painting",
                "value": "Canvas Painting"
            },
            {
                "key": "Cartoon Painting",
                "value": "Cartoon Painting"
            },
            {
                "key": "Chalk Painting",
                "value": "Chalk Painting"
            },
            {
                "key": "Child's Finger Painting",
                "value": "Child's Finger Painting"
            },
            {
                "key": "Chinese Painting",
                "value": "Chinese Painting"
            },
            {
                "key": "Classicism Painting",
                "value": "Classicism Painting"
            },
            {
                "key": "Collage Painting",
                "value": "Collage Painting"
            },
            {
                "key": "Cubism Painting",
                "value": "Cubism Painting"
            },
            {
                "key": "Dadaism Painting",
                "value": "Dadaism Painting"
            },
            {
                "key": "De Stijl Painting",
                "value": "De Stijl Painting"
            },
            {
                "key": "Der Blaue Painting",
                "value": "Der Blaue Painting"
            },
            {
                "key": "Digital Painting",
                "value": "Digital Painting"
            },
            {
                "key": "Drip Painting",
                "value": "Drip Painting"
            },
            {
                "key": "Enamel Painting",
                "value": "Enamel Painting"
            },
            {
                "key": "Encaustic Painting",
                "value": "Encaustic Painting"
            },
            {
                "key": "Expressionism Painting",
                "value": "Expressionism Painting"
            },
            {
                "key": "Figurativism Painting",
                "value": "Figurativism Painting"
            },
            {
                "key": "Fingerpainting Painting",
                "value": "Fingerpainting Painting"
            },
            {
                "key": "Finger Painting",
                "value": "Finger Painting"
            },
            {
                "key": "Fresco Secco Painting",
                "value": "Fresco Secco Painting"
            },
            {
                "key": "Futurism Painting",
                "value": "Futurism Painting"
            },
            {
                "key": "Genre Painting",
                "value": "Genre Painting"
            },
            {
                "key": "Glitter Glue Painting",
                "value": "Glitter Glue Painting"
            },
            {
                "key": "Gothic Painting",
                "value": "Gothic Painting"
            },
            {
                "key": "Gouache Painting",
                "value": "Gouache Painting"
            },
            {
                "key": "History Painting",
                "value": "History Painting"
            },
            {
                "key": "Hot Wax Painting",
                "value": "Hot Wax Painting"
            },
            {
                "key": "Impressionism Painting",
                "value": "Impressionism Painting"
            },
            {
                "key": "Ink Wash Painting",
                "value": "Ink Wash Painting"
            },
            {
                "key": "Japanese Painting",
                "value": "Japanese Painting"
            },
            {
                "key": "Korean Painting",
                "value": "Korean Painting"
            },
            {
                "key": "Landscape Painting",
                "value": "Landscape Painting"
            },
            {
                "key": "Leaf Painting",
                "value": "Leaf Painting"
            },
            {
                "key": "Marker Painting",
                "value": "Marker Painting"
            },
            {
                "key": "Matte Painting",
                "value": "Matte Painting"
            },
            {
                "key": "Miniature Painting",
                "value": "Miniature Painting"
            },
            {
                "key": "Modernism Painting",
                "value": "Modernism Painting"
            },
            {
                "key": "Mughal Painting",
                "value": "Mughal Painting"
            },
            {
                "key": "Mural Painting",
                "value": "Mural Painting"
            },
            {
                "key": "Oil Painting",
                "value": "Oil Painting"
            },
            {
                "key": "Pastel Painting",
                "value": "Pastel Painting"
            },
            {
                "key": "Pattachitra Painting",
                "value": "Pattachitra Painting"
            },
            {
                "key": "Photorealism Painting",
                "value": "Photorealism Painting"
            },
            {
                "key": "Rajasthan Painting",
                "value": "Rajasthan Painting"
            },
            {
                "key": "Realism Painting",
                "value": "Realism Painting"
            },
            {
                "key": "Reverse Glass Painting",
                "value": "Reverse Glass Painting"
            },
            {
                "key": "Sand Painting",
                "value": "Sand Painting"
            },
            {
                "key": "Speed Painting",
                "value": "Speed Painting"
            },
            {
                "key": "Spray Painting",
                "value": "Spray Painting"
            },
            {
                "key": "Still Life Painting",
                "value": "Still Life Painting"
            },
            {
                "key": "Surrealism Painting",
                "value": "Surrealism Painting"
            },
            {
                "key": "Tanjore Painting",
                "value": "Tanjore Painting"
            },
            {
                "key": "Tempera Painting",
                "value": "Tempera Painting"
            },
            {
                "key": "Velvet Painting",
                "value": "Velvet Painting"
            },
            {
                "key": "Watercolor Painting",
                "value": "Watercolor Painting"
            },
            {
                "key": "Anime Art",
                "value": "Anime Art"
            },
            {
                "key": "Bedazzled Art Style",
                "value": "Bedazzled Art Style"
            },
            {
                "key": "Button Art",
                "value": "Button Art"
            },
            {
                "key": "Chalk Art",
                "value": "Chalk Art"
            },
            {
                "key": "Comic Book Art",
                "value": "Comic Book Art"
            },
            {
                "key": "Conceptual Art",
                "value": "Conceptual Art"
            },
            {
                "key": "Leather Art Style",
                "value": "Leather Art Style"
            },
            {
                "key": "Line Art",
                "value": "Line Art"
            },
            {
                "key": "Marble Art",
                "value": "Marble Art"
            },
            {
                "key": "Pop Art painting",
                "value": "Pop Art painting"
            },
            {
                "key": "Portrait Art",
                "value": "Portrait Art"
            },
            {
                "key": "Sand Art",
                "value": "Sand Art"
            },
            {
                "key": "Street Art",
                "value": "Street Art"
            },
            {
                "key": "Woven Art",
                "value": "Woven Art"
            },
            {
                "key": "Anime Style",
                "value": "Anime Style"
            },
            {
                "key": "Atari 2600 Style",
                "value": "Atari 2600 Style"
            },
            {
                "key": "Bauhaus Style",
                "value": "Bauhaus Style"
            },
            {
                "key": "Coloring Book Style",
                "value": "Coloring Book Style"
            },
            {
                "key": "Constructivism Style",
                "value": "Constructivism Style"
            },
            {
                "key": "Fauvism Style",
                "value": "Fauvism Style"
            },
            {
                "key": "Glitter Style",
                "value": "Glitter Style"
            },
            {
                "key": "GTAV Style",
                "value": "GTAV Style"
            },
            {
                "key": "NES Style",
                "value": "NES Style"
            },
            {
                "key": "Retro Comic Book Style",
                "value": "Retro Comic Book Style"
            },
            {
                "key": "SNES Style",
                "value": "SNES Style"
            },
            {
                "key": "Studio Ghibli Style",
                "value": "Studio Ghibli Style"
            },
            {
                "key": "Woodburning Style",
                "value": "Woodburning Style"
            },
            {
                "key": "Woodcut Style",
                "value": "Woodcut Style"
            },
            {
                "key": "Ballpoint Pen Drawing",
                "value": "Ballpoint Pen Drawing"
            },
            {
                "key": "Blue Ballpoint Pen Drawing",
                "value": "Blue Ballpoint Pen Drawing"
            },
            {
                "key": "Colored Pencil Drawing",
                "value": "Colored Pencil Drawing"
            },
            {
                "key": "Pencil Drawing",
                "value": "Pencil Drawing"
            },
            {
                "key": "Red Ballpoint Pen Drawing",
                "value": "Red Ballpoint Pen Drawing"
            },
            {
                "key": "Comic Book Cover",
                "value": "Comic Book Cover"
            },
            {
                "key": "Comic Book",
                "value": "Comic Book"
            },
            {
                "key": "Comic Book Panel",
                "value": "Comic Book Panel"
            },
            {
                "key": "Colored Pencil Sketch",
                "value": "Colored Pencil Sketch"
            },
            {
                "key": "Pencil Sketch",
                "value": "Pencil Sketch"
            },
            {
                "key": "3D Render",
                "value": "3D Render"
            },
            {
                "key": "Boxart",
                "value": "Boxart"
            },
            {
                "key": "Children's Book",
                "value": "Children's Book"
            },
            {
                "key": "Coloring Book",
                "value": "Coloring Book"
            },
            {
                "key": "Copper Plate Engraving",
                "value": "Copper Plate Engraving"
            },
            {
                "key": "Cross-Stitch",
                "value": "Cross-Stitch"
            },
            {
                "key": "Diamond Engraving",
                "value": "Diamond Engraving"
            },
            {
                "key": "Icon",
                "value": "Icon"
            },
            {
                "key": "Linocut",
                "value": "Linocut"
            },
            {
                "key": "Lowpoly",
                "value": "Lowpoly"
            },
            {
                "key": "Old Black and White Photograph",
                "value": "Old Black and White Photograph"
            },
            {
                "key": "Photograph",
                "value": "Photograph"
            },
            {
                "key": "Pixelart",
                "value": "Pixelart"
            },
            {
                "key": "Pop Up Book",
                "value": "Pop Up Book"
            },
            {
                "key": "Ring Engraving",
                "value": "Ring Engraving"
            },
            {
                "key": "Spray Paint",
                "value": "Spray Paint"
            },
            {
                "key": "Stained Glass",
                "value": "Stained Glass"
            },
            {
                "key": "Sticker",
                "value": "Sticker"
            },
            {
                "key": "Stone Cut",
                "value": "Stone Cut"
            }
        ]
    },
    {
        id: 2,
        title: "Modifiers (select multiple)",
        name: "md",
        list: [
            { key: "无", value: "" },
            { key: "电影", value: "cinematic" },
            { key: "hd", value: "hd" },
            { key: "4k", value: "4k" },
            { key: "8k", value: "8k" },
            { key: "3d", value: "3d" },
            { key: "3d", value: "3d" },
            { key: "高度详细", value: "高度详细" },
            { key: "辛烷值", value: "辛烷值" },
            { key: "趋势艺术站", value: "趋势艺术站" },
            { key: "像素化", value: "像素化" },
            { key: "模糊", value: "模糊" },
            { key: "美丽", value: "美丽" },
            { key: "非常美丽", value: "非常美丽" },
            { key: "超级美丽", value: "超级美丽" },
            { key: "对称", value: "Symmetrical" },
            { key: "毛骨悚然", value: "Macabre" },
            { key: "夜晚", value: "at light" },
        ]
    },
    {
        id: 3,
        title: "Time",
        name: "tim",
        list: [
            { key: "Ai决定", value: "" },
            { key: "未来主义", value: "futuristic" },
            { key: "现代", value: "modern" },
            { key: "古代", value: "ancient" },
            { key: "古董", value: "antique" },
            { key: "复古", value: "Retro" },
            { key: "老式", value: "old-fashioned" },
            { key: "青春", value: "youthful" },
        ]
    },
    {
        id: 4,
        title: "Light",
        name: "light",
        list: [
            { key: "Ai决定", value: "" },
            { key: "日光", value: "daylight" },
            { key: "月光", value: "moonlight" },
            { key: "自然光", value: "natural light" },
            { key: "前光", value: "Front Light" },
            { key: "背光", value: "BackLight" },
            { key: "柔光", value: "Soft Light" },
            { key: "强光", value: "Hard Light" },
            { key: "穆迪之光", value: "Moody Light" },
            { key: "动态光", value: "Dynamic Light" },
        ]
    },
    {
        id: 5,
        title: "Colors",
        name: "colors",
        list: [
            { key: "Ai决定", value: "" },
            { key: "多彩", value: "colorful" },
            { key: "白色", value: "Black and white" },
            { key: "灰度", value: "Greyscale" },
        ]
    },
    {
        id: 6,
        title: "Artist",
        name: "artist",
        list: [
            { key: "无", value: "" },
            {
                "key": "Agnes Lawrence Pelton",
                "value": "Agnes Lawrence Pelton"
            },
            {
                "key": "Akihito Yoshida",
                "value": "Akihito Yoshida"
            },
            {
                "key": "Alex Grey",
                "value": "Alex Grey"
            },
            {
                "key": "Alexander Jansson",
                "value": "Alexander Jansson"
            },
            {
                "key": "Alphonse Mucha",
                "value": "Alphonse Mucha"
            },
            {
                "key": "Andy Warhol",
                "value": "Andy Warhol"
            },
            {
                "key": "Artgerm",
                "value": "Artgerm"
            },
            {
                "key": "Asaf Hanuka",
                "value": "Asaf Hanuka"
            },
            {
                "key": "Aubrey Beardsley",
                "value": "Aubrey Beardsley"
            },
            {
                "key": "Banksy",
                "value": "Banksy"
            },
            {
                "key": "Beeple",
                "value": "Beeple"
            },
            {
                "key": "Ben Enwonwu",
                "value": "Ben Enwonwu"
            },
            {
                "key": "Bob Eggleton",
                "value": "Bob Eggleton"
            },
            {
                "key": "Caravaggio Michelangelo Merisi",
                "value": "Caravaggio Michelangelo Merisi"
            },
            {
                "key": "Caspar David Friedrich",
                "value": "Caspar David Friedrich"
            },
            {
                "key": "Chris Foss",
                "value": "Chris Foss"
            },
            {
                "key": "Claude Monet",
                "value": "Claude Monet"
            },
            {
                "key": "Dan Mumford",
                "value": "Dan Mumford"
            },
            {
                "key": "David Mann",
                "value": "David Mann"
            },
            {
                "key": "Diego Velázquez",
                "value": "Diego Velázquez"
            },
            {
                "key": "Disney Animation Studios",
                "value": "Disney Animation Studios"
            },
            {
                "key": "Édouard Manet",
                "value": "Édouard Manet"
            },
            {
                "key": "Esao Andrews",
                "value": "Esao Andrews"
            },
            {
                "key": "Frida Kahlo",
                "value": "Frida Kahlo"
            },
            {
                "key": "Gediminas Pranckevicius",
                "value": "Gediminas Pranckevicius"
            },
            {
                "key": "Georgia O'Keeffe",
                "value": "Georgia O'Keeffe"
            },
            {
                "key": "Greg Rutkowski",
                "value": "Greg Rutkowski"
            },
            {
                "key": "Gustave Doré",
                "value": "Gustave Doré"
            },
            {
                "key": "Gustave Klimt",
                "value": "Gustave Klimt"
            },
            {
                "key": "H.R. Giger",
                "value": "H.R. Giger"
            },
            {
                "key": "Hayao Miyazaki",
                "value": "Hayao Miyazaki"
            },
            {
                "key": "Henri Matisse",
                "value": "Henri Matisse"
            },
            {
                "key": "HP Lovecraft",
                "value": "HP Lovecraft"
            },
            {
                "key": "Ivan Shishkin",
                "value": "Ivan Shishkin"
            },
            {
                "key": "Jack Kirby",
                "value": "Jack Kirby"
            },
            {
                "key": "Jackson Pollock",
                "value": "Jackson Pollock"
            },
            {
                "key": "James Jean",
                "value": "James Jean"
            },
            {
                "key": "Jim Burns",
                "value": "Jim Burns"
            },
            {
                "key": "Johannes Vermeer",
                "value": "Johannes Vermeer"
            },
            {
                "key": "John William Waterhouse",
                "value": "John William Waterhouse"
            },
            {
                "key": "Katsushika Hokusai",
                "value": "Katsushika Hokusai"
            },
            {
                "key": "Kim Tschang Yeul",
                "value": "Kim Tschang Yeul"
            },
            {
                "key": "Ko Young Hoon",
                "value": "Ko Young Hoon"
            },
            {
                "key": "Leonardo da Vinci",
                "value": "Leonardo da Vinci"
            },
            {
                "key": "Lisa Frank",
                "value": "Lisa Frank"
            },
            {
                "key": "M.C. Escher",
                "value": "M.C. Escher"
            },
            {
                "key": "Mahmoud Saïd",
                "value": "Mahmoud Saïd"
            },
            {
                "key": "Makoto Shinkai",
                "value": "Makoto Shinkai"
            },
            {
                "key": "Marc Simonetti",
                "value": "Marc Simonetti"
            },
            {
                "key": "Mark Brooks",
                "value": "Mark Brooks"
            },
            {
                "key": "Michelangelo",
                "value": "Michelangelo"
            },
            {
                "key": "Pablo Picasso",
                "value": "Pablo Picasso"
            },
            {
                "key": "Paul Klee",
                "value": "Paul Klee"
            },
            {
                "key": "Peter Mohrbacher",
                "value": "Peter Mohrbacher"
            },
            {
                "key": "Pierre-Auguste Renoir",
                "value": "Pierre-Auguste Renoir"
            },
            {
                "key": "Pixar Animation Studios",
                "value": "Pixar Animation Studios"
            },
            {
                "key": "Rembrandt",
                "value": "Rembrandt"
            },
            {
                "key": "Richard Dadd",
                "value": "Richard Dadd"
            },
            {
                "key": "Rossdraws",
                "value": "Rossdraws"
            },
            {
                "key": "Salvador Dalí",
                "value": "Salvador Dalí"
            },
            {
                "key": "Sam Does Arts",
                "value": "Sam Does Arts"
            },
            {
                "key": "Sandro Botticelli",
                "value": "Sandro Botticelli"
            },
            {
                "key": "Ted Nasmith",
                "value": "Ted Nasmith"
            },
            {
                "key": "Ten Hundred",
                "value": "Ten Hundred"
            },
            {
                "key": "Thomas Kinkade",
                "value": "Thomas Kinkade"
            },
            {
                "key": "Tivadar Csontváry Kosztka",
                "value": "Tivadar Csontváry Kosztka"
            },
            {
                "key": "Victo Ngai",
                "value": "Victo Ngai"
            },
            {
                "key": "Vincent Di Fate",
                "value": "Vincent Di Fate"
            },
            {
                "key": "Vincent van Gogh",
                "value": "Vincent van Gogh"
            },
            {
                "key": "Wes Anderson",
                "value": "Wes Anderson"
            },
            {
                "key": "wlop",
                "value": "wlop"
            },
            {
                "key": "Yoshitaka Amano",
                "value": "Yoshitaka Amano"
            }
        ]
    }
]