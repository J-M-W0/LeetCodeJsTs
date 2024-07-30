function isPathCrossing(path: string): boolean {
    let coordinate: [number, number] = [0, 0];  // [x, y]
    let set = new Set<string>();
    set.add(coordinate.toString());
    for (let p of path) {
        switch (p) {
            case 'N':
                coordinate[1] += 1;
                break;
            case 'S':
                coordinate[1] -= 1;
                break;
            case 'E':
                coordinate[0] += 1;
                break;
            case 'W':
                coordinate[0] -= 1;
                break;
            default:
                throw new Error('Invalid move');
        }
        if (set.has(coordinate.toString())) {
            return true;
        }
        set.add(coordinate.toString());
    }
    return false;
};

const isPathCrossing2 = (path: string): boolean => {
    let x = 0;
    let y = 0;
    let set = new Set<string>();
    set.add(x + ',' + y);
    for (let p of path) {
        switch (p) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }
        const key = `${x},${y}`;
        if (set.has(key)) {
            return true;
        }
        set.add(key);
    }
    return false;
};
