export default {
    grid_id: { row: null, column: null },
    orientation: 0,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'A',
    is_monestary: true,
    citizen: {
        is_citizen: false,
        asset: null,
        location: null,
        player: null
    },
    assets: {
        0: {},
        1: {},
        2: {
            asset: "road",
            connects: []
        },
        3: {}
    }
}