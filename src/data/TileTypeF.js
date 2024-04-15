export default{
    grid_id: { row: null, column: null },
    orientation: 0,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'F',
    is_monestary: false,
    citizen: {
        is_citizen: false,
        asset: null,
        location: null,
        player: null
    },
    assets: {
        0: {},
        1: {
            asset: 'city',
            connects: [3]
        },
        2: {},
        3: {
            asset: 'city',
            connects: [1]
        }
    }
}