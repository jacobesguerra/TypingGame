const canvas = document.createElement("canvas")
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor = "black"

const possible = [
    "Apple", "Bridge", "Candle", "Dragon", "Elephant", "Forest", "Garden", "Hammer", "Island", "Jacket",
    "Knight", "Lemon", "Mountain", "Notebook", "Ocean", "Pumpkin", "Quilt", "River", "Sunset", "Tiger",
    "Umbrella", "Valley", "Window", "Xylophone", "Yacht", "Zebra", "Anchor", "Blossom", "Compass", "Desert",
    "Engine", "Feather", "Galaxy", "Harbor", "Igloo", "Journey", "Kingdom", "Lantern", "Melody", "Necklace",
    "Orchard", "Pirate", "Quilt", "Rainbow", "Starfish", "Treasure", "Unicorn", "Village", "Whisper", "Xenon",
    "Yonder", "Zephyr", "Acorn", "Balloon", "Castle", "Dolphin", "Emerald", "Fountain", "Goblin", "Horizon",
    "Icicle", "Jewel", "Kangaroo", "Locket", "Mermaid", "Nectar", "Oasis", "Peacock", "Quiver", "Rosebud",
    "Seaside", "Turtle", "Universe", "Volcano", "Willow", "Xerus", "Yarn", "Zenith", "Aurora", "Butterfly",
    "Coral", "Dragonfly", "Eclipse", "Firefly", "Giraffe", "Hummingbird", "Inkwell", "Jaguar", "Kite", "Lighthouse",
    "Moonlight", "Nebula", "Octopus", "Parrot", "Quasar", "Raccoon", "Seashell", "Telescope", "Urchin", "Voyage",
    "Waterfall", "Xenolith", "Yawning", "Zinnia", "Antelope", "Blossom", "Comet", "Dewdrop", "Elmwood", "Fairy",
    "Griffin", "Honeydew", "Indigo", "Jasmine", "Kaleidoscope", "Lullaby", "Mandolin", "Nightingale", "Obelisk", "Pinecone",
    "Quartz", "Redwood", "Stardust", "Thistle", "Universe", "Vortex", "Windmill", "Xylophone", "Yodel", "Zucchini",
    "Anvil", "Beehive", "Clover", "Dandelion", "Evergreen", "Fable", "Grotto", "Honeybee", "Iridescent", "Jigsaw",
    "Kettle", "Labyrinth", "Meadow", "Nautilus", "Opal", "Papaya", "Quicksand", "Riddle", "Snowflake", "Treetop",
    "Underwater", "Vineyard", "Whirlpool", "Xray", "Yogurt", "Zodiac", "Albatross", "Bonsai", "Crystalline", "Daydream",
    "Enigma", "Fireworks", "Glimmer", "Hologram", "Illusion", "Javelin", "Keepsake",
    "Adventure", "Breeze", "Castle", "Dawn", "Eagle", "Flame", "Garden", "Harbor", "Insect", "Jungle", 
    "Kite", "Legend", "Mirage", "Nebula", "Oasis", "Petal", "Quest", "Raven", "Stream", "Tide", 
    "Unity", "Voyage", "Wave", "Zenith", "Armor", "Beacon", "Chasm", "Desire", "Empire", "Fortune", 
    "Glory", "Horizon", "Inferno", "Journey", "Knoll", "Labyrinth", "Mystery", "Nectar", "Oracle", "Prism", 
    "Realm", "Sanctuary", "Treasure", "Utopia", "Victory", "Whisper", "Zenith", "Artifact", "Blaze", "Chalice", 
    "Dream", "Echo", "Frost", "Griffin", "Haven", "Illusion", "Jewel", "Kingdom", "Lighthouse", "Meadow", 
    "Nightfall", "Oasis", "Portal", "Quest", "Riddle", "Shadow", "Throne", "Umbra", "Vortex", "Wonder", 
    "Zephyr", "Apogee", "Blizzard", "Cascade", "Destiny", "Eclipse", "Fable", "Gale", "Hollow", "Icicle", 
    "Journey", "Keepsake", "Legacy", "Mystic", "Nova", "Odyssey", "Paradox", "Quasar", "Radiance", "Serenity", 
    "Twilight", "Uplift", "Valiant", "Wanderer", "Zeal", "Alpine", "Brilliance", "Crescent", "Dune", "Ember", 
    "Frost", "Glade", "Horizon", "Illusion", "Jubilee", "Kismet", "Luminary", "Mystique", "Nebula", "Oasis", 
    "Pinnacle", "Quintessence", "Rapture", "Solstice", "Tranquil", "Unison", "Verdant", "Whisper", "Zephyr", "Aegis", 
    "Blaze", "Crimson", "Dawn", "Eon", "Frost", "Gale", "Haven", "Infinity", "Journey", "Kaleidoscope", 
    "Luminous", "Mystic", "Nebula", "Odyssey", "Paradox", "Quintessence", "Radiance", "Seraph", "Thrive", "Unity", 
    "Vanguard", "Whisper", "Zealot", "Allegory", "Bliss", "Chasm", "Destiny", "Elysium", "Fortress", "Glade", 
    "Harmony", "Illumination", "Jewel", "Kaleidoscope", "Labyrinth", "Mystic", "Nimbus", "Oasis", "Paradise", "Quest", 
    "Rapture", "Sanctuary", "Throne", "Utopia", "Voyage", "Wanderlust", "Zephyr", "Aether", "Blaze", "Crimson", 
    "Eclipse", "Fable", "Glimmer", "Halo", "Illumination", "Jubilee", "Kismet", "Luminous", "Mirage", "Nirvana", 
    "Odyssey", "Paradox", "Radiance", "Seraph", "Twilight", "Unity", "Vortex", "Whisper", "Zealot", "Azure", 
    "Brilliance", "Crescent", "Dream", "Ember", "Frost", "Glimmer", "Horizon", "Illusion", "Journey", "Kaleidoscope", 
    "Luminary", "Mystique", "Nebula", "Odyssey", "Pinnacle", "Quintessence", "Rapture", "Solstice", "Tranquil", "Unity", 
    "Vanguard", "Whisper", "Zephyr", "Aegis", "Blaze", "Crimson", "Eon", "Frost", "Gale", "Haven", 
    "Infinity", "Journey", "Kaleidoscope", "Luminous", "Mystic", "Nebula", "Odyssey", "Paradox", "Quintessence", "Radiance", 
    "Seraph", "Thrive", "Unity", "Vanguard", "Whisper", "Zealot", "Allegory", "Bliss", "Chasm", "Destiny", 
    "Elysium", "Fortress", "Glade", "Harmony", "Illumination", "Jewel", "Kaleidoscope", "Labyrinth", "Mystic", "Nimbus", 
    "Oasis", "Paradise", "Quest", "Rapture", "Sanctuary", "Throne", "Utopia", "Voyage", "Wanderlust", "Zephyr"
]

