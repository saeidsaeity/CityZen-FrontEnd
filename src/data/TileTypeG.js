export default{
    grid_id: { row: null, column: null },
    orientation: 0,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'G',
    is_monestary: false,
    citizen: {
        is_citizen: false,
        asset: null,
        location: null,
        player: null
    },
    assets: {
        0: {
            asset: 'city',
            connects: [2]
        },
        1: {},
        2: {
            asset: 'city',
            connects: [0]
        },
        3: {}
    }
}