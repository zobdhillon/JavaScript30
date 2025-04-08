const bands = [
    "The Midnight Horizon",
    "A Solar Serenade",
    "The Velvet Mirage",
    "A Crimson Tapestry",
    "The Obsidian Rift",
    "A Radiant Dawn",
    "The Phantom Nomads",
    "A Dusk Symphony",
    "The Starlit Echo",
    "A Nebula Canvas",
    "The Electric Eclipse",
    "A Lunar Reverie",
    "The Rusted Zephyr",
    "A Granite Tide",
    "The Chromatic Veil"
  ]

  function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }

  const sortBands = bands.sort(function(a, b) {
    if(strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});

document.querySelector('#bands').innerHTML = sortBands.map(band => `<li>${band}</li>`).join('');