function songDecoder(song) {
    return song.replace(/WUB/g, " ").replace(/\s\s+/g, ' ').trim();
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));