let words = []
let popped = []
let alive = true
let started = false
let score = 0
let highScore = 0

class Word {
    constructor(value, color="white") {
        this.value = value
        this.speed = Math.floor(Math.random() * 5) + 1
        this.size = value.length
        this.x = -200
        this.y = Math.floor(Math.random() * (canvas.height * 0.9))
        this.canMove = false
        this.color = color
    }

    move() {
        if(this.canMove) {
            this.x += this.speed
            ctx.font = "48px serif"
            ctx.textBaseline = "middle"
            ctx.textAlign = "left"
            ctx.fillStyle = this.color
            ctx.fillText(this.value, this.x, this.y)
            this.updateSize()
        }
    }
    ready() {
        setTimeout(()=> {this.canMove = true, started = true}, (Math.floor(Math.random()*10)+1)*1000)
    }
    updateSize() {
        this.size = this.value.length 
    }
}

class inputWord extends Word {
    constructor (value, color) {
        super(value, color)
        this.speed = 0
        this.x = canvas.width*0.05
        this.y = canvas.height*0.9
        this.canMove = true
    }

    checkMatches(arr) {
        arr.forEach(i => {
            if(i.value.toLowerCase() === this.value) {
                i.canMove = false; 
                this.value = ""; 
                score++; 
                highScore = score > highScore ? score: highScore
                popped.push(arr[i])
            }
        })
        
    }
}

const typed = new inputWord("", "lightblue")
document.addEventListener("keydown", event =>{
    typed.updateSize()
    if (event.key === "Backspace") {
        typed.value = typed.value === 0 ? "" : typed.value.slice(0, typed.size-1)
    } else if(event.key === "r" && !alive ){
        alive = true
        typed.value = ""
        genWords()

    } else {
        typed.value += "abcdefghijklmnopqrstuvwxyz".includes(event.key) ? event.key : ""
    } 
})

function genWords() {
    words = []
    popped = []
    started = false
    for(let i = 0; i < 10; i++) {
        words.push(new Word(possible[Math.floor(Math.random() *possible.length)]))
    }
    words.forEach(i => i.ready())
}

function checkAlive() {
    words.forEach(i => {
        if (i.x > canvas.width *0.6) {
            alive = false
            words = []
        }
    })
}

function setBorders() {
    ctx.beginPath();
    ctx.strokeStyle = "white"
    ctx.moveTo(canvas.width * 0.6, 0);
    ctx.lineTo(canvas.width *0.6, canvas.height);
    ctx.stroke()
    ctx.font = "50px serif"
    ctx.fillStyle = "lightblue"
    ctx.textBaseline = "middle"
    ctx.textAlign = "center"
    ctx.fillText(`Score: ${score}`, canvas.width *0.1, canvas.height *0.05)
    ctx.fillText(`Highscore: ${highScore}`, canvas.width *0.1, canvas.height *0.15)
}
genWords()

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(alive) { 
        checkAlive(words)
        setBorders()
        words.forEach(i => i.move())
        typed.move()
        typed.checkMatches(words)
        if(started && words.length === popped.length) {
            genWords()
        }
    } else {
        ctx.font = "60px serif"
        ctx.fillStyle = "white"
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.fillText("Game over", canvas.width *0.5, canvas.height *0.35)
        ctx.fillText("Press 'r' to restart", canvas.width *0.5, canvas.height *0.45)
        ctx.fillText(`Highscore: ${highScore}`, canvas.width *0.5, canvas.height *0.55)
        score = 0
    }
    requestAnimationFrame(update)
}

requestAnimationFrame(update)